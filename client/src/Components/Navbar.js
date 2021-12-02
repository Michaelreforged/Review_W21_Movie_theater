import React from "react";
import {Link} from "react-router-dom";

const Navbar = () =>{
  return(
    <div>
      <Link to="/">Home</Link>
      <Link to="/Theaters">Theaters</Link>
      <Link to="/Movies">Movies</Link>
    </div>
  )
}

export default Navbar