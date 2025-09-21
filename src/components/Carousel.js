import React from "react";
import './Carousel.css';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";

const Carousel = ({ movies }) => {
 const navigate = useNavigate();

    const reviews = (movieId) => {
        navigate(`/Reviews/${movieId}`);
    };

  const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        responsive: [
            { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }
        ]
    };

    return (
        <div className="hero-carousel">
            <Slider {...settings}>
                {movies?.map((movie) => (
                    <div key={movie.id} className="hero-slide">
                        <div className="hero-background" style={{ backgroundImage: `url(${movie.backdrop_path})` }}></div>
                        <div className="hero-overlay d-flex align-items-center container">
                            <div className="hero-poster me-4">
                                <img src={movie.poster_path} alt={movie.title} className="img-fluid rounded"/>
                            </div>
                            <div className="hero-info text-white">
                                <h2 className="hero-title">{movie.title}</h2>
                                <p className="hero-overview">{movie.overview}</p>
                                <div className="hero-buttons d-flex gap-2 mt-3 flex-wrap">
                                    <Link to={`${movie.trailer_path} `} target="_blank" rel="noopener noreferrer">
                                        <button className="btn btn-light">
                                            <FontAwesomeIcon icon={faCirclePlay} /> Watch Trailer
                                        </button>
                                    </Link>
                                    <button className="btn btn-info" onClick={() => reviews(movie.id)}>Reviews</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
 

