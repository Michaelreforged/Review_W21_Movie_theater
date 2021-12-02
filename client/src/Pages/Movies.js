import React, { useEffect, useState } from "react";
import axios from "axios"

const Movies = () => {
  const [movies, setMovies] = useState([])
  const getMovies = async () => {
    try {
      let res = await axios.get(`/api/theaters/${8}/movies`)
      setMovies(res.data)
      console.log("movie",res.data)
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
        <div>
          <h1>{movie.name}</h1>
          <p>{movie.duration}</p>
        </div>
      )
    })
  }

  return(
    <div className="movie">
      <h1>Movies</h1>
      {renderMovies()}
    </div>
  )
}

export default Movies