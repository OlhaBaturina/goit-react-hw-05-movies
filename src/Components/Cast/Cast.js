import s from './Cast.module.css';
import { useState, useEffect } from 'react';
import { fetchAPI } from '../../servises/useFetch';
import CustomLoader from '../Loader/Loader';
import NotFound from '../../views/NotFound';

export default function CastDetails({ movieId }) {
    const [cast, setCast] = useState([]);
    const [status, setStatus] = useState('pending');

    useEffect(() => {
        setStatus('loading');
        fetchAPI
            .getCast(movieId)
            .then(r => {
                console.log(r);
                setCast(r);
                setStatus('pending');
            })
            .catch(error => error && setStatus('rejected'));
    }, [movieId]);

    return (
        <>
            {(status === 'pending' &&
                (cast.length >= 1 ? (
                    <ul className={s.list}>
                        {cast.map(({ profile_path, character, id, name }) => (
                            <li key={id} className={s.listItem}>
                                <div>
                                    <img
                                        className={s.image}
                                        src={
                                            profile_path
                                                ? `https://image.tmdb.org/t/p/w200${profile_path}`
                                                : 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'
                                        }
                                        alt={name}
                                        width="200"
                                    />
                                </div>
                                <h4>{name}</h4>
                                <p>{character}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <h3>No information about cast.</h3>
                ))) ||
                (status === 'loading' && <CustomLoader />) ||
                (status === 'rejected' && <NotFound />)}
        </>
    );
}
