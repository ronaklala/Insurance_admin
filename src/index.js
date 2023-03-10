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
import VerifySingleAgent from "./Components/Agents/VerifySingleAgent";
import ViewUsers from "./Components/Users/ViewUsers";
import ViewAgents from "./Components/Agents/ViewAgents";
import Payments from "./Components/Payments";

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
        <Route path="/verify/agent/:id" element={<VerifySingleAgent />} />
        <Route path="/Payments" element={<Payments />} />
        <Route path="/ViewAgents" element={<ViewAgents />} />
        <Route path="/users" element={<ViewUsers />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
