import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";



const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "White",
  },
  subtitle: {
    color: "#FFFDD0",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
    position: 'relative',
    zIndex: -1,
    marginTop: "200px",
    },
    [theme.breakpoints.up('sm')]: {
    position: 'relative',
    zIndex: -1,
    marginTop: "300px",
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div >
      <Navbar />
        <Box className={classes.typedContainer}>
        <Typography className={classes.title} variant="h4">
          <Typed strings={["Company Name"]} typeSpeed={40} />
        </Typography>

        <Typography className={classes.subtitle} variant="h5">
          <Typed
            strings={[
              "Company Motto",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </Typography>
      </Box>
    </div>

  );
};

export default Header;
