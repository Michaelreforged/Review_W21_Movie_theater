import { Route, Routes } from "react-router";
import Navbar from "./Components/Navbar";
import AllMovie from "./Pages/AllMovie";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import Theaters from "./Pages/Theaters";


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Theaters" element={<Theaters/>}/>
      <Route path="/Theaters/:id/movies" element={<Movies/>}/>
      <Route path="/Movies" element={<AllMovie/>}/>
    </Routes>
    </>
  );
}

export default App;
