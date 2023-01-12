import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginIndex from "pages/login/loginIndex";
import Login from "pages/login/components/login/login";
import Register from "pages/login/components/register/register";
import ForgotPassword from "pages/login/components/forgotPassword/forgotPassword";
import DefaultLayout from "pages/layout/defaultLayout";

const RoutesIndex = () => {
  return (
    <>
        <Routes>
          <Route element={ <LoginIndex/> }>
            <Route path="/Login" element={ <Login/> }/>
            <Route path="/Register" element={ <Register/> }/>
            <Route path="/ForgotPassword" element={ <ForgotPassword/> }/>
          </Route>

          <Route path='/' element={ <Navigate replace to='/Dashboard'/> }/>
          <Route path="/" element={ <DefaultLayout/> }>
            <Route path="/Dashboard" element={ <DefaultLayout/> }/>
          </Route>
        </Routes>
    </>
  )
}

export default RoutesIndex