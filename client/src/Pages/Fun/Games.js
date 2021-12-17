import { Route, Routes } from "react-router";
import NoMatch from "../NoMatch";
import RPSWIf from "./RPSIf";
import RPSWSwitch from "./RPSSwitch";
import RPSReducer from "./RPSReducer";


function TheatersRoutes() {

  return (
    <>
    <Routes>
    <Route path="/RPSWIf" element={<RPSWIf/>}/>
    <Route path="/RPSWSwitch" element={<RPSWSwitch/>}/>
    <Route path="/RPSReducer" element={<RPSReducer/>}/>
    <Route path="*" element={<NoMatch/>}/>
    </Routes>
    </>
  );
}

export default TheatersRoutes;
