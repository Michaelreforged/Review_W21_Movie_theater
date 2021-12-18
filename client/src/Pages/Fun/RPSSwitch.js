import React, { useEffect, useState } from "react";
import { Imagestd } from "./Styles";
import Squirtle from "./Images/Squirtle.webp"
import Charmander from "./Images/Charmander.webp"
import Bulbasaur from "./Images/Bulbasaur.webp"

const RPSWSwitch = () =>{
  const[player,setPlayer] = useState(null);
  const[comp,setComp] = useState(null);
  const [winner, setWinner] = useState("Start Game")

  const options =  ["r", "p", "s"];

  useEffect(()=>{
    win()
  },[player])

  const win = () => {
    if(player === ""){
      return
    }
    setComp(options[Math.floor(Math.random()*3)])
    console.log("p",player)
    console.log("c",comp)
    switch (true){
      case (comp !== null && player === comp):
        setWinner("Tie")
      break
      case (player === options[0]):
      if (comp === options[1]){
        setWinner("Computer Wins")
      }
      else(setWinner("Player Wins"))
      break
      case (player === options[1]):
      if (comp === options[2]){
        setWinner("Computer Wins")
      }
      else(setWinner("Player Wins"))
      break
      case (player === options[2]):
      if (comp === options[0]){
        setWinner("Computer Wins")
      }
      else(setWinner("Player Wins"))
      break
      default:
        if (comp === null){
          return setWinner("Start Game")
        }
        break
    }
    setPlayer("")
  }

  const resetGame = () => {
    setPlayer(null)
    setComp(null)
  }

  return (
    <div>
      <h1>Welcome to Rock Paper Scissors</h1>
      <h1> {winner}</h1>
      <div>
        <Imagestd src={Squirtle} onClick={() => setPlayer(options[0])}/>
        <Imagestd src={Bulbasaur} onClick={() => setPlayer(options[1])}/>
        <Imagestd src={Charmander} onClick={() => setPlayer(options[2])}/>
      </div>
      <button onClick = {()=>resetGame()}>RESET</button>
    </div>
  );

}

export default RPSWSwitch