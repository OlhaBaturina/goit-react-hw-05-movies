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
import NotFound from '../../views/NotFound';
const CastDetails = lazy(() => import('../Cast/Cast'));
const ReviewsDetails = lazy(() => import('../Reviews/Reviews'));

export default function MovieDetailsPage() {
    const { url } = useRouteMatch();
    const location = useLocation();
    const history = useHistory();
    const [movie, setMovie] = useState({});
    const newDate = new Date(movie.release_date);
    const [status, setStatus] = useState('pending');
    const movieId = url.match(/[a-zA-Z0-9]+$/)[0];
    // console.log(url.match(/[a-zA-Z0-9]+$/)[0]);

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
        history.push(location?.state?.from ?? `/`);
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
                                        state: {
                                            from: location?.state?.from ?? '/',
                                            search: location?.state?.search,
                                        },
                                    }}
                                >
                                    Cast
                                </NavLink>
                            </li>
                            <li className={s.link}>
                                <NavLink
                                    to={{
                                        pathname: `${url}/reviews`,
                                        state: {
                                            from: location?.state?.from ?? '/',
                                            search: location?.state?.search,
                                        },
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
                            <CastDetails movieId={movieId} />
                        </Route>

                        <Route exact path="/movies/:movieId/reviews">
                            <ReviewsDetails movieId={movieId} />
                        </Route>
                    </Suspense>
                </div>
            )) ||
                (status === 'loading' && <CustomLoader />) ||
                (status === 'rejected' && <NotFound />)}
        </div>
    );
}
