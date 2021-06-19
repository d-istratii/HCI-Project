import React, {Component} from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from "./home.module.css"
import {Button} from '@material-ui/core';
import MyMap from "./MyMap";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    toggleShow = () => {
        this.setState((prevState) => {
            return ({
                show: true
            })
        })
    }

    render() {
        return (
            <div className={styles.home}>
                <Header className={styles.header}/>
                <div className={styles.body}>
                    <MyMap/>
                    <Button variant="contained" color="secondary">Reset</Button>
                    <br/>
                    <Button variant="contained" color="primary" onClick={this.toggleShow}>Report trash</Button>
                    {
                        (this.state.show) ? <h2>Trash location has been submitted!</h2> : null
                    }
                </div>
                <Footer className={styles.footer}/>
            </div>
        )
    }
}

export default Home
