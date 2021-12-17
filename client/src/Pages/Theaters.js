import React, { useEffect, useState } from "react";
import axios from "axios"

const Theaters = (props) => {
  const [theaters, setTheaters] = useState([])
  console.log("props",props)
  const getTheaters = async () => {
    try {
      let res = await axios.get("/api/theaters")
      setTheaters(res.data)
      console.log("theaters",res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(()=>{
    getTheaters()
  },[])

  const renderTheaters = () =>{
    return theaters.map((theater) =>{
      return(
        <div key={theater.id}>
          <h1 onClick={()=>{props.navigate(`/Theaters/${theater.id}/`)}}>{theater.name}</h1>
        </div>
      )
    })
  }

  return(
    <div>
      {renderTheaters()}
    </div>
  )
}

export default Theaters