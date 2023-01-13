import React from "react";
import { NavLink } from "react-router-dom";
import "./genericOptionStyle.css";
import { useDispatch } from "react-redux";
import { changeTitle } from "redux/slices/headerTitleSlice";

const GenericOption = ({icon, name, path}) => {
  const dispatch = useDispatch();

  return (
    <div className="w-100 p-0" onClick={ () => dispatch(changeTitle(name)) }>
      <NavLink className="container mb-3 container-option d-flex justify-content-start" to={path}>
        <div className="col-3 container-icon">
          {icon}
        </div>
        <div className="col-9 container-name">
          {name}
        </div>
      </NavLink>
    </div>
  )
}

export default GenericOption;