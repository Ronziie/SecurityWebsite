import React from "react";
import PropTypes from "prop-types";
import {Row, Col } from 'react-bootstrap'
import SidebarMenu from './SidebarMenu'
// react plugin for creating charts
import ChartistGraph from "react-chartist";

import '../Main.css';
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";


// core components
import GridItem from "../DashAddOn/Grid/GridItem.jsx";
import GridContainer from "../DashAddOn/Grid/GridContainer.jsx";
import Table from "../DashAddOn/Table/Table.jsx";
import Tasks from "../DashAddOn/Tasks/Tasks.jsx";
import CustomTabs from "../DashAddOn/CustomTabs/CustomTabs.jsx";
import Danger from "../DashAddOn/Typography/Danger.jsx";
import Card from "../DashAddOn/Card/Card.jsx";
import CardHeader from "../DashAddOn/Card/CardHeader.jsx";
import CardIcon from "../DashAddOn/Card/CardIcon.jsx";
import CardBody from "../DashAddOn/Card/CardIcon.jsx";
import CardFooter from "../DashAddOn/Card/CardFooter.jsx";
import TaskList from "../DashAddOn/Tasks/TaskList";
//import Website from "../DashAddOn/Tasks/Website";
import Clients from "../DashAddOn/Tasks/Clients";
import "../material-dashboard-react.css";
import { motion } from 'framer-motion';

import { website  } from "../DashAddOn/general.jsx";

import {
    revenueStreamChart,
    incidentReportChart,
    turnoverRateChart
  } from "../DashAddOn/charts.jsx";

import dashboardStyle from "../DashAddOn/dashboardStyle.jsx"
class Dashboard extends React.Component {
    state = {
      value: 0
    };
    handleChange = (event, value) => {
      this.setState({ value });
    };
  
