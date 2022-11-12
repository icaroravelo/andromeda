import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "../axios";
import '../index.css'

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
    const [movies, setMovies] = useState([]);
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl]);

    console.log(movies);

    return (
        <div className='text-gold mx-auto'>
            <h2 className='font-bold mt-12'>{title}</h2>

            <div className='flex flex-1 overflow-y-hidden overflow-x-scroll row__posters'>
                {movies.map((movie) => {
                    return (
                        <img 
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            key={movie.id}
                            src={`${image_path}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}
                        />
                    )

                })}
            </div>

        </div>
    )
}

export default Row