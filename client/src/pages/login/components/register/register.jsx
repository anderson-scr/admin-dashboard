import React from 'react';
import "./registerStyle.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { schemaRegisterValidation } from 'validation/yupRegister';

const Register = () => {
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schemaRegisterValidation)
  });

  const onSubmit= (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <div className="container d-flex flex-column align-items-center mt-3">
        <h4 className="registerMsg">
          Create your account.
        </h4>
        <hr className="w-75"/>
        <p>
          This is for demo propose.<br/>We don't ask for email validation
        </p>
      </div>

      <form className="d-flex flex-column mt-1 mb-1" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-1 row d-flex flex-column align-items-center">
          <input type="text" id="iptUserName" className="w-75 iptDefault" placeholder="User name" {...register("userName")}/>
          <div style={{height: "40px", color: "var(--red)", fontWeight: "600"}}>
            <p>{ errors.userName?.message }</p>
          </div>
        </div>
        <div className="mb-1 row d-flex flex-column align-items-center">
          <input type="email" id="iptUserEmail" className="w-75 iptDefault" placeholder="Email" {...register("email")}/>
          <div style={{height: "40px", color: "var(--red)", fontWeight: "600"}}>
            <p>{ errors.email?.message }</p>
          </div>
        </div>
        <div className="mb-1 row d-flex flex-column align-items-center">
          <input type="password" id="iptUserPassword" className="w-75 iptDefault" placeholder="Password" {...register("password")}/>
          <div style={{height: "40px", color: "var(--red)", fontWeight: "600"}}>
            <p>{ errors.password?.message }</p>
          </div>
        </div>

        <div className="mt-5 mb-4 row d-flex flex-column align-items-center">
          <button className="btn btn-primary w-50 btnDefault">Create</button>
        </div>
      </form>
    </div>
  )
}

export default Register