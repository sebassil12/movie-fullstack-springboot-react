import { useState, useEffect } from 'react'
import './App.css'
import api from './api/axios.config'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/home/Home'
import Trailer from './components/trailer/Trailer'
import Reviews from './reviews/Reviews'

function App() {
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState(); 
  const [reviews, setReviews] = useState();
  const getMovies = async() =>{
    try{
      const response = await api.get("/api/v1/movies")
      console.log(response.data)
      setMovies(response.data)
    }catch(err){
      console.log(err)
    }
    
  }

  const getMovieData = async(movieId) =>{
    try{
      const response = await api.get(`api/v1/movies/${movie.id}`)
      const singleMovie = response.data;
      setMovies(singleMovie);
      setReviews(singleMovie.reviews)
    }catch(e){

    }
  }

  useEffect(()=>{
    // getMovies()
  },[])
  return (
   <div>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/Trailer/:ytTrailerId' element={<Trailer />}/>
        <Route path='/Reviews/:movieId' element={<Reviews getMovieData={getMovieData} reviews={reviews} setReviews={setReviews}/>}/>
        
      </Route>
    </Routes>
   </div>
  )
}

export default App
