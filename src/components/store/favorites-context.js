import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavoriteHandler: (favoriteMeetup)=>{},
    removeFavoriteHandler: (meetupId)=>{},
    itemIsFavoriteHandler: (meetupId)=>{}
});

export function FavoritesContextProvider(props) {
    let [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup){
        setUserFavorites((prevUserFavorites)=>{
            return prevUserFavorites.concat(favoriteMeetup);
        })
    }

    function removeFavoriteHandler(meetupId){
        setUserFavorites((prevUserFavorites)=>{
            setUserFavorites.filter(meetup=>meetup.id!==meetupId)
        })
    }

    function itemIsFavoriteHandler(meetupId){
        return userFavorites.some(meetup=> meetup.id===meetupId)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    }

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;