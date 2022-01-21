import React from "react";

const MovieCard = ({info}) => {
  console.log("moviecard",info)

  return(
    <div style={{display:"flex",flexDirection:"column",flexBasis:"25%",padding:"20px",border:"1px solid black"}}>
      <h1>{info.name}</h1>
      <p>{info.duration}</p>
    </div>
  )
}

export default MovieCard