import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Admin from "./Admin";
import Profile from "./DashboardComp/Profile";
import Maps from "./DashboardComp/Maps";
import Notifications from "./DashboardComp/Notifications";
import Support from "./DashboardComp/Support";
import Analytics from "./DashboardComp/Analytics";
import "../App.css";

import {AnimatePresence} from 'framer-motion'




function AnimationRoutes() {
    const location = useLocation();
  return (
    <React.Fragment>
    <AnimatePresence>
        <CssBaseline />
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/services" element={<Services/>} />
                <Route exact path="/portfolio" element={<Portfolio />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/dashboard" element={<Dashboard />} />

                <Route exact path="/admin" element={<Admin />} />
                <Route exact path="/admin/profile" element={<Profile />} />
                <Route exact path="/admin/maps" element={<Maps />} />
                <Route exact path="/admin/notifications" element={<Notifications />} />
                <Route exact path="/admin/support" element={<Support />} />
                <Route exact path="/admin/analytics" element={<Analytics />} />
            </Routes>
    </AnimatePresence>

    </React.Fragment>
  );
}

export default AnimationRoutes;
