import classes from './MeetupItem.module.css'
import Card from '../UI/Card';
import FavoritesContext from '../store/favorites-context';
import { useContext } from 'react';

function MeetupItem(props) {
    let favoritesCtx = useContext(FavoritesContext);
    let itemIsFavorite = favoritesCtx.itemIsFavorite;

    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoritesCtx.removeFavoriteHandler(props.id);
        }
        else {
            favoritesCtx.addFavoriteHandler({
                id: props.id,
                title: props.title,
                address: props.address,
                description: props.description,
                image: props.image
            });
        }
    }

    return <li className={classes.item}>
        <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove From Favorites' : 'Add To Favorites'}</button>
            </div>
        </Card>
    </li>
}

export default MeetupItem;