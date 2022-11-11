import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Carrousel from '../components/Carrousel'
import Header from '../components/Header'
import Video from '../components/Video'
import { API_KEY } from '../requests'

const Infos = () => {
    const { id } = useParams()
    const image_path = 'https://image.tmdb.org/t/p/w500'

    const [movie, setMovie] = useState({})

    useEffect(() => {
        // consumir a api

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => {

                const { title, overview, poster_path, release_date } = data

                const movie = {
                    id,
                    title,
                    sinopse: overview,
                    image: `${image_path}${poster_path}`,
                    releaseDate: release_date,
                }

                setMovie(movie)

                console.log(data)
            })
    }, [])

    return (
        <div>
            {/* Header */}
            <Header />

            <div className='flex justify-between'>
                {/* Infos */}
                <div className='flex flex-col'>
                    <img src={movie.image} alt={movie.sinopse} className="h-[250px] rounded-xl mt-10" />
                    <span className='mt-2'>{movie.title}</span>
                    <p className='mt-2'>{movie.releaseDate}</p>
                </div>

                {/* Sinopse */}
                <div className='mx-auto'>
                    <h1 className='text-2xl text-gold font-bold mt-10'>Sinopse</h1>
                    <div className='max-w-[350px] text-center mt-4'>
                        <span>
                            {movie.sinopse}
                        </span>
                    </div>
                </div>

                {/* <Video /> */}

            </div>

        </div>
    )
}

export default Infos