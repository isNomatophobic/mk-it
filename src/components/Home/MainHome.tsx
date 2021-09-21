import React from 'react'
import HomeHero from "./HomeHero"
import Favorites from "./Favorites"
import "./home.styles.css"
export default function MainHome() {
    return (
        <div className="MainHome-Container">
            <HomeHero/>
            <Favorites/>
        </div>
    )
}
