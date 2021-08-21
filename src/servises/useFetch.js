import axios from 'axios';

// APIkey2b2a12748231526069949d7d6477582b
// https://api.themoviedb.org/3/movie/550?api_key=2b2a12748231526069949d7d6477582b

axios.defaults.baseURL = 'https://pixabay.com/api/';
const apiKey = '21973303-2099b25a108053c1f3c237a34';
const perPage = 12;

export const fetchImgAPI = (searchQuery, currentPage) => {
    return axios
        .get(
            `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&per_page=${perPage}&key=${apiKey}&page=${currentPage}`,
        )
        .then(res => res.data.hits);
};
