import s from './MoviesPage.module.css';
import React, { useState, useEffect } from 'react';
import { fetchAPI } from '../../servises/useFetch';
import { Link, useLocation, useHistory } from 'react-router-dom';

function SearchMovie() {
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState(null);
    const [films, setFilms] = useState([]);
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        search && fetchAPI.getFilmBySearch(search).then(setFilms);
    }, [search]);

    const handleChange = e => {
        setQuery(e.currentTarget.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        setSearch(query);
        setQuery('');
    };

    return (
        <div>
            <header className={s.SearchMovie}>
                <form className={s.SearchForm} onSubmit={handleSubmit}>
                    <button type="submit" className={s.SearchForm_button}>
                        <span className={s.SearchForm_button_label}>
                            Search
                        </span>
                    </button>

                    <input
                        className={s.SearchForm_input}
                        value={query}
                        onChange={handleChange}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movie"
                    />
                </form>
            </header>

            {films.length > 0 && (
                <ul>
                    {films.map(film => (
                        <li key={film.id} className={s.listItem}>
                            <Link
                                to={{
                                    pathname: `/movies/${film.id}`,
                                    state: { from: location },
                                }}
                            >
                                {film.title || film.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}

            {films.length === 0 && search && (
                <>
                    <h2>No movies for your request</h2>
                    <img
                        src="https://mtdata.ru/u8/photo39C2/20569542232-0/original.jpg"
                        alt="Not found"
                        width="360"
                    />
                </>
            )}
        </div>
    );
}

export default SearchMovie;
