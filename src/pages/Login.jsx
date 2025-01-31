import { useContext, useState } from "react"
import axios from "axios";
import { AuthContext } from "../context/AuthContextProvider";
import '../styles/Login.css'



export const Login = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError]  = useState('');
    const {login} = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();

        try{
            // const response = await axios (
            //     {
            //         method : 'POST',
            //         url: `https://decorous-exuberant-nightshade.glitch.me/login`,
            //         data: {
            //             username:username, password:password
            //         }
            //     }
            // );

            // if(response.data.success){
            //     console.log('token', response.data.token);
            //     const token = response.data.token;
            //     setToken(token);
            // }

            const response = await fetch('https://decorous-exuberant-nightshade.glitch.me/login',{
                method:'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify({username, password})
            });

            const data = await response.json();
            // console.log('token', data.token);
            if(data.success) {
                login(data.token);
            }

        } catch(error){
            console.log('eer', error);
            setError(error);
            // console.log('Error in login', error.response.data.message);
            // setError(error.response.data.message);
        }
    }


    return(
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUserName(e.target.value)} required></input>
                <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                <input type="submit" value="Login" className="btn"/>
            </form>

            {error && <p style={{color:'red'}}>{error}</p>}
        </div>
    )
}