import React from "react";
import "./loginStyle.css";

const Login = () => {
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
        <div className="mb-5 row d-flex flex-column align-items-center">
          <input type="password" id="iptUserPassword" className="w-75 iptDefault" placeholder="Password"/>
        </div>

        <div className="mt-5 mb-4 row d-flex flex-column align-items-center">
          <button className="btn btn-primary w-50 btnDefault">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login;