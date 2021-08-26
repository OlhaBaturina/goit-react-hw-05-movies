import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import CustomLoader from './Components/Loader/Loader';

const HomePage = lazy(() => import('./views/HomePage'));
const MoviesPage = lazy(() => import('./views/MoviesPage'));
const NotFound = lazy(() => import('./views/NotFound'));
const MovieDetailsPage = lazy(() =>
    import('./Components/MovieDetailsPage/MovieDetailsPage'),
);

export function App() {
    return (
        <div>
            <Navigation />

            <Suspense fallback={<CustomLoader />}>
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
            </Suspense>
        </div>
    );
}
