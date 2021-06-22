import React, {Component} from "react";
import {Typography} from "@material-ui/core";
import SampleReport from "./exampleReport";
import styles from "./report.module.css";

class Report extends Component {
    render() {
        return (
            <div className={styles.report}>
                <Typography variant="h5">Reports</Typography>
                <SampleReport reportedTime="12:53PM" coordinate="9991200.00, 3225000.00" materials="plastic"/>
                <SampleReport reportedTime="1:30PM" coordinate="23957200.00, 12405002.00" materials="wood, other"/>
            </div>
        );
    }
}

export default Report;