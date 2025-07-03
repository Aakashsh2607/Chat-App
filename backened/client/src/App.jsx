import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Left from './Home/left/Left'
import Right from './Home/right/Right'
import Logout from './Home/left1/Logout'
import  { Toaster } from "react-hot-toast";
import Signup from './components/Signup'
import Login from './components/Login'
import { useAuth } from "./context/AuthProvider";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <> 
        <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <div className="flex h-screen">
                <Logout />
                <Left />
                <Right />

                
              </div>


            
            ) : (
              <Navigate to={"/login"} />
            )
          }
        />
    
       
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
