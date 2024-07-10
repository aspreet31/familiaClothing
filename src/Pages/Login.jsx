import React, { useState } from 'react'
import "./CSS/Login.css"
import { Link } from 'react-router-dom'
import {auth} from './firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword] = useState("");
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
           await signInWithEmailAndPassword(auth,email,password) 
           console.log("user logged");
           window.location.href="/";
           toast.success("User logged in Successfully", {
            position: "top-center",
          });
        } catch (error) {
            console.log(error);
            toast.error(error.message, {
              position: "bottom-center",
            });
        }
    }
  return (
    <form onSubmit={handleSubmit}>
    <div className="login">
      <div className="login-container">
        <h1>Login</h1>
        <div className="login-fields">
          <input type="email" placeholder="Email Address" value={email} onChange={(e)=> setEmail(e.target.value)}/>
          <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
        </div>
        <button type='submit'>Submit</button>
        <p className="signup">
          New user <Link to="/signup"><span>Register here</span></Link>
        </p>
      </div>
    </div>
    </form>
  )
}

export default Login
