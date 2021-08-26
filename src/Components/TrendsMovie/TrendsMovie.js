import s from './TrendsMovie.module.css';
import { useState, useEffect } from 'react';
import { fetchAPI } from '../../servises/useFetch';
import { Link, useRouteMatch, useLocation, useHistory } from 'react-router-dom';

export default function TrendsMovie() {
    const [movies, setMovies] = useState([]);
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        fetchAPI.getDaysTrends().then(setMovies);
    }, []);

    return (
        <div>
            <h1>Trending today</h1>
            <ul className={s.filmsList}>
                {movies.map(movie => (
                    <li className={s.filmLink} key={movie.id}>
                        <Link
                            to={{
                                pathname: `/movies/${movie.id}`,
                                state: { from: location },
                            }}
                        >
                            {movie.title || movie.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
