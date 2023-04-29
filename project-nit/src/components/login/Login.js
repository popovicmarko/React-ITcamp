import { useState } from "react";

export function Login() {
    function handleClick(e){
    
    }
    const [username, setUsername] = useState('')
    
    return (
        <div>
            <h1>Login</h1>
            <form>
                <label>e-mail</label>
                <input type="text" value={username} onChange={(e ) => {setUsername(e.target.value)} } placeholder="Enter Username" name="username" required></input>
                <label>password</label>
                <input type="password " name="password " required></input>
                <button id="login" onClick={handleClick}>Login</button>
                <p style={{fontSize:'2rem', color: 'black'}}> {username}</p>
            </form>
        </div>
    )
}