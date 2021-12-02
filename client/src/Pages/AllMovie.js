import React, { useState } from "react";

const AllMovie = () =>{
  const [movies, setMovies] = useState([])

  const getMovies = async () =>{ 
    try{
      let res = await axios.get("/api/")
      setMovies(res.data)
    }catch(err){
      console.log(err)
    }
  }
  const renderMovies = () =>{
    return movies.map((movie)=>{
      return(
        <div>
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