import React, { useState, useEffect } from "react";

export const MovieList = ({ movies }) => {
    const [favorite, setFavorite] = useState([])
    useEffect(() => {
        const favoriteMovies = JSON.parse(localStorage.getItem('movie-list'));
        if (favoriteMovies) {
            setFavorite(favoriteMovies);
        }
    }, []);
    const handleFavorite = (movie) => {
        let favoriteMovies = []


    }

    return (
        <div className="movie-container">
            {movies.map((movie) => (
                <div key={movie.id} className="movie-card">
                    <img src={movie.poster_url}
                        alt={movie.title_en}
                        className="movie-poster"
                    />
                    <div className="movie-details">
                        <div>
                            <h2 className="movie-title">{movie.title_en}</h2>
                            <button className="movie-favorite" onClick={() => handleFavorite(movie)}>Favorite</button>
                        </div>
                        <p className="movie-synopsis">{movie.synopsis_en}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}