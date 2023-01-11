import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import LoginIndex from "pages/login/loginIndex";
import Login from "pages/login/components/login/login";
import Register from "pages/login/components/register/register";

const RoutesIndex = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={ <Navigate replace to="Login" /> }/>
            <Route path="/" element={ <LoginIndex /> }>
            <Route path="/Login" element={ <Login /> }/>
            <Route path="/Register" element={ <Register /> }/>
          </Route>
        </Routes>
    </>
  )
}

export default RoutesIndex