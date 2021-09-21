import React from 'react'

export default function FavoriteButton() {
    return (
        <div className="FavoriteButton-Container">
            {true?
            <button className="Favorite-True">Remove From Favorites</button>
            :
            <button className="Favorite-False">Add To Favorites</button>
            }
        </div>
    )
}
