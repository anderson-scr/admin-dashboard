import React, { useEffect, useRef, useState } from "react";
import "./headerStyle.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeTitle } from "redux/slices/headerTitleSlice";
import { handleHamburgerIsOpenSlice } from "redux/slices/headerTitleSlice";

const Header = () => {
  const { title } = useSelector(state => state.headerTitle);
  const btnHamburger = useRef();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitle("Dashboard"));
  }, []);

  const handleHamburgerIsOpen = () => {
    if(isHamburgerOpen) {
      setIsHamburgerOpen(false);
      btnHamburger.current.classList.remove("open");
      dispatch(handleHamburgerIsOpenSlice());
    } else {
      setIsHamburgerOpen(true);
      btnHamburger.current.classList.add("open");
      dispatch(handleHamburgerIsOpenSlice());
    };
  };

  return (
    <div className="row container-header">
      <div className="containerH1 d-flex align-items-center">
        <div className="containerHamburger d-flex align-items-center open" onClick={handleHamburgerIsOpen} ref={btnHamburger}>
          <div className="hamburger"></div>
        </div>
        <h1>{title}</h1>
      </div>
      <div className="headerLine"></div>
    </div>
  )
};

export default Header;