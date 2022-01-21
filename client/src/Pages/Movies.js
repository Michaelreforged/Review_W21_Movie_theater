import React, { useEffect, useState } from "react";
import axios from "axios"
import GetProps from "../Components/GetProps"
import MovieCard from "../Components/MovieCard";

const Movies = ({navigate}) => {
  const [movies, setMovies] = useState([])
  const [showMovies, setShowMovies] = useState(false)

  let p = GetProps();
  console.log(p)

  const getMovies = async () => {
    try {
      let res = await axios.get(`/api/theaters/${p[2].id}/movies`)
      setMovies(res.data)
    } catch (err) {
    }
  }

  useEffect(()=>{
    getMovies()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const renderMovies = () =>{
    return movies.map((m)=>{
      return(
          <MovieCard info = {m} key={m.id}/>
      )
    })
  }

  return(
    <div>
      <h1>Movies</h1>
      <button onClick={() => setShowMovies(!showMovies)}>
        {!showMovies ? "Show Movies!" : "Hide Movies"}
      </button>
      <div style={{display:"flex",flexWrap:"wrap"}}>
      {showMovies &&
      renderMovies()
    }
    </div>
      <button onClick={()=>{navigate('/theaters')}}>Return</button>
    </div>
  )
}

export default Movies