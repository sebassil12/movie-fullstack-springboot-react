import { useState, useEffect } from 'react'
import './App.css'
import api from './api/axios.config'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/home/Home'
import Trailer from './components/trailer/Trailer'
import Reviews from './reviews/Reviews'
import Header from './components/header/Header'

function App() {
  const [movies, setMovies] = useState();
  
  
  const getMovies = async() =>{
    try{
      const response = await api.get("/api/v1/movies")
      console.log(response.data)
      setMovies(response.data)
    }catch(err){
      console.log(err)
    }
    
  }

 

  useEffect(()=>{
    getMovies()
  },[])
  return (
   <div>
    <Header />
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home movies={movies}/>}/> 
        <Route path='/Trailer/:ytTrailerId' element={<Trailer />}/>
        <Route path='/Reviews/:movieId' element={<Reviews  />}/>
        
      </Route>
    </Routes>
   </div>
  )
}

export default App
