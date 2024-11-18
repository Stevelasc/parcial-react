
import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const Peliculas = () => {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchFilms();
    }, []);

    const fetchFilms = async () => {
        try {
            const response = await fetch('https://ghibli.rest/films');
            
            if (!response.ok) {
                throw new Error('Error al obtener los datos');
            }

            const data = await response.json();
            setFilms(data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center min-vh-100">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="d-flex justify-content-center align-items-center min-vh-100">
                <div className="alert alert-danger" role="alert">
                    Error: {error}
                </div>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <h1 className="text-center mb-5">Películas de Studio Ghibli</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {films.map((film) => (
                    <div className="col" key={film.id}>
                        <MovieCard 
                            title={film.title}
                            image={film.image}
                            description={film.description}
                            director={film.director}
                            releaseDate={film.release_date}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Peliculas;