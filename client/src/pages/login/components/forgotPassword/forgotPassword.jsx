import React from "react";
import { NavLink } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="container">
      <div className="container d-flex flex-column align-items-center mt-5">
        <h4 className="loginMsg">
          Recovery password and username.
        </h4>
        <hr className="w-75"/>
        <p>
          Please, enter with your email and we'll send you your login information.
        </p>
      </div>

      <form className="d-flex flex-column mt-4 mb-2">
        <div className="mb-4 row d-flex flex-column align-items-center">
          <input type="text" id="iptUserEmail" className="w-75 iptDefault" placeholder="Email"/>
        </div>

        <div className="mt-5 mb-4 row d-flex flex-column align-items-center">
          <button className="btn btn-primary w-50 btnDefault">Send</button>
        </div>
      </form>
      
      <div className="mt-5 mb-4 row d-flex flex-column align-items-center">
        <NavLink to="/Login">
          <button className="btn btn-primary w-50 btnDefault-Outline">
            Back
          </button>
        </NavLink>
      </div>
    </div>
  )
}

export default ForgotPassword;