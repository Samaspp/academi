"use client"
import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useRouter } from 'next/navigation'
import {auth} from "../../../firebase.config";
import Link from "next/link";


export default function Login() { 
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()


  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async(e) => {
    e.preventDefault();
    try{
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("User logged in:", user);
        router.push("/home")
        // Redirect or perform additional actions
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Login error:", errorCode, errorMessage);
        // Handle login error, display error message to the user, etc.
      });
    }catch(err){console.log(err)}
    
  };

  return (
    <div className=" flex  justify-center items-center bg-white text-black h-screen">
      <div className="logincontainer  flex flex-col  items-center">
        <h1 className="font-bold text-3xl mb-4">Login</h1>

        <TextField 
          id="email"
          label="Email"
          variant="outlined"
          required
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <h6 className="m-2"></h6>
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          required
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <h6 className="m-2"></h6>
        <Button className="mt-2" variant="contained" onClick={handleLogin}>
          Login
        </Button>
        <p className="my-4">
          Don't have an account ?{" "}
          <span className="text-sky-600"> <Link href="/signup">Signup</Link></span>{" "}
        </p>
      </div>
    </div>
  );
}