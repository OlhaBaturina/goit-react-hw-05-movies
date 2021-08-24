import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import NotFound from './views/NotFound';
import MovieDetailsPage from './Components/MovieDetailsPage/MovieDetailsPage';
import CastDetails from './Components/Cast/Cast';

export function App() {
    return (
        <div>
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

                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </div>
    );
}
