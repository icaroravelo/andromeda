import axios from '../axios';
import React, { useEffect, useState } from 'react'
import "./Banner.css";
import requests from '../requests';
import Header from './Header';

const Banner = () => {
    const [movie, setMovie] = useState([]);
    const image_path = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    console.log(movie)

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center top",
            }}
        >
            <Header />
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className='banner__button'>Assistir</button>
                    <button className='banner__button'>Favoritos</button>
                </div>
                <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
            </div>

            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner