import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import AddAdmins from "./Components/Admins/AddAdmins";
import ViewAdmins from "./Components/Admins/ViewAdmins";
import VerifyAgents from "./Components/Agents/VerifyAgents";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Add-Admins" element={<AddAdmins />} />
        <Route path="/View-Admins" element={<ViewAdmins />} />
        <Route path="/verifyAgents" element={<VerifyAgents />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
