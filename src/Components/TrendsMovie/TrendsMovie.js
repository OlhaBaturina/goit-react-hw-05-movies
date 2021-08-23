import s from './TrendsMovie.module.css';
import { useState, useEffect } from 'react';
import { fetchAPI } from '../../servises/useFetch';
import { Link, useRouteMatch } from 'react-router-dom';

export default function TrendsMovie() {
    const { url } = useRouteMatch();
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
                        {console.log(movie.id)}
                        <Link to={`/movies/${movie.id}`}>
                            {movie.title || movie.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
