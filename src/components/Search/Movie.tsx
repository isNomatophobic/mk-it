import React from 'react'
import FavoriteButton from "../utility/FavoriteButton"
export default function Movie({}) {
    return (
        <div className="Movie-Container">
            <div className="MovieImage-Container">
                <img src="https://th.bing.com/th/id/OIP.oGQplp8TMjL-85zHOXLm7gHaLH?w=182&h=273&c=7&r=0&o=5&pid=1.7"></img>
            </div>
            <div className="MovieHighlights">
                <div className="MovieInfo">
                    <h3 className="MovieTitle">Movie Title (2009)</h3>
                    <p className="MovieGenres">Drama, Thriller, Comedy | 90 minutes</p>
                    <p className="MovieDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum turpis eget finibus volutpat. Orci varius natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus. Cras condimentum eros sit amet pretium fermentum. Pellentesque euismod, massa
                        non sollicitudin accumsan, elit nisi mollis erat, a vehicula est leo ac lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        Nulla nec nisi massa.
                    </p>
                    <a className="MovieLink" href="#">Visit official site</a>
                </div>
                <FavoriteButton/>
            </div>
        </div>
    )
}
