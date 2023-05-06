import { useState } from "react";
import './Register.css'
import axios from 'axios'
import { BASE_URL } from "../../config/api";
export function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [massage, setMassage] = useState('')
    const [isSeccess, setIsSeccess] = useState(false)

        async function Register(data) {
            try {
                setIsSeccess(true)
                const user = await axios.post('https://nit-backend.onrender.com/users', data)
                const userInfo = await user.data
                console.log(userInfo)
                setMassage("Usepna registracija!")
            } catch (err) {
                console.log(err.response.data)
                if(err.response){
                    setMassage(err.response.data.err)
                } else if(err.response.headers){
                    setMassage("nema konkecije")
                }else {
                    setMassage(err.massage)
                }
                setIsSeccess(false)
            }
        }
    function handleClick(e) {
        e.preventDefault();
        Register({ 
            name,
            email, 
            password})
    }
    
    return (
        <div className='rCointener'>
            <form>
                <h1>Register</h1>
                <p> {massage && massage} </p>
                <label>Name</label>
                <input className="rInput" type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Name" name="name" required></input>
                <label>E-mail</label>
                <input type="text" className="rInput" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter E-mail" name="email" required></input>
                <label>Password</label>
                <input placeholder="Enter Password" value={password} onChange={(e) => { setPassword(e.target.value) }} className="rInput" type="password "  name="password " required></input>
                <button onClick={handleClick}>Register</button>
            </form>
        </div>
    )
}