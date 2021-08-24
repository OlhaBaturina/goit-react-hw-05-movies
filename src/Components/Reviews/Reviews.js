import s from './Reviews.module.css';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { fetchAPI } from '../../servises/useFetch';
// import { useRouteMatch, NavLink } from 'react-router-dom';

export default function ReviewsDetails() {
    const { movieId } = useParams();
    // console.log(movieId);

    const [reviews, setReviews] = useState([]);
    console.log(reviews);

    useEffect(() => {
        fetchAPI.getReviews(movieId).then(setReviews);
    }, [movieId]);

    return (
        <ul>
            {reviews.length > 0
                ? reviews.map(({ author, content, id }) => (
                      <li key={id}>
                          <h3>Author: {author}</h3>
                          <p>{content}</p>
                      </li>
                  ))
                : "We don't have any reviews for this movie."}
        </ul>
    );
}
