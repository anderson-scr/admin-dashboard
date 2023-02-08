import React from "react";
import "./customersStyle.css";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import ElementContainer from "common/components/elementContainer/elementContainer";
import { Box } from "@mui/material";

const Customers = () => {
  const columns = [
    {field: "customer_id", headerName: "ID"},
    {field: "first_name", headerName: "Name", flex: 1, cellClassName: "nameColumnCell"},
    {field: "last_name", flex: 1, headerName: "Last Name"},
    {field: "register_date", flex: 1, headerName: "Register Date"},
    {field: "birth_date", flex: 1, headerName: "Birth Date"},
    {field: "email", flex: 1, headerName: "Email"},
    {field: "recive_news_email", headerName: "Recive Emails"}
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
          },
          "& .MuiDataGrid-row": {
            borderBottom: "1px solid #414141"
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: "var(--text-color)"
          }
        }}>
          <DataGrid 
            rows = {[]}
            columns = { columns }
            components = { {Toolbar: GridToolbar} }
          />
        </Box>
      </div>
    </ElementContainer>
  );
};

export default Customers;