import React from "react";
import "./elementContainerStyle.css";

const ElementContainer = ({ colSize = "", children }) => {
  const formattedColSize = `-${colSize}`;
  return (
    <section className={`col${colSize !== ""? formattedColSize : ""} h-100 elementContainer m-1`}>
      { children }
    </section>
  )
}

export default ElementContainer;