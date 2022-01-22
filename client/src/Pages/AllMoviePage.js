import React, { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard"
import axios from "axios";

const AllMoviePage = () =>{
  const [movies, setMovies] = useState([])
  const [count, setCount] = useState(1)
  const [per, setPer] = useState(1)

  const getMovies = async () =>{ 
    try{
      let res = await axios.get("/allmovies")
      console.log(res.data)
      setMovies(res.data.movie)
      setCount(res.data.count)
      setPer(res.data.per)
    }catch(err){
      console.log(err)
    }
  }

  const newPage = async (page) =>{
    try {
      let res = await axios.get(`/allmovies?page=${page}`)
      console.log(res.data.movie)
      setMovies(res.data.movie)
    } catch (err) {
      console.log(err)
    }
  }

  const renderButtons = () => {
    const numPage = Math.ceil(count/per) //expecting this to be 5
    console.log(numPage)
    const buttonarr = []
    for(let i = 1; i <=numPage; i ++){
      buttonarr.push(<button onClick={()=>newPage(i)}>{i}</button>)
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
          <MovieCard info = {movie}></MovieCard>
        </div>
      )
    })
  }
  return(
    <div>
      { renderButtons()}
      {renderMovies()}
    </div>
  )
}

export default AllMoviePage