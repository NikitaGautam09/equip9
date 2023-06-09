import react from 'react'
import './register.css'
import React, { useState } from "react"
import axios from 'axios' 
import Link from '@mui/material/Link';

const Register=()=>{
    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: "",
        image:null
    })

   
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const register = ()=>{
        const {name,email,password,reEnterPassword,image}= user
        if(name && email && password && (password=== reEnterPassword)){
            axios.post("http://localhost:9002/register",user)
            .then(res=> alert(res.data.message))
        }
        else{
            alert('invalid input')
        }
    }


return(
    <div className="register">
        {console.log("User", user)}
<h1>Register</h1>
            <input type="text" name="name" value={user.name}  placeholder="Your Name" onChange={ handleChange } ></input>
            <input type="text" name="email" value={user.email}  placeholder="Your Email" onChange={ handleChange } ></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange } ></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange } ></input>
            <label>
          Add profile picture:
          <input type="file" accept="image/*" value={user.image} onChange={ handleChange } />
        </label>
            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <Link href="http://localhost:3000/login">
            <div className="button" >Login</div>
            </Link>
            </div>
)
}

export default Register