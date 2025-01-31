import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContextProvider"

import '../styles/Navbar.css'

export const Navbar = () => {
    const {isAuthenticated, logout} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
    }
    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link to='/' className="nav-link">Home</Link>
                <Link to='/movies' className="nav-link">Movies</Link>
            </div>
            <div className="nav-right">
                {isAuthenticated ? <button onClick={handleLogout}>Logout</button> : <button onClick={() => navigate('/login')}>Login</button>}
            </div>
        </nav>
    )
}