import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from 'react-redux';
import CartSlice  from "./Redux/CartSlice";

const theme = createTheme({
  palette: {
    primary: {
      main: "#146C94",
    },
    secondary: {
      main: "#146C94",
    },
    info: {
      main: "#FFFFFF",
    },
  },
});

const store = configureStore({
  reducer:{
    CartSlice:CartSlice
  },
})



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>
    <Provider store={store}>
    <Router>
      <App />
    </Router>
    </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
