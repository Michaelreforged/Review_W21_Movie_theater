import {
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";
import React from "react";


const WithLN= (View) => {
  let location = useLocation();
  let navigate = useNavigate();
  return <View location={location} navigate = {navigate}/>;
}

export default WithLN