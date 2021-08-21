import s from './SearchMovies.module.css';
import React, { useState } from 'react';

function SearchMovie({ onSubmit }) {
    const [query, setQuery] = useState('');

    const handleChange = e => {
        setQuery(e.currentTarget.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(query);
        setQuery('');
    };

    return (
        <header className={s.SearchMovie}>
            <form className={s.SearchForm} onSubmit={handleSubmit}>
                <button type="submit" className={s.SearchForm_button}>
                    <span className={s.SearchForm_button_label}>Search</span>
                </button>

                <input
                    className={s.SearchForm_input}
                    value={query}
                    onChange={handleChange}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    );
}

export default SearchMovie;
