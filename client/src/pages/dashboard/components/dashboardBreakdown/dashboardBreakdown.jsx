import React from "react";
import "./dashboardBreakdownStyle.css";
import ElementContainer from "common/components/elementContainer/elementContainer";
import PieChart from "common/components/pieChat/pieChat";

const DashboardBreakdown = () => {
  const data = [
    {
      "id": "Food",
      "label": "Food",
      "value": 3603.43,
      "color": "hsl(344, 70%, 50%)"
    },
    {
      "id": "Construction",
      "label": "Construction",
      "value": 1591.23,
      "color": "hsl(196, 70%, 50%)"
    },
    {
      "id": "Clothes",
      "label": "Clothes",
      "value": 3443.43,
      "color": "hsl(6, 70%, 50%)"
    },
    {
      "id": "Technology",
      "label": "Technology",
      "value": 5432.82,
      "color": "hsl(219, 70%, 50%)"
    },
    {
      "id": "Cleaning",
      "label": "Cleaning",
      "value": 2523.68,
      "color": "hsl(174, 70%, 50%)"
    }
  ]

  return (
    <ElementContainer colSize="5">
      <h4 className="mt-3" style={{color: "var(--main-light)", fontWeight: "600"}}>Sales per Category</h4>
      <div className="containerPieChatDashboard">
        <PieChart data={ data }/>
      </div>
    </ElementContainer>
  )
}

export default DashboardBreakdown;