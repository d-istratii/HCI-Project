import React, {Component} from "react";
import styles from "../home/home.module.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Map from "./map/Map";
import Report from "./reportHistory/report";
import collectStyle from "./collect.module.css";

class Collect extends Component {
    render() {
        return (
            <div className={styles.home}>
                <Header className={styles.header}/>
                <h4 className={collectStyle.title}>Trash collecting site</h4>
                <Map/>
                <Report/>
                <Footer className={styles.footer}/>
            </div>
        )
    }
}

export default Collect