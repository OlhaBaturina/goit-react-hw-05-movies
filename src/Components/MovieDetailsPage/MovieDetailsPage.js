import s from './MovieDetailsPage.module.css';
import { useParams, Route } from 'react-router';
import { useState, useEffect } from 'react';
import { fetchAPI } from '../../servises/useFetch';
import { useRouteMatch, NavLink } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import CastDetails from '../Cast/Cast';
import ReviewsDetails from '../Reviews/Reviews';

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const { url } = useRouteMatch();

    const [movie, setMovie] = useState({});

    useEffect(() => {
        fetchAPI.getMoviesInfo(movieId).then(setMovie);
    }, [movieId]);

    const newDate = new Date(movie.release_date);

    return (
        <div>
            <button>
                <HiOutlineArrowNarrowLeft /> Go back
            </button>
            {movie.title || movie.name ? (
                <div>
                    <img
                        src={
                            movie.poster_path
                                ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                                : 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'
                        }
                        alt={movie.title || movie.name}
                        width="300"
                    />
                    <div>
                        <h1>
                            {movie.title || movie.name} ({newDate.getFullYear()}
                            )
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
                    <hr />
                    <Route exact path="/movies/:movieId/cast">
                        <CastDetails />
                    </Route>

                    <Route exact path="/movies/:movieId/reviews">
                        <ReviewsDetails />
                    </Route>
                </div>
            ) : (
                <div>
                    <h1>404 Page not found 🔍</h1>
                    <img
                        src="https://mtdata.ru/u8/photo39C2/20569542232-0/original.jpg"
                        alt="Page not found"
                        width="360"
                    />
                </div>
            )}
        </div>
    );
}
