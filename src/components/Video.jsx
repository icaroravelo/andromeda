import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_KEY } from '../requests'

const Video = () => {
    const { id } = useParams()

    const [movie, setMovie] = useState({})


    useEffect(() => {
        // consumir a api

        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
            .then(response => response.json())
            .then(data => {

                const { name, site, key, size } = data

                const movie = {
                    name,
                    site,
                    key,
                    size,
                    type
                }

                setMovie(movie)

                console.log(data)
            })
    }, [])
  return (
    <div>
        <video>{movie.name}</video>
    </div>
  )
}

export default Video