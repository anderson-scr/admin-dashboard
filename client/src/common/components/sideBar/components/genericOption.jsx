import React from "react";
import "./genericOptionStyle.css";

const GenericOption = ({icon, name, path}) => {
  return (
    <div className="container mb-3 container-option d-flex justify-content-start">
      <div className="col-3 container-icon">
        {icon}
      </div>
      <div className="col-9 container-name">
        {name}
      </div>
    </div>
  )
}

export default GenericOption;