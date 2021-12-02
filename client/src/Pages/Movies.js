import React, { useEffect, useState } from "react";
import axios from "axios"
import { useParams } from "react-router";

const Movies = (props) => {
  const [movies, setMovies] = useState([])
  const [showMovies, setShowMovies] = useState(false)
  const params = useParams()
  console.log(params)
  const getMovies = async () => {
    try {
      let res = await axios.get(`/api/theaters/${params.id}/movies`)
      setMovies(res.data)
    } catch (err) {
    }
  }

  useEffect(()=>{
    getMovies()
  },[])

  const renderMovies = () =>{
    return movies.map((m)=>{
      return(
        <div>
          <h1>{m.name}</h1>
          <p>{m.duration}</p>
        </div>
      )
    })
  }

  return(
    <div className="movie">
      <h1>Movies</h1>
      <button onClick={() => setShowMovies(!showMovies)}>
        {!showMovies ? "Show Movies!" : "Hide Movies"}
      </button>
      {showMovies &&
      renderMovies()
      }
    </div>
  )
}

export default Movies