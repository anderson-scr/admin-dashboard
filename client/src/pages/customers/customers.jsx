import React from "react";
import "./customersStyle.css";
import { mockDataCustomers } from "api/mock/mockDataCustomers";
import { DataGrid } from "@mui/x-data-grid";
import ElementContainer from "common/components/elementContainer/elementContainer";
import { Box } from "@mui/material";

const Customers = () => {
  const columns = [
    {field: "id", headerName: "ID"},
    {field: "first_name", headerName: "Name", flex: 1, cellClassName: "nameColumnCell"},
    {field: "last_name", flex: 1, headerName: "Last Name"},
    {field: "email", flex: 1, headerName: "Email"}
  ];

  return (
    <ElementContainer >
      <div className="p-3 h-100">
        <Box height="100%" sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            color: "var(--text-color)"
          },
          "& .MuiDataGrid-cell": {
            border: "none"
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "var(--main)",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px"
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: "var(--main)",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px"
          },
          "& .MuiTablePagination-root": {
            color: "var(--text-color)" 
          },
          "& .MuiTablePagination-selectLabel": {
            margin: "0 !important"
          },
          "& .MuiTablePagination-displayedRows": {
            margin: "0 !important"
          }
        }}>
          <DataGrid 
            rows={mockDataCustomers}
            columns={columns}
          />
        </Box>
      </div>
    </ElementContainer>
  );
};

export default Customers;