import React, {Component} from "react";
import {Button, ButtonGroup} from "@material-ui/core";
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import InfoIcon from '@material-ui/icons/Info';
import styles from "./footer.module.css";

class Footer extends Component {
    render() {
        return (
            <div className={styles.footerButton}>
                <ButtonGroup>
                    <Button variant="contained" style={{color: "black", backgroundColor: "#FFDA7C", marginRight: "1vw"}}><InfoIcon/>About</Button>
                    <Button variant="contained" style={{color: "black", backgroundColor: "#FFDA7C"}}><LiveHelpIcon/>FAQ</Button>
                </ButtonGroup>
            </div>
        )
    }
}

export default Footer