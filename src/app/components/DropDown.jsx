'use client';
import React, { useState, useEffect } from "react";

const Dropdown = () => {
    const [favMovies, setFavMovies] = useState([])

    useEffect(() => {
        let fav = JSON.parse(localStorage.getItem('favorite'))
        setFavMovies(fav)
    }, [])

    return (
        <ul className="dropdown-menu">
            {favMovies.map((movie, key) => (
                <li key={`${movie.id}-${movie.title_en}-${key}`} className="dropdown-item">
                    <img src={movie.poster_url} width={50} />
                    {movie.title_en}
                </li>
            ))}
        </ul>
    );
}

export default Dropdown;