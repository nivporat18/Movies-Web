import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import MoviePopular from './Component/Movies/MoviePopular/MoviePopular';
import MovieRated from './Component/Movies/MovieRated/MovieRated';
import TvShowPopular from './Component/TvShows/TvShowPopular/TvShowPopular';
import TvShowRated from './Component/TvShows/TvShowRated/TvShowRated';
import Navigation from './Component/Navigation/Navigation';
import { Register } from './Component/Auth/Register';
import Login from './Component/Auth/Login'
import { useSelector } from 'react-redux';



function App() {

  const {isLoggedIn,user} = useSelector((state)=>state.auth)
  

  return (
    <div>

      <BrowserRouter>
      <Navigation/>
      <Routes>

      {isLoggedIn && (<>

      <Route path='/movie-popular' element={<MoviePopular/>}/>
      <Route path='/movie-rated' element={<MovieRated/>}/>
      <Route path='/tvshow-popular' element={<TvShowPopular/>}/>
      <Route path='/tvshow-rated' element={<TvShowRated/>}/>
      <Route path='/' element={<MoviePopular/>}/>
 

      </>)}

      {!isLoggedIn &&  (<>
      
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Login/>}/>
      </>)}
      
      
      </Routes>
      </BrowserRouter>

      

    </div>
  );
}

export default App;
