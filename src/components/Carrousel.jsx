import React, { useEffect, useState } from 'react'
import { API_KEY } from '../requests';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const Carrousel = () => {
    const [movies, setMovies] = useState([]);
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        // consumir a api

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => {
                console.log(data.results)
                setMovies(data.results)
            })
    }, [])

    // Efeito de carrossel
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <div>
            <h1 className='text-2xl font-bold text-gold mt-10'>
                Em alta
            </h1>
            <Slider {...settings}>
                {movies.map((movie) => {
                    return (
                        <div className='items-center justify-center flex mt-10'>
                            <div>

                                <Link to={`/infos/${movie.id}`}>
                                    <img src={`${image_path}${movie.poster_path}`} alt={movie.title} className="h-[300px] w-[200px] rounded-lg cursor-pointer items-center justify-center text-center mx-auto" />
                                </Link>
                                <h1
                                    key={movie.id}
                                    className='text-gold font-bold text-sm mt-4'>
                                    {movie.title}
                                </h1>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default Carrousel