import React, { useEffect, useReducer, useState } from "react";
import Squirtle from "./Images/Squirtle.webp"
import Charmander from "./Images/Charmander.webp"
import Bulbasaur from "./Images/Bulbasaur.webp"
import { Imagestd } from "./Styles";

const RPSWIf = () =>{
  const[player,setPlayer] = useState(null);
  const[comp,setComp] = useState(null);
  const[winner, setWinner] = useState("Start Game")
  const[reset, setReset] = useState(false)

  const options =  ["r", "p", "s"];

  useEffect(()=>{
    win()
  },[player])

  useEffect(()=>{
    win()
    setReset(false)
  },[reset])

  const win = () =>{
    setComp(options[Math.floor(Math.random()*3)])
    console.log("p",player)
    console.log("C",comp)
    if (player === null && comp ===null){
      console.log("Reset??")
      setWinner("Start Game")
    }
    else if (player === comp){
      setWinner("Tie")
    }
    else if (player === options[0]){
      if(comp === options[1]){
        setWinner("Computer Wins")
      } else{
        setWinner("Player Wins")
      }
    }
    else if (player === options[1]){
      if(comp === options[2]){
        setWinner("Computer Wins")
      } else{
        setWinner("Player Wins")
      }
    }
    else{
      if(comp === options[0]){
        setWinner("Computer Wins")
      } else{
        setWinner("Player Wins")
      }
    }
    setPlayer(null)
  }

    const resetGame = () => {
      setReset(true)
      setPlayer(null)
      setComp(null)
    }

  return (
    <div>
      <h1>Welcome to Rock Paper Scissors</h1>
      <h1> {winner}</h1>
      <h1> {JSON.stringify(player)}</h1>
      <h1> {JSON.stringify(comp)}</h1>
      <div>
        <Imagestd src={Squirtle} onClick={() => setPlayer(options[0])}/>
        <Imagestd src={Bulbasaur} onClick={() => setPlayer(options[1])}/>
        <Imagestd src={Charmander} onClick={() => setPlayer(options[2])}/>
      </div>
      <button onClick = {()=>resetGame()}>RESET</button>
    </div>
  );
}

export default RPSWIf