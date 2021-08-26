import s from './TrendsMovie.module.css';
import { useState, useEffect } from 'react';
import { fetchAPI } from '../../servises/useFetch';
import { Link, useLocation } from 'react-router-dom';
import CustomLoader from '../Loader/Loader';

export default function TrendsMovie() {
    const [movies, setMovies] = useState([]);
    const location = useLocation();
    const [status, setStatus] = useState('pending');

    useEffect(() => {
        setStatus('loading');
        fetchAPI
            .getDaysTrends()
            .then(r => {
                setMovies(r);
                setStatus('pending');
            })
            .catch(error => error && setStatus('rejected'));
    }, []);

    return (
        <div>
            <h1>Trending today</h1>
            {(status === 'pending' && (
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
            )) ||
                (status === 'loading' && <CustomLoader />) ||
                (status === 'rejected' && (
                    <div>
                        <h1>Something went wrong</h1>
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
