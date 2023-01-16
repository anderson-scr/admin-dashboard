import React from "react";
import "./elementContainerStyle.css";

const ElementContainer = ({ children }) => {
  return (
    <section className="col elementContainer m-1">
      { children }
    </section>
  )
}

export default ElementContainer;