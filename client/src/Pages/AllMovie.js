import React, { useEffect, useState } from "react";
import axios from "axios";

const AllMovie = () =>{
  const [movies, setMovies] = useState([])

  const getMovies = async () =>{ 
    try{
      let res = await axios.get("/allmovies")
      setMovies(res.data)
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
          {movie.name}
        </div>
      )
    })
  }
  return(
    <div>
      {renderMovies()}
    </div>
  )
}

export default AllMovie