import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router';
import s from './App.css';
import Navigation from './Components/Navigation/Navigation';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import NotFound from './views/NotFound';
import MovieDetailsPage from './Components/MovieDetailsPage/MovieDetailsPage';
import CastDetails from './Components/Cast/Cast';

export function App() {
    return (
        <div className={s.App}>
            <Navigation />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/movies">
                    <MoviesPage />
                </Route>
                <Route path="/movies/:movieId">
                    <MovieDetailsPage />
                </Route>
                <Route path="/movies/:movieId/cast">
                    <CastDetails />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </div>
    );
}
