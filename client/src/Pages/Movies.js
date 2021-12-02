import React, { useEffect, useState } from "react";
import axios from "axios"

const Movies = (props) => {
  const [movies, setMovies] = useState([])
  const [showMovies, setShowMovies] = useState(false)

  const getMovies = async () => {
    try {
      let res = await axios.get(`/api/theaters/${3}/movies`)
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
            <p>This is the best movie out there. #1!</p>
        </div>
      )
    })
  }

  return(
    <div>
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