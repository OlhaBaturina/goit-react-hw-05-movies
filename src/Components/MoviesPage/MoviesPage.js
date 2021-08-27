import s from './MoviesPage.module.css';
import React, { useState, useEffect } from 'react';
import { fetchAPI } from '../../servises/useFetch';
import { Link, useLocation, useHistory } from 'react-router-dom';
import CustomLoader from '../Loader/Loader';
import NotFound from '../../views/NotFound';
import { useRouteMatch } from 'react-router';
import slug from 'slug';

const makeSlug = string => slug(string, { lower: true });

function SearchMovie() {
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState(null);
    const [films, setFilms] = useState([]);
    const location = useLocation();
    const history = useHistory();
    const { url } = useRouteMatch();
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
        <div className={s.Container}>
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

            {(status === 'pending' &&
                (films.length >= 1 ? (
                    <ul>
                        {films.map(film => (
                            <li key={film.id} className={s.listItem}>
                                <Link
                                    to={{
                                        pathname: `${url}/${makeSlug(
                                            `${film.title || film.name} ${
                                                film.id
                                            }`,
                                        )}`,
                                        state: { from: location },
                                    }}
                                >
                                    {film.title || film.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <NotFound />
                ))) ||
                (status === 'loading' && <CustomLoader />) ||
                (status === 'rejected' && <NotFound />)}
        </div>
    );
}

export default SearchMovie;
