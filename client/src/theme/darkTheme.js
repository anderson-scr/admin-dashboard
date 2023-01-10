import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#11caf5",
    },
    secondary: {
      main: "#ffd000",
    },
    background: {
      default: "#060d2f",
      paper: "#062548",
    },
    text: {
      primary: "#f8f9fa",
    }
  }
});