import React, { useState, useEffect } from "react";
import Modal from "./Modal";

export const MovieList = ({ movies }) => {
    const [favorite, setFavorite] = useState([]);
    const [modalIndex, setModalIndex] = useState(-1);

    useEffect(() => {
        const favoriteMovies = JSON.parse(localStorage.getItem('favorite'));
        if (favoriteMovies) setFavorite(favoriteMovies);
    }, []);

    const handleFavorite = (movie) => {
        if (!favorite.includes(movie)) {
            setFavorite([...favorite, movie]);
            localStorage.setItem('favorite', JSON.stringify([...favorite, movie]));
        }
    }

    const openModal = (index) => {
        setModalIndex(index);
    }

    const closeModal = () => {
        setModalIndex(-1);
    }

    return (
        <div className="movie-container">
            {movies.map((movie, index) => (
                <div key={movie.id} className="movie-card" onClick={() => openModal(index)}>
                    <img
                        src={movie.poster_url}
                        alt={movie.title_en}
                        className="movie-poster"
                    />
                    <div className="movie-details">
                        <div>
                            <h2 className="movie-title">{movie.title_en}</h2>
                        </div>
                        <p className="movie-synopsis">{movie.synopsis_en}</p>
                    </div>
                </div>
            ))}
            <Modal isOpen={modalIndex !== -1} onClose={closeModal}>
                {modalIndex !== -1 && (
                    <div className="modal-content">
                        <h2>{movies[modalIndex].title_en}</h2>
                        <img src={movies[modalIndex].poster_url} alt={movies[modalIndex].title_en} width={200} />
                        <h3>Director : {movies[modalIndex].director}</h3>
                        <p>Genre : {movies[modalIndex].genre}</p>
                        <p>Release Date : {movies[modalIndex].release_date}</p>
                        <p>duration : {movies[modalIndex].duration} mins</p>
                        <button className="movie-favorite" onClick={() => handleFavorite(movies[modalIndex])}>Favorite</button>
                        <p>Actor : {movies[modalIndex].actor}</p>
                        <p>{movies[modalIndex].synopsis_en}</p>
                    </div>
                )}
            </Modal>
        </div>
    );
}
