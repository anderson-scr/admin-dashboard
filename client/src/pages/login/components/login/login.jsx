import React from "react";
import "./loginStyle.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { schemaLogin } from "validation/yupLogin";
import { useDispatch } from "react-redux";
import { showModal } from "redux/slices/messageModalSlice";
import { apiUsers } from "api/userController";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schemaLogin)
  });

  const redirect = () => {
    navigate("/Dashboard");
  };

  const onSubmit = async (data) => {
    try {
      await apiUsers.login(data);
      
      redirect();
    } catch (error) {
      dispatch(showModal([error.response.data.modalIcon, error.response.data.modalTitle, error.response.data.modalBodyText]));
    }
  };

  return (
    <div className="container">
      <div className="container d-flex flex-column align-items-center mt-5">
        <h4 className="loginMsg">
          Login with your account.
        </h4>
        <hr className="w-75"/>
      </div>

      <form className="d-flex flex-column mt-4 mb-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-1 row d-flex flex-column align-items-center">
          <input type="text" id="iptUserName" className="w-75 iptDefault" placeholder="User name" { ...register("userName") }/>
          <div style={{height: "40px", color: "var(--red)", fontWeight: "600"}}>
            <p>{ errors.userName?.message }</p>
          </div>
        </div>
        <div className="row d-flex flex-column align-items-center">
          <input type="password" id="iptUserPassword" className="w-75 iptDefault" placeholder="Password" { ...register("password") }/>
          <div style={{height: "40px", color: "var(--red)", fontWeight: "600"}}>
            <p>{ errors.password?.message }</p>
          </div>
        </div>
        <div className="mb-5 row d-flex flex-column align-items-center">
          <label className="form-check-label" htmlFor="exampleCheck1">Forgot your password or user name? {" "}
            <NavLink to="/ForgotPassword" id="forgotLogin">Click here.</NavLink>
          </label>
        </div>

        <div className="mt-5 mb-4 row d-flex flex-column align-items-center">
          <button className="btn btn-primary w-50 btnDefault">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login;