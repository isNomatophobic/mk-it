import React from 'react'
import Movie from "../Search/Movie"
import Review from "./Review"
import "./movie.styles.css"
export default function MovieInfo() {
    return (
        <div className="MovieInfo-Container">
            <div className="MovieInfo">
                <Movie/>
            </div>
            <Review/>
            <div className="MovieInfo-Background">
                <div className="circle circle1"></div>
                <div className="circle circle2"></div>
            </div>
        </div>
    )
}
