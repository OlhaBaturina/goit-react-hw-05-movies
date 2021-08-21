import React from 'react';
// import { toast, ToastContainer } from 'react-toastify';
import { Switch, Route } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';
import s from './App.css';
// import Tour from './Components/Tour/Tour';
import Navigation from './Components/Navigation/Navigation';
// import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import NotFound from './views/NotFound';
// import SearchMovie from './Components/SearchMovies/SearchMovies';
// import { fetchAPI } from './servises/useFetch';
import TrendsMovie from './Components/TrendsMovie/TrendsMovie';

export function App() {
    return (
        <div className={s.App}>
            {/* <ToastContainer /> */}
            {/* <Tour /> */}
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
