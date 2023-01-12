import React from "react";
import "./genericOptionStyle.css";

const GenericOption = ({icon, name, path}) => {
  return (
    <div className="container row mb-3">
      <div className="col-4">
        {icon}
      </div>
      <div className="col-8 optionName">
        {name}
      </div>
    </div>
  )
}

export default GenericOption;