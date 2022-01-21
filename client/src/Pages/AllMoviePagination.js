import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../Components/MovieCard";

const AllMoviePage = () =>{
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(null)
  const [count, setCount] = useState(null)
  const [per, setPer] = useState(null)

  const getMovies = async () =>{ 
    try{
      let res = await axios.get("/allmovies")
      setMovies(res.data.movie)
      setCount(res.data.count)
      setPer(res.data.per)
      console.log(res.data.count,res.data.per)
    }catch(err){
      console.log(err)
    }
  }

  const pageMovie = async (page) => {
    try{
      let res = await axios.get(`/allmovies?page=${page}`)
      setMovies(res.data.movie)
    }catch(err){
      console.log(err)
    }
  }

  const pageButton = () => {
    const numPage = Math.ceil(count/per);
    const buttonarr = [];
    for(let i = 1; i <= numPage; i++){
      buttonarr.push(
        <button onClick={()=>pageMovie(i)}>{i}</button>
      )
    }
    return buttonarr
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
      {pageButton()}
      {renderMovies()}
    </div>
  )
}

export default AllMoviePage