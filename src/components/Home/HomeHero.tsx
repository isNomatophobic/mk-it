import React from 'react'
import {Link} from "react-router-dom"
export default function HomeHero() {
    return (
        <div className="HomeHero-Container">
            <div className="HomeHero-Background">
                <div className="circle circle1">
                </div>
                <div className="circle circle2"></div>
                <div className="circle circle3"></div>
            </div>
            <div className="Header-Container">
                <div className="Header-Info">
                    <h2>Welcome to My Movie Collection</h2>
                    <p>My Movie Collection is the world's most popular and authoritative source for movie, 
                        TV and celebrity content. Find ratings and reviews for the newest 
                        movie and TV shows.</p>
                    <Link to="/search"><button>Search</button></Link>
                </div>
            </div>
        </div>
    )
}
