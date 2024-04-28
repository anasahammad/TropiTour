import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Spinner from "../Spinner";


const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth() || {}
    if(loading){
        return <Spinner/>
    }
    if(user){
        return children
    }
    return <Navigate state={location?.pathname || "/"} to="/login"></Navigate>;
        
    
};

export default PrivateRoutes;