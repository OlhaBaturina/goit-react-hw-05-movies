import s from './MovieDetailsPage.module.css';
import { useParams, Route } from 'react-router';
import { useState, useEffect, lazy, Suspense } from 'react';
import { fetchAPI } from '../../servises/useFetch';
import {
    useRouteMatch,
    NavLink,
    useLocation,
    useHistory,
} from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import CustomLoader from '../Loader/Loader';
const CastDetails = lazy(() => import('../Cast/Cast'));
const ReviewsDetails = lazy(() => import('../Reviews/Reviews'));

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const { url } = useRouteMatch();
    const location = useLocation();
    const history = useHistory();
    const [movie, setMovie] = useState({});
    const newDate = new Date(movie.release_date);
    const [status, setStatus] = useState('pending');

    console.log(status);

    useEffect(() => {
        setStatus('loading');
        fetchAPI
            .getMoviesInfo(movieId)
            .then(r => {
                console.log(r);
                setMovie(r);
                setStatus('pending');
            })
            .catch(error => error && setStatus('rejected'));
    }, [movieId]);

    const clickOnBack = () => {
        history.push(location?.state?.from ?? `/movies`);
    };

    return (
        <div className={s.movieDetailsPage}>
            <button
                type="button"
                onClick={clickOnBack}
                className={s.buttonBack}
            >
                <HiOutlineArrowNarrowLeft /> Go back
            </button>
            {(status === 'pending' && (
                <div>
                    <div className={s.thumb}>
                        <img
                            src={
                                movie.poster_path
                                    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                                    : 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'
                            }
                            alt={movie.title || movie.name}
                            width="300"
                        />
                        <div className={s.filmDetails}>
                            <h1>
                                {movie.title || movie.name} (
                                {newDate.getFullYear()})
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
                    </div>
                    <hr />
                    <div>
                        <h3>Additional information</h3>
                        <ul>
                            <li className={s.link}>
                                <NavLink
                                    to={{
                                        pathname: `${url}/cast`,
                                        // state: { from: `/movies/${movie.id}` },
                                    }}
                                >
                                    Cast
                                </NavLink>
                            </li>
                            <li className={s.link}>
                                <NavLink
                                    to={{
                                        pathname: `${url}/reviews`,
                                        // state: { from: `/movies/${movie.id}` },
                                    }}
                                >
                                    Reviews
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <Suspense fallback={<CustomLoader />}>
                        <Route exact path="/movies/:movieId/cast">
                            <CastDetails />
                        </Route>

                        <Route exact path="/movies/:movieId/reviews">
                            <ReviewsDetails />
                        </Route>
                    </Suspense>
                </div>
            )) ||
                (status === 'loading' && <CustomLoader />) ||
                (status === 'rejected' && (
                    <div>
                        <h1>404 Page not found 🔍</h1>
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
