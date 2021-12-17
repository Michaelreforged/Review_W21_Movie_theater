import { Route, Routes } from "react-router";
import Navbar from "./Components/Navbar";
import AllMovie from "./Pages/AllMovie";
import Home from "./Pages/Home";
import NoMatch from "./Pages/NoMatch";
import TheatersRoutes from "./Routes/TheatersRoutes";
import Games from "./Pages/Fun/Games"


function App() {
  return (
    <div style={{padding:"0px 20px 0px 20px"}}>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="Theaters/*" element={<TheatersRoutes/>}/>
      <Route path="Movies" element={<AllMovie/>}/>
      <Route path="Games/*" element={<Games/>}/>
      <Route path="*" element={<NoMatch/>}/>
    </Routes>
    </div>
  );
}

export default App;
