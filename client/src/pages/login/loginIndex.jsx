import React from "react";
import "./loginIndexStyle.css";
import { ReactComponent as Logo } from "assets/admin-logo.svg";
import { Outlet, NavLink } from "react-router-dom";

const LoginIndex = () => {
  return (
    <div className="container d-flex flex-column align-center text-center">
      <div className="row mt-5">
        <Logo />
        <h1 className="logoTitle">U<span className="logoIN">.in</span> -Control</h1>
        <p>We keep your system under control.</p>
      </div>

      <div className="containerLoginIndex row">
        <div className="row containerTabs">
          <NavLink to="/Login" className="col-5 btnTab">
            <button className="btnTab" id="btnTabLogin">
              Login
            </button>
          </NavLink>
          <NavLink to="/Register" className="col-5 btnTab">
            <button className="btnTab" id="btnTabSignUp">
              Sign Up
            </button>
          </NavLink>
        </div>
        
        <div className="row">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default LoginIndex;