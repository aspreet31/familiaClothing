import React, { useState } from "react";
import '../Pages/CSS/Signup.css'
import {auth,db} from "./firebase"
import {setDoc,doc} from "firebase/firestore"
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
const LoginSignup = () => {
  const [name,setName]=useState("");
  const [email,setEmail]= useState("");
  const [password,setPassword]=useState("");
const handleRegister = async (e)=>{
  e.preventDefault();
  try {
 await createUserWithEmailAndPassword(auth,email,password);
 const user = auth.currentUser;
 console.log(user);
 if(user){
  await setDoc(doc(db,"users",user.uid),{
    email: user.email,
   name:name
  })
 }
 window.location.href="/";
 toast.success("User Registered Successfully!!", {
  position: "top-center",
});
  }
  catch(error){
 console.log(error.message);
 toast.error(error.message, {
  position: "bottom-center",
});
  }
}

  return (
    <form onSubmit={handleRegister}>
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" value={name} required onChange={(e)=> setName(e.target.value)} />
          <input type="email" placeholder="Email Address" value={email} onChange={(e)=> setEmail(e.target.value)}/>
          <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
        </div>
        <button type="submit">Sign up</button>
        <p className="loginsignup-login">
          Already have an account? <Link to="/login"><span>Login here</span></Link>
        </p>
      </div>
    </div>
    </form>
  );
};

export default LoginSignup;
