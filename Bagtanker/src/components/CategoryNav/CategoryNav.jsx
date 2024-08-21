import styles from './CategoryNav.module.scss';
import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { SupabaseContext } from '../../providers/supabaseProvider';

const CategoryNav = () => {

    const supabase = useContext(SupabaseContext)
    const [categories, setCategories] = useState([])

    const fetchCategories = async () => {

        const { data, error } = await supabase
            .from('categories')
            .select('title, id')

        if (error) {
            console.log(error)
        } else {
            setCategories(data)


        }

    }

    useEffect(() => {
        fetchCategories();


    }, [])

    return (
        <nav className={styles.categoryNav}>
            <ul className={styles.list}>
                {categories.map(category => (
                    <li className={styles.listItem} key={category.id}>
                        <NavLink to={`produkter/${category.title.toLowerCase()}`}>{category.title}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )

}

export default CategoryNav