import { useContext } from "react"
import { AuthContext } from "../context/AuthContextProvider"
import { Navigate, useNavigate } from "react-router-dom";

export const PrivateRoute = ({children}) => {
    const {isAuthenticated} = useContext(AuthContext);
    
    if(!isAuthenticated){
        return <Navigate to='/login' />
    }

    return children;
}