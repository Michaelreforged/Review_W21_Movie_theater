import { Route, Routes } from "react-router";
import Theaters from "../Pages/Theaters"
import Movies from "../Pages/Movies"
import NoMatch from "../Pages/NoMatch";
import WithLN from "../Components/WithLN";

function TheatersRoutes() {

  return (
    <>
    <Routes>
    <Route path="/" element={<Theaters/>}/>
    <Route path=":id/movies" element={WithLN(Movies)}/>
    <Route path="*" element={<NoMatch/>}/>
    </Routes>
    </>
  );
}

export default TheatersRoutes;
