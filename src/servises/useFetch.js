import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '2b2a12748231526069949d7d6477582b';

const getDaysTrends = () => {
    return axios
        .get(`${baseURL}trending/all/week?api_key=${API_KEY}`)
        .then(res => res.data.results);
};

const getFilmBySearch = searchQuery => {
    return axios
        .get(
            `${baseURL}search/movie?api_key=${API_KEY}&query=${searchQuery}&page=1&include_adult=false`,
        )
        .then(res => res.data.results);
};

const getMoviesInfo = filmId => {
    return axios
        .get(`${baseURL}movie/${filmId}?api_key=${API_KEY}`)
        .then(res => res.data);
};

const getCastOfMovie = filmId => {
    return axios
        .get(`${baseURL}movie/${filmId}/credits?api_key=${API_KEY}`)
        .then(res => res.data.cast);
};

const getReviews = filmId => {
    return axios
        .get(`${baseURL}movie/${filmId}/reviews?api_key=${API_KEY}`)
        .then(res => res.data.results);
};

export const fetchAPI = {
    getFilmBySearch,
    getCastOfMovie,
    getDaysTrends,
    getMoviesInfo,
    getReviews,
};
