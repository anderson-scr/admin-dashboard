import React, { useState } from "react";
import SideBar from "common/components/sideBar/sideBar";
import Header from "common/components/header/header";
import Footer from "common/components/footer/footer";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  const [headerTitle, setHeaderTitle] = useState("Dashboard");
  
  const handleHeaderTile = (newTitle) => {
    setHeaderTitle(newTitle);
  };

  return (
    <div className="d-flex conatiner-defaultLayout">
      <SideBar handleTile={ handleHeaderTile }/>
      <div className="d-flex flex-column justify-content-between w-100">
        <Header title={headerTitle}/>
        <section>
          <Outlet />
        </section>
        <Footer />
      </div>
    </div>
  )
}

export default DefaultLayout;