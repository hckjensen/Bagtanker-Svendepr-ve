import { createContext } from 'react';
import { createClient } from '@supabase/supabase-js';
import PropTypes from 'prop-types';

const supabaseUrl = "https://ancusksjlforcnbytlel.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuY3Vza3NqbGZvcmNuYnl0bGVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQwNTA1MTcsImV4cCI6MjAzOTYyNjUxN30._LgnT1PcJpKCpeQpzhUKK8v7ntzuWEetyPr_0_pQ5Ao";
const supabase = createClient(supabaseUrl, supabaseKey);

export const SupabaseContext = createContext(supabase);

export const SupabaseProvider = ({ children }) => {
    return (
        <SupabaseContext.Provider value={supabase}>
            {children}
        </SupabaseContext.Provider>
    );
};

SupabaseProvider.propTypes = {
    children: PropTypes.node.isRequired,
};