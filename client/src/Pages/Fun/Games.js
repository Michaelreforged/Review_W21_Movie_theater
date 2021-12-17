import { Route, Routes } from "react-router";
import NoMatch from "../NoMatch";
import TwentyOne from "./TwentyOne";
import RPSWIf from "./RPSIf";
import RPSWSwitch from "./RPSSwitch";


function TheatersRoutes() {

  return (
    <>
    <Routes>
    <Route path="/BlackJack" element={<TwentyOne/>}/>
    <Route path="/RPSWIf" element={<RPSWIf/>}/>
    <Route path="/RPSWSwitch" element={<RPSWSwitch/>}/>
    <Route path="*" element={<NoMatch/>}/>
    </Routes>
    </>
  );
}

export default TheatersRoutes;
