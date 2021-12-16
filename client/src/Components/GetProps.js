import {
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";


const GetProps= () => {
  let location = useLocation();
  let navigate = useNavigate();
  let params = useParams()
  return [location,navigate,params]
}

export default GetProps