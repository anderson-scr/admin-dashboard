import ReactDOM from "react-dom/client";
import React from "react";
import App from "./app";
import "./theme/blueTheme.css";
import "./theme/lightTheme.css";
import "./theme/darkTheme.css";
import "./index.css";

// Redux
import configureStore from "redux/configureStore";
import { Provider } from "react-redux";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Provider store={ configureStore }>
      <App />
    </Provider>
  // </React.StrictMode>
);