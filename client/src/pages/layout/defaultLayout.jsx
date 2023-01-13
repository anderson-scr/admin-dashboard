import React from "react";
import SideBar from "common/components/sideBar/sideBar";
import Header from "common/components/header/header";
import Footer from "common/components/footer/footer";

const DefaultLayout = () => {
  return (
    <div className="d-flex conatiner-defaultLayout">
      <SideBar />
      <div className="d-flex flex-column justify-content-between w-100">
        <Header />
        <section>
          
        </section>
        <Footer />
      </div>
    </div>
  )
}

export default DefaultLayout