import React, {Component} from "react";
import styles from "./header.module.css"
import {withRouter} from 'react-router-dom'
import {Button} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import {Assignment} from "@material-ui/icons";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.headerButton}>
                <Button variant="contained" style={{color: "black", backgroundColor: "#FFDA7C", marginRight: "1vw"}}
                        onClick={() => this.props.history.push("/")}><HomeIcon/>Home</Button>
                <Button variant="contained" style={{color: "black", backgroundColor: "#FFDA7C"}}
                        onClick={() => this.props.history.push("/collect")}><Assignment/>Volunteer</Button>
            </div>
        )
    }
}

export default withRouter(Header);