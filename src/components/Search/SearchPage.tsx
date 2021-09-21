import React from 'react'
import Search from "../utility/Search"
import MovieList from "./MovieList"
import "./SearchPage.styles.css"
export default function SearchPage() {
    return (
        <div className="SearchPage-Container">
            <div className="SearchPage-Header">
                <h2>Search</h2>
            </div>
            <MovieList/>
            <div className="SearchPage-Background">
                <div className="circle circle1"></div>
                <div className="circle circle2"></div>
            </div>
        </div>
    )
}
