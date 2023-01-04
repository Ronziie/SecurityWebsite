import React from "react";
import { Routes, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";




import "./App.css";


function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/services" element={<Services/>} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
