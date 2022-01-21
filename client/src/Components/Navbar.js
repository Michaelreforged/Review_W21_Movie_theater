import React from "react";
import { NavA, NavbarOptions, NavBarStyle } from "./Style/Styles";

const Navbar = () =>{

  const routes = [
    {path: "/", Name: "Home" },
    {path: "/Theaters", Name: "Theaters" },
    {path: "/Movies", Name: "Movies" },
  ]

  const games = [
    {path:"/Games/RPSWIf", Name: "RPS with If"},
    {path:"/Games/RPSWSwitch", Name: "RPS with Switch"},
    {path:"/Games/RPSReducer", Name: "RPS with reducer"},
  ]

  const MainOptions = () =>{
    return routes.map((format, ind) =>{
      return(
        <NavbarOptions key={ind}>
          <NavA href={format.path}>{format.Name}</NavA>
        </NavbarOptions>
      )
    })
  }

  const Games = () => {
    return games.map((format,ind) =>{
      return(
        <NavbarOptions key={ind}>
          <NavA href={format.path}>{format.Name}</NavA>
        </NavbarOptions>
      )
    })
  }

  return(
    <NavBarStyle>
      {MainOptions()}
      {Games()}
    </NavBarStyle>
  )
}



export default Navbar