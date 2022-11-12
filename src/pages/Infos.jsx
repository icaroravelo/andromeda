import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
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

                const { title, overview, poster_path, release_date, homepage } = data

                const movie = {
                    id,
                    title,
                    sinopse: overview,
                    image: `${image_path}${poster_path}`,
                    releaseDate: release_date,
                    homepage
                }

                setMovie(movie)

                console.log(data)
            })
    }, [])

    return (
        <div>
            {/* Header */}
            <Header />

            <div className='flex flex-col md:flex-row              justify-between'>
                {/* Infos */}
                <div className='flex flex-col text-gold'>
                    <img src={movie.image} alt={movie.sinopse} className="md:h-[250px] h-[225px] w-[200px] mx-auto rounded-xl mt-10 hover:h-[230px] md:hover:h-[270px] transition-all duration-1000 hover:border-2" />
                    <span className='mt-2'>{movie.title}</span>
                    <p className='mt-2'>{movie.releaseDate}</p>
                    <p className='mt-2'>{movie.homepage}</p>
                </div>

                {/* Sinopse */}
                <div className='mx-auto'>
                    <h1 className='text-2xl text-gold font-bold mt-10'>Sinopse</h1>
                    <div className='max-w-[350px] text-center mt-10'>
                        <span className='text-gold leading-tight'>
                            {movie.sinopse}
                        </span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Infos