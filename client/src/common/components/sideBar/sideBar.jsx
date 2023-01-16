import React from "react";
import "./sideBarStyle.css";
import { ReactComponent as Logo } from "assets/admin-logo.svg";
import GenericOption from "./components/genericOption";
import { useSelector } from "react-redux";

// Icons
import { SlScreenTablet } from 'react-icons/sl';
import { BsCart2, BsPeople, BsFileMedical, BsShieldLock, BsSortNumericUpAlt, BsGear, BsBoxArrowLeft } from 'react-icons/bs';

const SideBar = () => {
  const { hamburgerIsOpenSlice } = useSelector( state => state.headerTitle );

  return (
    <nav className={"container-sideBar d-flex flex-column align-items-center " + hamburgerIsOpenSlice}>
      <section className="container mt-4 d-flex flex-column align-items-center containerLogo">
        <Logo />
        <p>U<span>.in</span> -Control</p>
      </section>

      <section className="container">
        <div className="row mt-5 d-flex flex-column align-items-end">
          <GenericOption icon={<SlScreenTablet size={25} />} name="Dashboard" path="/Dashboard"/>
        </div>
      </section>

      <section className="container">
        <div className="row d-flex flex-column align-items-end">
          <div className="mb-1 mt-3 navSectionName">
            Client Facing
          </div>
          <GenericOption icon={<BsCart2 size={25} />}  name="Products" path="/Products"/>
          <GenericOption icon={<BsPeople size={25} />} name="Customers" path="/Customers"/>
          <GenericOption icon={<BsFileMedical size={25} />} name="Transactions" path="/Transactions"/>
        </div>

        <div className="row d-flex flex-column align-items-end">
          <div className="mb-1 mt-2 navSectionName">
            Management
          </div>
          <GenericOption name="Admin" icon={<BsShieldLock size={25} />} path="/Admin"/>
          <GenericOption name="Performance" icon={<BsSortNumericUpAlt size={25} />} path="/Performance"/>
        </div>

        <div className=" mt-5 row d-flex flex-column align-items-end">
          <div className="mb-1 mt-2 navSectionName">
            User
          </div>
          <GenericOption name="Config" icon={<BsGear size={25} />} path="/Config"/>
          <GenericOption name="Logout" icon={<BsBoxArrowLeft size={25} />} path="/Login"/>
        </div>
      </section>
    </nav>
  )
}

export default SideBar;