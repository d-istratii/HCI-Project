import React, {Component} from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from "./home.module.css"
import {Button} from '@material-ui/core';


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
                show: !prevState.show
            })
        })
    }
    render() {
        return (
            <div className={styles.home}>
                <Header className={styles.header}/>
                <div className={styles.body}>
                    <h3>This is a home page {this.state.count}</h3>
                    <h2>My Map</h2>
                    <div id="map" className="map"></div>

                    <br></br>
                    <Button variant="contained" color="primary" onClick={this.toggleShow}>Report trash</Button>
                    {
                        (this.state.show) ? <h2>this is a component</h2> : null
                    }
                </div>
                <Footer className={styles.footer}/>
            </div>

        )
    }
}

export default Home
