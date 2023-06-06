// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
// import {FormData} from "../src/Pages/Logi";
import React from "react";
import Registration from "./Pages/Login/Registration";

import Apper from "../src/Pages/Login/asb";
import Login from "./Pages/Login/login";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from "./Pages/main/home";


export default function App() {

  const finance = {
    marginLeft: "35%",
    marginTop: "2%",
    marginBottom: "2%",
  };

  return (
   

    <div>
      <h1 style={finance}>Finance tracker</h1>

      <Router>
        <Routes>
      
          <Route element={<Registration/>} path="/" exact />
          <Route element={<Login />} path="/reg" />
          <Route element={<Home />} path="/home" />
          
        </Routes>
      </Router>

    </div>
  );
}
