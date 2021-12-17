import React, { useEffect, useState } from "react";
import axios from "axios"
import { useParams } from "react-router";
import GetProps from "../Components/GetProps"

const Movies = ({navigate}) => {
  const [movies, setMovies] = useState([])
  const [showMovies, setShowMovies] = useState(false)
  const params = useParams()
  console.log(params)
  let p = GetProps();
  console.log(p)
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
        <div key={m.id}>
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
      <a onClick={()=>{navigate('/theaters')}}>alksdfj;alsjflasjf</a>
    </div>
  )
}

export default Movies