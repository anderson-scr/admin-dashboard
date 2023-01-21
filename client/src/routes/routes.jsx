import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// Pages
import LoginIndex from "pages/login/loginIndex";
import Login from "pages/login/components/login/login";
import Register from "pages/login/components/register/register";
import ForgotPassword from "pages/login/components/forgotPassword/forgotPassword";
import DefaultLayout from "pages/layout/defaultLayout";
import Dashboard from "pages/dashboard/dashboard";
import Products from "pages/products/products";
import Customers from "pages/customers/customers";
import Transactions from "pages/transactions/transactions";
import Users from "pages/users/admin";
import Permissions from "pages/permissions/performance";
import Config from "pages/config/config";


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
            <Route path="/Dashboard" element={ <Dashboard/> }/>
            <Route path="/Products" element={ <Products/> }/>
            <Route path="/Customers" element={ <Customers/> }/>
            <Route path="/Transactions" element={ <Transactions/> }/>
            <Route path="/Users" element={ <Users/> }/>
            <Route path="/Permissions" element={ <Permissions/> }/>
            <Route path="/Config" element={ <Config/> }/>
          </Route>
        </Routes>
    </>
  )
}

export default RoutesIndex