import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom'
import App from "./App";
import "./material-dashboard-react.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from "./serviceWorker";
import { ProSidebarProvider } from 'react-pro-sidebar';

ReactDOM.render(
<Router>
<ProSidebarProvider>
  <App />
</ProSidebarProvider>
</Router>, 
document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
