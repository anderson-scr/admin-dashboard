import React from "react";
import "./sideBarStyle.css";
import { ReactComponent as Logo } from "assets/admin-logo.svg";
import GenericOption from "./components/genericOption";

// Icons
import { SlScreenTablet } from 'react-icons/sl';
import { BsCart2 } from 'react-icons/bs';


const SideBar = () => {
  return (
    <nav className="container-sideBar d-flex flex-column align-items-center">
      <section className="container mt-4 d-flex flex-column align-items-center containerLogo">
        <Logo />
        <p>U<span>.in</span> -Control</p>
      </section>

      <div className="container mb-1 mt-5">
        <GenericOption icon={<SlScreenTablet />} name="Dashboard"/>
      </div>

      <section className="container containerNav">
        <div>
          <div className="container mb-1 mt-4 navSectionName">
            Client Facing
          </div>
          <GenericOption icon={<BsCart2 />} name="Products"/>
          <GenericOption name="Customers"/>
          <GenericOption name="Transactions"/>
        </div>

        <div>
          <div className="container mb-1 mt-4 navSectionName">
            Management
          </div>
          <GenericOption name="Admin"/>
          <GenericOption name="Performance"/>
        </div>
      </section>
    </nav>
  )
}

export default SideBar;