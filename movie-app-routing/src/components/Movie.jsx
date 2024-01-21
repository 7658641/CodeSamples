import React from 'react'
import { useNavigate } from 'react-router-dom'

const IMG_BASE_URL ="https://image.tmdb.org/t/p/w1280/"

export default function Movie({ title, poster_path, vote_average}){
    const navigate = useNavigate();

    const onClickMovieItem =() =>{
        navigate(`/movie/${title}`)
    }


    return(
        <div className='movie-container' onClick={onClickMovieItem}>
            <img src={IMG_BASE_URL+ poster_path} alt="영화포스터" />
                <div className='movie-info'>
                    <h4>{title}</h4>
                    <span>{vote_average}</span>
                    <button>≡</button>  

                </div>

        </div>
    )
}