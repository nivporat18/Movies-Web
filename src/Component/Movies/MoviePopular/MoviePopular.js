import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './MoviePopular.css'


const Movie = () => {

  const poster_url = "https://image.tmdb.org/t/p/w500";

    const [movie,setMovie] = useState()

       const getMovies = async ()=>{
        const url = "https://api.themoviedb.org/3/movie/popular?api_key=27715af1593b0426691060d9f7ad58ee&language=en-US"
    
        const response = await fetch(url);
        const responseJson = await response.json();
    
        setMovie(responseJson.results)
    }
    
        useEffect(()=>{
          getMovies()
        },[])


  return (
    <div className='allMoviePage'> 
        {movie && movie.map((m)=>

<div key={m.id} className="card">
<img src={poster_url+m.poster_path} className="card-img-top"  alt={m.title}></img>
<div className="card-body">
<h2 className="card-title">{m.title}</h2>
<h6 className="card-text">{m.overview}</h6>
<p>Rating: {m.vote_average}</p>
<p>Release Date: {m.release_date}</p>
<p>Language: {m.original_language}</p>
</div>
</div>

      )}


    </div>
  )
}

export default Movie



