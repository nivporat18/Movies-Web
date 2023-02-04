import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Navigation.css'
import {logout} from '../../store/slices/AuthSlice'
import authService from './../Auth/AuthService'

const Navigation = () => {

  const poster_url = "https://image.tmdb.org/t/p/w500";

  const [query,setQuery] = useState('')
  const [movie,setMovie] = useState()
  const dispatch = useDispatch()
  const {isLoggedIn,user} = useSelector((state)=> state.auth)
 
   const handleLogout = ()=>{
    authService.logout()
   dispatch(logout())
   }

const searchMovies = async (e) =>{
  e.preventDefault()

  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=27715af1593b0426691060d9f7ad58ee&en-US&query=${query}`

try{
  const response = await fetch(searchUrl)
  const responseJson = await response.json()
  setMovie(responseJson.results)
}catch(err){
 console.log("No Find Your Search")
}

}

 
const inputChange = (e)=>{
  setMovie('')
  setQuery(e.target.value)
}


  return (
    <div className='allPageNavigation'>

    <h1 className='the_title'>Cinema World</h1>

      {isLoggedIn && (<>

      <div>
    <form className='input_search' onSubmit={searchMovies}> 
      <input  value={query} onChange={inputChange}  placeholder='Search' />
      <button className='btnSearch' type='submit'>Search</button>
    </form> 
    

    <div className='links'>
    <Link  to="/movie-popular"> Movie Popular</Link>
    <Link to="/movie-rated"> Movie Rated</Link>
    <Link to="/tvshow-popular"> TvShow Popular</Link>
    <Link to="/tvshow-rated"> TvShow Rated</Link>
     <Link to="/login" onClick={handleLogout}> Logout</Link>

    </div>
    </div>


    </>)}

    
    {!isLoggedIn && (<>

    <div className='auth'>
    <Link to="/register">Register</Link>
    <Link to="/login"> Login</Link>
    </div>
    
    </>)}
 
   


<div>
  
</div>

<div className='searchMovie'>


{movie && movie.map((f)=>

<div key={f.id} className="card">
<img src={poster_url+f.poster_path} className="card-img-top"  alt={f.title}></img>
<div className="card-body">
<h2 className="card-title">{f.title}</h2>
<h6 className="card-text">{f.overview}</h6>
<p>Rating: {f.vote_average}</p>
<p>Release Date: {f.release_date}</p>
<p>Language: {f.original_language}</p>
</div>
</div> 

      )}


      </div>
    </div>
  )
}

export default Navigation