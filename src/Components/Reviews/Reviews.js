import s from './Reviews.module.css';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { fetchAPI } from '../../servises/useFetch';
import CustomLoader from '../Loader/Loader';
import NotFound from '../../views/NotFound';

export default function ReviewsDetails() {
    const { movieId } = useParams();
    const [status, setStatus] = useState('pending');
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        setStatus('loading');
        fetchAPI
            .getReviews(movieId)
            .then(r => {
                console.log(r);
                setReviews(r);
                setStatus('pending');
            })
            .catch(error => error && setStatus('rejected'));
    }, [movieId]);

    return (
        <ul>
            {(status === 'pending' &&
                (reviews.length >= 1 ? (
                    reviews.map(({ author, content, id }) => (
                        <li key={id} className={s.listItem}>
                            <h4>
                                Author: <span> {author}</span>
                            </h4>
                            <p>{content}</p>
                        </li>
                    ))
                ) : (
                    <h3>We don't have any reviews for this movie.</h3>
                ))) ||
                (status === 'loading' && <CustomLoader />) ||
                (status === 'rejected' && <NotFound />)}
        </ul>
    );
}
