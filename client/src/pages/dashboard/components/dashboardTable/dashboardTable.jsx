import React from "react";
import "./dashboardTableStyle.css";
import ElementContainer from "common/components/elementContainer/elementContainer";

const DashboardBarChart = () => {
  return (
    <ElementContainer>
      <h4 className="mt-3" style={{color: "var(--main-light)", fontWeight: "600"}}>Sales per Payment Method</h4>
      Test BarChart
    </ElementContainer>
  )
}

export default DashboardBarChart;