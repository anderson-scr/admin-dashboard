import React from "react";
import "./dashboardStyle.css";
import { BsCash, BsPeople, BsCart2 } from 'react-icons/bs';
// Components
import Card from "common/components/card/card";
import DashboardBarChart from "./components/dashboardTable/dashboardTable";
import DashboardBreakdown from "./components/dashboardBreakdown/dashboardBreakdown";

const Dashboard = () => {
  return (
    <section className="containerDashboard h-100">
      <div className="containerCards row m-1 d-flex">
        <Card title="Today Sales" icon={<BsCash size={27}/>} value="$ 3042,08"/>
        <Card title="Monthly Sales" icon={<BsCash size={27}/>} value="$ 65.342,22"/>
        <Card title="Year Sales" icon={<BsCash size={27}/>} value="$ 23.643.762,75"/>
        <Card title="Monthly New Costumers" icon={<BsPeople size={27}/>} value="73"/>
        <Card title="Low Stock Products" icon={<BsCart2 size={27}/>} value="13"/>
      </div>
      <div className="containerTableBreakdown h-75 row m-1 mt-3 d-flex">
        <DashboardBarChart />
        <DashboardBreakdown />
      </div>
    </section>
  )
};

export default Dashboard;