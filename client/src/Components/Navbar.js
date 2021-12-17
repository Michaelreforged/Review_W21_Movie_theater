import React from "react";
import {Link} from "react-router-dom";
import { NavA, NavbarOptions, NavBarStyle } from "./Style/Styles";

const Navbar = () =>{

  const routes = [
    {path: "/", Name: "Home" },
    {path: "/Theaters", Name: "Theaters" },
    {path: "/Movies", Name: "Movies" },
  ]

  const games = [
    {path:"/Games/BlackJack", Name: "BlackJack"},
    {path:"/Games/RPSWIf", Name: "RPS with If"},
    {path:"/Games/RPSWSwitch", Name: "RPS with Switch"},
  ]

  const MainOptions = () =>{
    return routes.map((format) =>{
      return(
        <NavbarOptions>
          <NavA href={format.path}>{format.Name}</NavA>
        </NavbarOptions>
      )
    })
  }

  const Games = () => {
    return games.map((format) =>{
      return(
        <NavbarOptions>
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