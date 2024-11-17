import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext) //getting acces of 'setUser' method from the Context(UserContextProvider) 
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username, password}) //updating(setting) the user state using setuser method 
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text" 
            value = {username}
            onChange = {(e) => setUsername(e.target.value)}
            placeholder="username" />

            <input type="password"
            value = {password}
            onChange = {(e) => setPassword(e.target.value)}
            placeholder="password" />
            <button onClick={handleSubmit} >Submit</button>
        </div>

    )
}

export default Login;