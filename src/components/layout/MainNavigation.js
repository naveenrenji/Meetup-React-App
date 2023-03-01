import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';
import FavoritesContext from "../store/favorites-context";

function MainNavigation() {
    const favoriteCtx = useContext(FavoritesContext);
    const totalFavorites = favoriteCtx.totalFavorites;

    return <header className={classes.header}>
        <div className={classes.logo}>Popular Hot Spots of New York City</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Hot Spots </Link>
                </li>
                <li>
                    <Link to='/new-meetup'>Add New Hot Spot </Link>
                </li>
                <li>
                    <Link to='/favorites'>My Favorites
                        <span className={classes.badge}>{totalFavorites}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;