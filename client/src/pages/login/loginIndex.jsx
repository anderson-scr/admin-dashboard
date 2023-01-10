import React from "react";
import { ReactComponent as Logo } from "assets/admin-logo.svg";
import Login from "./components/login/login";
import "./loginIndexStyle.css";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const LoginIndex = () => {
  return (
    <>
      <Logo />
      <Typography variant="h2" >U<span className="logoIN">.in</span> -Control</Typography>
      <Typography>We keep your system under control.</Typography>

      <Box className="containerLogin">
        <Login />
      </Box>
    </>
  )
  
}

export default LoginIndex;