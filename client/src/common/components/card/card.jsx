import React from "react";
import "./cardStyle.css";
import ElementContainer from "../elementContainer/elementContainer";
import { BsArrowRightShort } from 'react-icons/bs';
const Card = ({title, icon, value}) => {

  return (
    <ElementContainer>
      <div className="header m-1 d-flex align-items-center mt-2 justify-content-between">
        <h5 className="titleCard">{ title }</h5>
        <div style={{paddingBottom: "7px"}}>
          { icon }
        </div>
      </div>
      <div className="mt-4">
        <h3>{ value }</h3>
        <p className="showDetails">
          Show Details
          <BsArrowRightShort size={20}/>
        </p>
      </div>
    </ElementContainer>
  )
}

export default Card;