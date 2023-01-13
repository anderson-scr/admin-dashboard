import React, { useEffect } from "react";
import "./headerStyle.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeTitle } from "redux/slices/headerTitleSlice";

const Header = () => {
  const { title } = useSelector(state => state.headerTitle);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeTitle("Dashboard"));
  }, []);

  return (
    <div className="row container-header">
      <div className="containerH1">
        <h1>{title}</h1>
      </div>
      <div className="headerLine"></div>
    </div>
  )
};

export default Header;