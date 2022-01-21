import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../Components/MovieCard";

const AllMovieInfini = () =>{
  const [movies, setMovies] = useState([])
  const [count, setCount] = useState("")
  const [page, setPage] = useState(2)

  const getMovies = async () =>{ 
    try{
      let res = await axios.get("/allmovies")
      setMovies(res.data.movie)
      setCount(res.data.count)
    }catch(err){
      console.log(err)
    }
  }

  const getMoreMovies = async () => {
    try{
      let res = await axios.get(`/allmovies?page=${page}`)
      setMovies((prevState)=>[...prevState, ...res.data.movie])
      setPage((prev)=> prev+1)
    }catch(err){
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
          <MovieCard info = {movie} />
        </div>
      )
    })
  }
  return(
    <div>
      {renderMovies()}
      {count === movies.length ? <h1>No More Movies</h1> : <button onClick={()=>{getMoreMovies()}}>More Movies</button>}
    </div>
  )
}

export default AllMovieInfini