import s from './Cast.module.css';
import { useParams, useLocation, useHistory } from 'react-router';
import { useState, useEffect } from 'react';
import { fetchAPI } from '../../servises/useFetch';

export default function CastDetails() {
    const { movieId } = useParams();
    const location = useLocation();
    const history = useHistory();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        fetchAPI.getCast(movieId).then(setCast);
    }, [movieId]);

    return (
        <ul className={s.list}>
            {cast.length > 0
                ? cast.map(({ profile_path, character, id, name }) => (
                      <li key={id} className={s.listItem}>
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
