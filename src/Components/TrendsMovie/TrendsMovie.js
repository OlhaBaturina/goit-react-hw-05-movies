import s from './TrendsMovie.module.css';
import { useState, useEffect } from 'react';
import { fetchAPI } from '../../servises/useFetch';
import { NavLink } from 'react-router-dom';

export default function TrendsMovie() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchAPI.getDaysTrends().then(setMovies);
    }, []);
    console.log(movies);

    return (
        <>
            <h1>Trending today</h1>
            <ul className={s.filmsList}>
                {movies.map(movie => (
                    <li className={s.filmLink} key={movie.id}>
                        {/* <NavLink > */}
                        {movie.title || movie.name}
                        {/* </NavLink> */}
                    </li>
                ))}
            </ul>
        </>
    );
}
