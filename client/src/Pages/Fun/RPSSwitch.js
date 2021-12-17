import React, { useState, useEffect } from "react";
import { Imagestd } from "./Styles";
import Squirtle from "./Images/Squirtle.webp"
import Charmander from "./Images/Charmander.webp"
import Bulbasaur from "./Images/Bulbasaur.webp"

const RPSWSwitch = () =>{
  const[player,setPlayer] = useState(null);
  const[comp,setComp] = useState(null);
  const [winner,setWinner] = useState(false)
  const options =  ["r", "p", "s"];

  useEffect(()=>{
    console.log(player, comp)
    win()
    
  },[player])

  const renderWinner = () =>{
    return<h1>{winner}</h1>
  }

  const win = () => {
    setComp(options[Math.floor(Math.random()*3)])
    switch (true) {

      case (comp !== null && comp === player):
        setWinner("Tie")
        break;

      case (player === options[0]):
        if(comp === options[1]){
          setWinner("Computer")
        } else{
          setWinner("Player")
        }
        break;

      case (player === options[1]):
        if(comp === options[2]){
          setWinner("Computer")
        } else{
          setWinner("Player")
        }
        break;

      case (player === options[2]):
        if(comp === options[0]){
          setWinner("Computer")
        } else{
          setWinner("Player")
        }
        break;
        
      default:
        if(comp === null){
          console.log(comp)
          return setWinner("Start Game")
        }
        break;
    }
    return setPlayer("")
  }

  const reset = () => {
    setComp(null)
    setPlayer(null)
  }

  return (
    <div>
      <h1>Welcome to Rock Paper Scissors</h1>
      { renderWinner()}
      <div>
        <Imagestd src={Squirtle} onClick = {()=>setPlayer(options[0])} />
        <Imagestd src={Bulbasaur} onClick= {()=>setPlayer(options[1])} />
        <Imagestd src={Charmander} onClick= {()=>setPlayer(options[2])} />
      </div>
      <button onClick={()=>{reset()}}>Reset</button>
    </div>
  );
}

export default RPSWSwitch