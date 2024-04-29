"use client"
import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useRouter } from 'next/navigation'
import {auth} from "../../../firebase.config";


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
    <div className="flex flex-col justify-center items-center bg-white text-black h-screen">
      <div className="logincontainer w-1/6 flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl mb-4">Login</h1>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          required
          className="m-2"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          required
          className="m-2"
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
        <Button className="mt-2" variant="contained" onClick={handleLogin}>
          Login
        </Button>
        <p className="my-2">
          Don't have an account ?{" "}
          <span className="text-sky-600"> Signup</span>{" "}
        </p>
      </div>
    </div>
  );
}