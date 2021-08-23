import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
    <nav className={s.Navigation}>
        <NavLink
            exact
            to="/"
            className={s.navLink}
            activeClassName={s.activeLink}
        >
            Home Page
        </NavLink>
        <NavLink
            to="/movies"
            className={s.navLink}
            activeClassName={s.activeLink}
        >
            MoviesPage
        </NavLink>
    </nav>
);

export default Navigation;
