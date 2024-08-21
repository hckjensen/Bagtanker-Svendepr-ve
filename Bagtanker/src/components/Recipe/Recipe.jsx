import styles from './Recipe.module.scss';
import { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SupabaseContext } from '../../providers/supabaseProvider';

const formatDuration = (minutes) => {
    const days = Math.floor(minutes / 1440);
    const hours = Math.floor((minutes % 1440) / 60);
    const mins = minutes % 60;

    let formattedDuration = '';
    if (days > 0) {
        formattedDuration += `${days} dag(e) `;
    }
    if (hours > 0 || days > 0) {
        formattedDuration += `${hours} t `;
    }
    if (mins > 0) {
        formattedDuration += `${mins} min`;
    }

    return formattedDuration.trim();
};



const Recipe = ({ amount, duration, productId }) => {
    const supabase = useContext(SupabaseContext);
    const [ingredients, setIngredients] = useState([]);

    const fetchIngredients = async () => {
        // Step 1: Fetch ingredient_ids, amounts, and unit_ids from ingredients_products_rel table
        const { data: ingredientRelData, error: ingredientRelError } = await supabase
            .from('ingredients_products_rel')
            .select('ingredient_id, amount, unit_id')
            .eq('product_id', productId);

        if (ingredientRelError) {
            console.log(ingredientRelError);
            return;
        }

        // Extract ingredient IDs from the ingredient relationship data
        const ingredientIds = ingredientRelData.map(item => item.ingredient_id);

        // Create an object that maps ingredient IDs to their respective amounts and unit IDs
        const ingredientAmounts = ingredientRelData.reduce((acc, item) => {
            // For each item, add an entry to the accumulator object with the ingredient ID as the key
            // and an object containing the amount and unit ID as the value
            acc[item.ingredient_id] = { amount: item.amount, unit_id: item.unit_id };
            return acc;
        }, {});

        // Step 2: Fetch units from the 'units' table using the unit IDs
        const unitIds = ingredientRelData.map(item => item.unit_id);
        const { data: unitData, error: unitError } = await supabase
            .from('units')
            .select('id, abbreviation')
            .in('id', unitIds);

        // Log the unit error to the console and exit the function if there's an error
        if (unitError) {
            console.log(unitError);
            return;
        }

        // Create a map of unit IDs to their abbreviations
        const unitMap = unitData.reduce((acc, unit) => {
            // For each unit, add an entry to the accumulator object with the unit ID as the key
            // and the unit abbreviation as the value
            acc[unit.id] = unit.abbreviation;
            return acc;
        }, {});

        // Step 3: Fetch ingredients from the 'ingredients' table using the ingredient IDs
        const { data: ingredientsData, error: ingredientsError } = await supabase
            .from('ingredients')
            .select('id, title')
            .in('id', ingredientIds);

        // Log the ingredients error to the console if there's an error
        if (ingredientsError) {
            console.log(ingredientsError);
        } else {
            // Combine ingredient data with their respective amounts and units
            const combinedIngredients = ingredientsData.map(ingredient => ({
                // Spread the ingredient object to include its existing properties
                ...ingredient,
                // Add the amount from the ingredientAmounts object using the ingredient ID as the key
                amount: ingredientAmounts[ingredient.id].amount,
                // Add the unit abbreviation from the unitMap object using the unit ID from the ingredientAmounts object
                unit: unitMap[ingredientAmounts[ingredient.id].unit_id]
            }));
            // Update the state with the combined ingredients data
            setIngredients(combinedIngredients);
        }
    };

    // useEffect hook to fetch ingredients when the productId changes
    useEffect(() => {
        // Check if productId is defined before fetching ingredients
        if (productId) {
            fetchIngredients();
        }
    }, [productId]);



    return (
        <div className={styles.recipe}>
            <h3>Opskrift</h3>
            <div className={styles.recipeInfo}>
                <p>Varighed: {formatDuration(duration)}</p>
                <p>Antal: {amount} stk</p>
            </div>
            <div className={styles.ingredients}>
                {ingredients.length > 0 ? (
                    ingredients.map((ingredient, index) => (
                        <p key={index}>{ingredient.amount} {ingredient.unit} {ingredient.title} </p>
                    ))
                ) : (
                    <p>Loading ingredients...</p>
                )}
            </div>

        </div>
    );
};

Recipe.propTypes = {
    amount: PropTypes.number,
    duration: PropTypes.number,
    productId: PropTypes.string

};

export default Recipe;