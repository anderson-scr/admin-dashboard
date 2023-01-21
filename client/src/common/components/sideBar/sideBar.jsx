import React from "react";
import "./sideBarStyle.css";
import { ReactComponent as Logo } from "assets/admin-logo.svg";
import GenericOption from "./components/genericOption";
import { useSelector } from "react-redux";

// Icons
import { SlScreenTablet } from 'react-icons/sl';
import { BsCart2, BsPeople, BsFileMedical, BsShieldLock, BsPersonBadge, BsGear, BsBoxArrowLeft, BsAlt, BsClipboardData } from 'react-icons/bs';

const SideBar = () => {
  const { hamburgerIsOpenSlice } = useSelector( state => state.headerTitle );

  return (
    <nav className={"container-sideBar d-flex flex-column align-items-center " + hamburgerIsOpenSlice}>
      <section className="container mt-4 d-flex flex-column align-items-center containerLogo">
        <Logo />
        <p>U<span>.in</span> -Control</p>
      </section>

      <section className="container">
        <div className="row mt-4 d-flex flex-column align-items-end">
          <GenericOption icon={<SlScreenTablet size={25} />} name="Dashboard" path="/Dashboard"/>
        </div>
      </section>

      <section className="container">
        <div className="row d-flex flex-column align-items-end">
          <div className="mb-1 mt-2 navSectionName">
            Management
          </div>
          <GenericOption icon={<BsCart2 size={25} />}  name="Products" path="/Products"/>
          <GenericOption icon={<BsPeople size={25} />} name="Customers" path="/Customers"/>
          <GenericOption icon={<BsFileMedical size={25} />} name="Transactions" path="/Transactions"/>
          <GenericOption name="Users" icon={<BsPersonBadge size={25} />} path="/Users"/>
          <GenericOption name="Permissions" icon={<BsShieldLock size={25} />} path="/Permissions"/>
        </div>

        <div className="row d-flex flex-column align-items-end">
          <div className="mb-1 mt-2 navSectionName">
            Charts
          </div>
          <GenericOption name="Customers" icon={<BsAlt size={25} />} path="/ChartCustomers"/>
          <GenericOption name="Products" icon={<BsClipboardData size={25} />} path="/ChartProducts"/>
          <GenericOption name="Sales" icon={<BsAlt size={25} />} path="/ChartSales"/>
        </div>

        <div className="row d-flex flex-column align-items-end">
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