import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./loginStyle.css";

const Login = () => {
  const navigate = useNavigate();

  const handleUserLogin = () => {
    navigate("/Dashboard");
  }

  return (
    <div className="container">
      <div className="container d-flex flex-column align-items-center mt-5">
        <h4 className="loginMsg">
          Login with your account.
        </h4>
        <hr className="w-75"/>
      </div>

      <form className="d-flex flex-column mt-4 mb-2">
        <div className="mb-4 row d-flex flex-column align-items-center">
          <input type="text" id="iptUserName" className="w-75 iptDefault" placeholder="User name"/>
        </div>
        <div className="mb-4 row d-flex flex-column align-items-center">
          <input type="password" id="iptUserPassword" className="w-75 iptDefault" placeholder="Password"/>
        </div>
        <div className="mb-5 row d-flex flex-column align-items-center">
          <label className="form-check-label" htmlFor="exampleCheck1">Forgot your password or user name? {" "}
            <NavLink to="/ForgotPassword" id="forgotLogin">Click here.</NavLink>
          </label>
        </div>

        <div className="mt-5 mb-4 row d-flex flex-column align-items-center">
          <button className="btn btn-primary w-50 btnDefault" onClick={handleUserLogin}>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login;