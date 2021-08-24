import s from './Cast.module.css';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { fetchAPI } from '../../servises/useFetch';
// import { useRouteMatch, NavLink } from 'react-router-dom';

export default function CastDetails() {
    const { movieId } = useParams();
    console.log(movieId);

    const [cast, setCast] = useState([]);
    console.log(cast);

    useEffect(() => {
        fetchAPI.getCast(movieId).then(setCast);
    }, [movieId]);

    return (
        <ul>
            {cast.length > 0
                ? cast.map(({ profile_path, character, id, name }) => (
                      <li key={id}>
                          <div>
                              <img
                                  src={
                                      profile_path
                                          ? `https://image.tmdb.org/t/p/w200${profile_path}`
                                          : 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'
                                  }
                                  alt={name}
                                  width="200"
                              />
                          </div>
                          <h3>{name}</h3>
                          <p>{character}</p>
                      </li>
                  ))
                : 'No information about cast'}
        </ul>
    );
}
