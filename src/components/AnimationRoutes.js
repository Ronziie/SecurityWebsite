import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./";
import Services from "./Services";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import "../App.css";

import {AnimatePresence} from 'framer-motion'



function AnimationRoutes() {
    const location = useLocation();
  return (
    <React.Fragment>
    <AnimatePresence>
        <CssBaseline />
        <Navbar />
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/services" element={<Services/>} />
                <Route exact path="/portfolio" element={<Portfolio />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/dashboard" element={<Dashboard />} />
            </Routes>
    </AnimatePresence>

    </React.Fragment>
  );
}

export default AnimationRoutes;
