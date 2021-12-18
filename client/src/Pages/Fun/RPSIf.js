import React, { useEffect, useState } from "react";
import Squirtle from "./Images/Squirtle.webp"
import Charmander from "./Images/Charmander.webp"
import Bulbasaur from "./Images/Bulbasaur.webp"
import { Imagestd } from "./Styles";

const RPSWIf = () =>{
  const[player,setPlayer] = useState(null);
  const[comp,setComp] = useState(null);
  const [winner,setWinner] = useState(false)
  const options =  ["r", "p", "s"];

  useEffect(()=>{
    win()
  },[player])

  const renderWinner = () =>{
    return<h1>{winner}</h1>
  }

  const win = () =>{
    setComp(options[Math.floor(Math.random()*3)])
    if(player === null && comp === null){
      return setWinner("Start Game")
    }
    
    else if( player === comp){
      setWinner("Tie")
    } 
    
    else if( player === options[0]){
      if(comp === options[1]){
        setWinner("Computer Wins")
      }else(
        setWinner("Player Wins")
      )
    } 
    
    else if( player === options[1]){
      if(comp === options[2]){
        setWinner("Computer Wins")
      }else(
        setWinner("Player Wins")
      )
    } 
    
    else{
      if(comp === options[0]){
        setWinner("Computer Wins")
      }else(
        setWinner("Player Wins")
      )
    }
    setPlayer("Choose Again")
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

export default RPSWIf