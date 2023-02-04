import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const TvShowPopular = () => {

  const poster_url = "https://image.tmdb.org/t/p/w500";


  const [tvPopular,setTvPopular] = useState()


  const getTvPopular = async()=>{
    const url = 'https://api.themoviedb.org/3/tv/popular?api_key=27715af1593b0426691060d9f7ad58ee'

    const response = await fetch(url)
    const responseJson = await response.json()

    setTvPopular(responseJson.results)
  }

  useEffect(()=>{
    getTvPopular()
  },[])


  return (
    <div className='allMoviePage'> 
    {tvPopular && tvPopular.map((t)=>

<div key={t.id} className="card">
<img src={poster_url+t.poster_path} className="card-img-top"  alt={t.original_name}></img>
<div className="card-body">
<h2 className="card-title">{t.original_name}</h2>
<h6 className="card-text">{t.overview}</h6>
<p>Rating: {t.vote_average}</p>
<p>Language: {t.original_language}</p>
</div>
</div>

  )}


</div>
  )
}

export default TvShowPopular