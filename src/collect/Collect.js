import React, {Component} from "react";
import styles from "../home/home.module.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Map from "./map/Map";
import Report from "./reportHistory/report";
import mapStyles from "./collect.module.css";

class Collect extends Component {
    render() {
        return (
            <div className={styles.home}>
                <Header className={styles.header}/>
                <h4>Trash collecting site</h4>
                <Map className={mapStyles.map}/>
                <Report/>
                <Footer className={styles.footer}/>
            </div>
        )
    }
}

export default Collect