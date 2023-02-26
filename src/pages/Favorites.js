import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../components/store/favorites-context";


function FavoritesPage() {
    const favoriteCtx = useContext(FavoritesContext);
    let content = '';
    if (favoriteCtx.totalFavorites===0){
        content = "You need to add some favorites first";
    }
    else{
        content = <MeetupList meetups={favoriteCtx.favorites}></MeetupList>
    }
    return <div>
        <h1>Your Favorite Meetups</h1>
        {content}
    </div>
}

export default FavoritesPage;