    handleChangeIndex = index => {
      this.setState({ value: index });
    };
    render() {
      const { classes } = this.props;

      return (
        <motion.div className="content-container" initial={{ width: 0 }} animate={{ width: "100%"}} exit={{ x: window.innerWidth, transition: { duration: 0.4}}}>
          <Row style={{  }}>
            <Col xs={2} sm={2} md={2} lg={1} xl={2} style={{ paddingLeft: 0, }}>
              <SidebarMenu style={{position: "fixed"}}/>
            </Col>
            <Col xs={10} sm={10} md={10}  lg={11} xl={10} style={{ paddingLeft: 0,  }}>
              <GridContainer>
                <GridItem xs={12} sm={6} md={3}>
                  <Card>
                    <CardHeader color="warning" stats icon>
                      <CardIcon color="warning">
                        <Icon>Database Capacity</Icon>
                      </CardIcon>
                      <p className={classes.cardCategory}>Used Space</p>
                      <h3 className={classes.cardTitle}>
                        12/50 <small>GB</small>
                      </h3>
                    </CardHeader>
                    <CardFooter stats>
                      <div className={classes.stats}>
                        <Danger>
                          <Warning />
                        </Danger>
                        <a href="https://azure.microsoft.com/en-us/products/databox/">
                          Get more space
                        </a>
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                  <Card>
                    <CardHeader color="success" stats icon>
                      <CardIcon color="success">
                        <Store />
                      </CardIcon>
                      <p className={classes.cardCategory}>Revenue</p>
                      <h3 className={classes.cardTitle}>£134,245</h3>
                    </CardHeader>
                    <CardFooter stats>
                      <div className={classes.stats}>
                        <DateRange />
                        Last 24 Hours
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                  <Card>
                    <CardHeader color="danger" stats icon>
                      <CardIcon color="danger">
                        <Icon>Security Issues</Icon>
                      </CardIcon>
                      <p className={classes.cardCategory}>Fixed Issues</p>
                      <h3 className={classes.cardTitle}>22</h3>
                    </CardHeader>
                    <CardFooter stats>
                      <div className={classes.stats}>
                        <LocalOffer />
                        Tracked from CisSecurity
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                  <Card>
                    <CardHeader color="info" stats icon>
                      <CardIcon color="info">
                        <Accessibility />
                      </CardIcon>
                      <p className={classes.cardCategory}>Website Attraction</p>
                      <h3 className={classes.cardTitle}>+122</h3>
                    </CardHeader>
                    <CardFooter stats>
                      <div className={classes.stats}>
                        <Update />
                        Just Updated 24 Hours ago
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Card chart>
                    <CardHeader color="success">
                      <ChartistGraph
                        className="ct-chart"
                        data={revenueStreamChart.data}
                        type="Line"
                        options={revenueStreamChart.options}
                        listener={revenueStreamChart.animation}
                      />
                    </CardHeader>
                    <CardBody>
                      <h4 className={classes.cardTitle}>Revenue Stream</h4>
                      <p className={classes.cardCategory}>
                        <span className={classes.successText}>
                          <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                        </span>{" "}
                        Within the last 24 months
                      </p>
                    </CardBody>
                    <CardFooter chart>
                      <div className={classes.stats}>
                        <AccessTime /> updated 1 day ago
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Card chart>
                    <CardHeader color="warning">
                      <ChartistGraph className="ct-chart"
                        data={incidentReportChart.data}
                        options={incidentReportChart.options}
                        responsiveOptions={incidentReportChart.responsiveOptions}
                        animation={incidentReportChart.animation}
                        type={"Bar"}
                      />
                    </CardHeader>
                    <CardBody>
                      <h4 className={classes.cardTitle}>Incident Reports</h4>
                      <p className={classes.cardCategory}>
                        Nationwide Incidents
                      </p>
                    </CardBody>
                    <CardFooter chart>
                      <div className={classes.stats}>
                        <AccessTime /> last updated 2 minutes ago
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Card chart>
                    <CardHeader color="danger">
                      <ChartistGraph
                        className="ct-chart"
                        data={turnoverRateChart.data}
                        type="Line"
                        options={turnoverRateChart.options}
                        listener={turnoverRateChart.animation}
                      />
                    </CardHeader>
                    <CardBody>
                      <h4 className={classes.cardTitle}>Turnover Rate</h4>
                      <p className={classes.cardCategory}>
                            Last 12 Months
                      </p>
                    </CardBody>
                    <CardFooter chart>
                      <div className={classes.stats}>
                        <AccessTime /> last updated 2 weeks ago
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomTabs
                    title="Tasks:"
                    headerColor="primary"
                    tabs={[
                      {
                        tabName: "Todo",
                        tabIcon: BugReport,
                        tabContent: (
                          <TaskList />
                        )
                      },
                      {
                        tabName: "Website",
                        tabIcon: Code,
                        tabContent: (
                          <Tasks
                            checkedIndexes={[0]}
                            tasksIndexes={[0, 1]}
                            tasks={website}
                          />
                        )
                      },
                      {
                        tabName: "Clients",
                        tabIcon: Cloud,
                        tabContent: (
                          <Clients />
                        )
                      }
                    ]}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Card>
                    <CardHeader color="warning">
                      <h4 className={classes.cardTitleWhite}>Employee Statisitics</h4>
                      <p className={classes.cardCategoryWhite}>
                        16 January
                      </p>
                    </CardHeader>
                    <CardBody>
                      <Table
                        tableHeaderColor="warning"
                        tableHead={["ID", "Name", "Salary", "Country"]}
                        tableData={[
                          ["1", "Dakota Rice", "£36,738", "United Kingdom, London"],
                          ["2", "Minerva Hooper", "£23,789", "United Kingdom, Manchester"],
                          ["3", "Sage Rodriguez", "£56,142", "United Kingdom, Leicester"],
                          ["4", "Philip Chaney", "£38,735", "United Kingdom, Kent"]
                        ]}
                      />
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </Col>
        </Row>
          

        </motion.div>
      );
    }
  }
  
  Dashboard.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
  export default withStyles(dashboardStyle)(Dashboard);