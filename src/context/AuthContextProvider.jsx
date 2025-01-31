import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider =({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return (localStorage.getItem('token') ? true : false);
    });
    const [token, setToken] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(token, 'token');
    }, [token]);

    const login = (authToken) => {
        console.log(authToken,'authtoken');
        setIsAuthenticated(true);
        setToken(authToken);
        localStorage.setItem('token', authToken);
        navigate('/movies');
    }

    const logout = () => {
        setToken(null);
        setIsAuthenticated(false);
        localStorage.removeItem('token');
        navigate('/login');
    }

    return(
        <AuthContext.Provider value={{token, isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}