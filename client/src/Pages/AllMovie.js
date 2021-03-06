import React, { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard"
import axios from "axios";

const AllMovie = () =>{
  const [movies, setMovies] = useState([])
  const [count, setCount] = useState(null)
  const [page, setPage] = useState(2)

  const getMovies = async () =>{ 
    try{
      let res = await axios.get("/allmovies")
      console.log(res.data)
      setMovies(res.data.movie)
      setCount(res.data.count)
    }catch(err){
      console.log(err)
    }
  }

  const getMoreMovies = async () =>{
    try {
      let res = await axios.get(`/allmovies?page=${page}`)
      console.log(res.data.movie)
      setMovies((prevState)=>[...prevState, ...res.data.movie])
      setPage((prevState)=>prevState+1)

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(()=>{
    getMovies()
  },[])

  const renderMovies = () =>{
    return movies.map((movie)=>{
      return(
        <div key={movie.id}>
          <MovieCard info = {movie}></MovieCard>
        </div>
      )
    })
  }
  return(
    <div>
      {renderMovies()}
      {count === movies.length ? <h1>No More Movies to be added</h1> :<button onClick={()=>{getMoreMovies()}}>Get More Movies</button>}
    </div>
  )
}

export default AllMovie