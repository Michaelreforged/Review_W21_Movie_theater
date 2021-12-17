import React, { useState } from "react";
import styled from "styled-components"
import Squirtle from "./Images/Squirtle.webp"
import Charmander from "./Images/Charmander.webp"
import Bulbasaur from "./Images/Bulbasaur.webp"

const RPSWSwitch = () =>{
  const[player,setPlayer] = useState(null);
  const[comp,setComp] = useState(null);
  const[score,setScore] = useState({player: 0, comp: 0, draw: 0});
  const [record,setRecord] = useState([])
  const [clear,setClear] = useState(false)

  const options =  ["r", "p", "s"];

  return (
    <div>
      <h1>Welcome to Rock Paper Scissors</h1>
      <div>
        <Imagestd src={Squirtle} />
        <Imagestd src={Bulbasaur} />
        <Imagestd src={Charmander} />
      </div>
      <div>
        {/* <p>Player Score: {score.player} Computer Score: {score.comp} Draws: {score.draw}</p> */}
        </div>
        {/* <button onClick= {()=> setClear(true)}>Clear</button> */}
        {/* {renderRecord()} */}
    </div>
  );

}

const Imagestd = styled.img`
max-height: 150px;
`

export default RPSWSwitch