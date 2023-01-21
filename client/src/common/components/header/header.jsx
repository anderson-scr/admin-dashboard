import React, { useEffect, useRef, useState } from "react";
import "./headerStyle.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeTitle } from "redux/slices/headerTitleSlice";
import { changeTheme } from "redux/slices/themeSlice";
import { handleHamburgerIsOpenSlice } from "redux/slices/headerTitleSlice";
import { BsBrightnessHighFill, BsBrightnessLowFill } from "react-icons/bs";
import user_temp from "assets/user_temp.jpg"

const Header = () => {
  const { title } = useSelector(state => state.headerTitle);
  const btnHamburger = useRef();
  const { mode } = useSelector(state => state.theme);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitle("Dashboard"));
  }, [dispatch]);

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
      <div className="d-flex align-items-center justify-content-between">
        <div className="containerH1 d-flex align-items-center">
          <div className="containerHamburger d-flex align-items-center open" onClick={handleHamburgerIsOpen} ref={btnHamburger}>
            <div className="hamburger"></div>
          </div>
          <h1>{title}</h1>
        </div>
        <div className="container-headerOptions d-flex align-items-center justify-content-evenly">
          <div className="containerToggleTheme">
            <button className="btnToggleTheme" onClick={() => dispatch(changeTheme())}>
              {mode === "dark"? <BsBrightnessLowFill size={40}/> : <BsBrightnessHighFill size={40}/>}
            </button>
          </div>
          Anderson Salles
          <div className="containerUserImg">
            <img src={ user_temp } alt="User" id="userImage" />
          </div>
        </div>
      </div>
      <div className="headerLine"></div>
    </div>
  )
};

export default Header;