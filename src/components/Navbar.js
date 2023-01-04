import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";
//import BadgeIcon from '@material-ui/icons/BadgeIcon';
import { makeStyles } from "@material-ui/core/styles";
import { FaUserAlt } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa"

import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "#00000000",
    margin: 0,
  },
  arrow: {
    color: "White",
  },
  title: {
    color: "White",
  },
  menuSliderContainer: {
    width: 250,
    background: "#7ba0b6",
    height: "100%",
  },
  h1: {
    color: "white",
  },
  listItem: {
    color: "white",
  },
}));

const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  { listIcon: <FaShieldAlt />, listText: "Services", listPath: "/services" },
  { listIcon: <Apps />, listText: "About Us", listPath: "/portfolio" },
  { listIcon: <ContactMail />, listText: "Contact Us", listPath: "/contact" },
  { listIcon: <FaUserAlt />, listText: "Sign Up", listPath: "/signup" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <h1 style={{textAlign: "center", color: "white"}}>Logo</h1>
      <Divider />
      <List>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={classes.listItem}
            onClick={() => setOpen(false)}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <IconButton onClick={() => setOpen(true)}>
              <ArrowBack className={classes.arrow} />
            </IconButton>
            <Typography variant="h5" className={classes.title}>
              Company Name
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        {sideList()}
        <Footer />
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
