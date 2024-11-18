import React from 'react';

const MovieCard = ({ title, image, description, director, releaseDate }) => {
    return (
        <div className="card h-100">
            <img 
                src={image} 
                className="card-img-top" 
                alt={title}
                style={{ height: '300px', objectFit: 'cover' }}
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text" style={{
                    display: '-webkit-box',
                    WebkitLineClamp: '3',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>
                    {description}
                </p>
                <div className="mt-2">
                    <p className="card-text">
                        <small className="text-muted">
                            <strong>Director:</strong> {director}
                        </small>
                    </p>
                    <p className="card-text">
                        <small className="text-muted">
                            <strong>Año:</strong> {releaseDate}
                        </small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;