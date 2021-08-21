import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Switch, Route } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';
import s from './App.css';
// import Searchbar from './Components/OldImagec/Searchbar/Searchbar';
// import ImageGallery from './Components/ImageGallery/ImageGallery';
// import CustomLoader from './Components/OldImagec/Loader/Loader';
// import Button from './Components/OldImagec/Button/Button';
// import Modal from './Components/OldImagec/Modal/Modal';
// import { fetchImgAPI } from './servises/useFetch';
import Tour from './Components/Tour/Tour';
import Navigation from './Components/Navigation/Navigation';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import NotFound from './views/NotFound';
import SearchMovie from './Components/SearchMovies/SearchMovies';
import { fetchAPI } from './servises/useFetch';
import TrendsMovie from './Components/TrendsMovie/TrendsMovie';

export function App() {
    //     const [movies, setMovies] = useState([]);

    // const fetchTrends = async () => {

    //     try {
    //         const trendsRes = await fetchAPI();
    //         console.log(trendsRes);
    //         setMovies(prevState => [...prevState, ...trendsRes]);

    //     } catch (error) {

    //         console.log(error)
    //     }
    // };

    // fetchTrends()

    // console.log(fetchAPI())

    return (
        <div className={s.App}>
            <ToastContainer />
            <Tour />
            <Navigation />
            <Switch>
                <Route exact path="/">
                    <TrendsMovie />
                </Route>
                <Route path="/movies">
                    <MoviesPage />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </div>
    );
}
