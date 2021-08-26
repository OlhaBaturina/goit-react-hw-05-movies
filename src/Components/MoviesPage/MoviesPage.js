import s from './MoviesPage.module.css';
import React, { useState, useEffect } from 'react';
import { fetchAPI } from '../../servises/useFetch';
import { Link, useLocation, useHistory } from 'react-router-dom';
import CustomLoader from '../Loader/Loader';

function SearchMovie() {
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState(null);
    const [films, setFilms] = useState([]);
    const location = useLocation();
    const history = useHistory();
    const urlQuery = new URLSearchParams(location.search).get('search');
    const [status, setStatus] = useState('pending');

    useEffect(() => {
        setStatus('loading');
        search &&
            fetchAPI
                .getFilmBySearch(search)
                .then(r => {
                    console.log(r);
                    setFilms(r);
                    setStatus('pending');
                })
                .catch(error => error && setStatus('rejected'));
    }, [search]);

    const handleChange = e => {
        setQuery(e.currentTarget.value);
    };

    useEffect(() => {
        if (search === null) {
            setSearch(urlQuery);
        }
    }, []);

    const handleSubmit = e => {
        e.preventDefault();

        setSearch(query);
        history.push({
            ...location,
            search: `search=${query}`,
        });
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

            {(status === 'pending' && (
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
            )) ||
                (status === 'loading' && <CustomLoader />) ||
                (status === 'rejected' && (
                    <div>
                        <h1>No movies for your request</h1>
                        <img
                            src="https://mtdata.ru/u8/photo39C2/20569542232-0/original.jpg"
                            alt="Page not found"
                            width="360"
                        />
                    </div>
                ))}
        </div>
    );
}

export default SearchMovie;
