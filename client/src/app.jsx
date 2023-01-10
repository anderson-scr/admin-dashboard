import { CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from "theme/themeSettings";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./app.css";

// Components
import LoginIndex from "pages/login/loginIndex";

function App() {
  const { mode } = useSelector(state => state.theme);
  const theme = useMemo(() => themeSettings(mode), [mode]);

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={ theme } >
          <CssBaseline />
          <Routes>
            <Route path="/" element={ <Navigate replace to="Login" /> }/>
            <Route path="/Login" element={ <LoginIndex /> }/>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;