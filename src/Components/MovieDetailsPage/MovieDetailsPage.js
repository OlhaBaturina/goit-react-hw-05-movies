import s from './MovieDetailsPage.module.css';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { fetchAPI } from '../../servises/useFetch';
import { useRouteMatch, NavLink } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const { url } = useRouteMatch();
    // console.log(url);

    const [movie, setMovie] = useState({});
    console.log(movie);

    useEffect(() => {
        fetchAPI.getMoviesInfo(movieId).then(setMovie);
    }, [movieId]);

    const newDate = new Date(movie.release_date);

    return (
        <div>
            <button>
                <HiOutlineArrowNarrowLeft /> Go back
            </button>
            <div>
                <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.title || movie.name}
                />
                <div>
                    <h1>
                        {movie.title || movie.name} ({newDate.getFullYear()})
                    </h1>
                    <p>User Score: {movie.vote_average * 10} %</p>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                    <h2>Genres</h2>
                    <p>
                        {movie.genres &&
                            movie.genres.map(({ name }) => (
                                <span> {name} </span>
                            ))}
                    </p>
                </div>
                <hr />
                <div>
                    <p>Additional information</p>
                    <ul>
                        <li>
                            <NavLink to={`${url}/cast`}>Cast</NavLink>
                        </li>
                        <li>
                            <NavLink to={`${url}/reviews`}>Reviews</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
