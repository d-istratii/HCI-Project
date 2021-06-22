import React, {Component} from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import {Button} from '@material-ui/core';
import styles from "./home.module.css";
import MyMap from "./MyMap";
import RefreshIcon from '@material-ui/icons/Refresh';
import PublishIcon from '@material-ui/icons/Publish';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    toggleShow = () => {
        this.setState(() => {
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
                    <h4 className={styles.title}>
                        Trash reporting site
                    </h4>
                    <MyMap/>
                    <div className={styles.buttons}>
                        <Button variant="contained"
                                style={{color: "white", backgroundColor: "#AC0ED6", marginRight: "1vw"}}
                                onClick={this.refreshPage}><RefreshIcon/>Reset</Button>
                        <Button variant="contained"
                                style={{color: "white", background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"}}
                                onClick={this.toggleShow}><PublishIcon/>Report trash</Button>{
                        (this.state.show) ? <h4>Location has been reported!</h4> : null
                    }
                    </div>
                </div>
                <Footer className={styles.footer}/>
            </div>
        )
    }
}

export default Home
