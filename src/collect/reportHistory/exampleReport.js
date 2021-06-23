import React, {Component} from "react";
import {Button, Typography} from "@material-ui/core";
import styles from "./exampleReport.module.css";
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

class SampleReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskAssigned: false,
        }
    }

    takeTask = () => {
        this.setState({
            taskAssigned: true,
        })
    }

    render() {
        return (
            <div className={styles.exampleReport}>
                <Typography variant="h6">
                    Trash reported at {this.props.reportedTime}
                </Typography>
                <ul>
                    <li>
                        Coordinate: {this.props.coordinate}.
                    </li>
                    <li>
                        Trash size: {this.props.size}.
                    </li>
                    <li>
                        Materials: {this.props.materials}.
                    </li>
                </ul>
                <div className={styles.button}>
                    {
                        (this.state.taskAssigned) ?
                            <strong style={{color: "green"}}>Task has been assigned to you!</strong> :
                            <Button variant="contained" color="primary" onClick={this.takeTask}><AssignmentTurnedInIcon/>
                                Take task
                            </Button>
                    }
                </div>

            </div>
        );
    }
}

export default SampleReport;