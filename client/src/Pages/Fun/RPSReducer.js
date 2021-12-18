import React, { useReducer } from "react";
import { Imagestd } from "./Styles";
import Squirtle from "./Images/Squirtle.webp"
import Charmander from "./Images/Charmander.webp"
import Bulbasaur from "./Images/Bulbasaur.webp"

const RPSReducer = () =>{
  const options =  ["r", "p", "s"];
  const intialState = {winner: "Start game"}
  const [state, dispatch] = useReducer(win, intialState)


  function win(state,choice) {
    let comp = (options[Math.floor(Math.random()*3)])
    console.log("c",comp)
    console.log("P",choice.option)
    switch (choice.option){
      case "r":
      if( comp === options[1]){
        return{winner: "Computer Wins"}
      } else if( comp === options[2]){
        return{winner:"Player Wins"}
      } else{ return {winner:"tie"}}
      break
      case "s":
      if( comp === options[0]){
        return{winner: "Computer Wins"}
      } else if( comp === options[1]){
        return{winner:"Player Wins"}
      } else{ return {winner:"tie"}}
      break
      case "p":
      if( comp === options[1]){
        return{winner: "Computer Wins"}
      } else if( comp === options[0]){
        return{winner:"Player Wins"}
      } else{ return {winner:"tie"}}
      break
      default:
        return {winner:"Start Game"}
    }
  }

  const options =  ["r", "p", "s"];
  const initialState= {winner: "Start game"}
  const [state, dispatch] = useReducer(win, initialState)

  function win(state, choice) {
    let comp = options[Math.floor(Math.random()*3)]
    switch (choice.option) {
      case "r":
        if(comp === options[0]){
          return{winner: "Tie"}
        } else if (comp === options[1]){
          return{winner:"Computer Wins"}
        } else {
          return{winner:"Player Wins"}
        }    
      case "p":
        if(comp === options[1]){
          return{winner: "Tie"}
        } else if (comp === options[2]){
          return{winner:"Computer Wins"}
        } else {
          return{winner:"Player Wins"}
        }    
      case "s":
        if(comp === options[2]){
          return{winner: "Tie"}
        } else if (comp === options[0]){
          return{winner:"Computer Wins"}
        } else {
          return{winner:"Player Wins"}
        }    
      default:
        return{winner:"Start Game"}
    }
  }

  return(
    <div>
      <h1>Welcome to Rock Paper Scissors</h1>
      <h1>{state.winner}</h1>
      <div>
        <Imagestd src={Squirtle} onClick = {()=>dispatch({option: options[0]})} />
        <Imagestd src={Bulbasaur} onClick= {()=>dispatch({option: options[1]})}/>
        <Imagestd src={Charmander} onClick= {()=>dispatch({option: options[2]})}/>
      </div>
      <button onClick={()=>dispatch({option: "reset"})}>Reset</button>
    </div>
  )
}

export default RPSReducer