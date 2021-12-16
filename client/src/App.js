import { Route, Routes } from "react-router";
import Navbar from "./Components/Navbar";
import AllMovie from "./Pages/AllMovie";
import Home from "./Pages/Home";
import NoMatch from "./Pages/NoMatch";
import TheatersRoutes from "./Routes/TheatersRoutes";


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="Theaters/*" element={<TheatersRoutes/>}/>
      <Route path="Movies" element={<AllMovie/>}/>
      <Route path="*" element={<NoMatch/>}/>
    </Routes>
    </>
  );
}

export default App;
