import { Route, Routes } from "react-router";
import Navbar from "./Components/Navbar";
import AllMovie from "./Pages/AllMovie";
import Home from "./Pages/Home";
import NoMatch from "./Pages/NoMatch";
import TheatersRoutes from "./Routes/TheatersRoutes";
import Games from "./Pages/Fun/Games"
import AllMovieInfini from "./Pages/AllMovieInfini";
import AllMoviePage from "./Pages/AllMoviePagination";


function App() {
  return (
    <>
    <Navbar/>
    <div style={{padding:"0px 40px 0px 40px"}}>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="Theaters/*" element={<TheatersRoutes/>}/>
      <Route path="Movies" element={<AllMovie/>}/>
      <Route path="MoviesInfini" element={<AllMovieInfini/>}/>
      <Route path="MoviesPage" element={<AllMoviePage/>}/>
      <Route path="Games/*" element={<Games/>}/>
      <Route path="*" element={<NoMatch/>}/>
    </Routes>
    </div>
    </>
  );
}

export default App;
