import React, {Component} from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import {Button, makeStyles} from '@material-ui/core';
import styles from "./home.module.css";
import MyMap from "./MyMap";
import SubmitButton from "./Buttons"

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

    refreshPage = () => {
        window.location.reload();
    }

    render() {
        return (
            <div className={styles.home}>
                <Header className={styles.header}/>
                <div className={styles.body}>
                    <MyMap/>
                    <SubmitButton clickHandler={this.toggleShow}>Report trash</SubmitButton>
                    {
                        (this.state.show) ? <h3>Trash location has been submitted!</h3> : null
                    }
                </div>
                <Footer className={styles.footer}/>
            </div>
        )
    }
}

export default Home
