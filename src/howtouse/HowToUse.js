import {Component} from "react";
import styles from "../home/home.module.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";


class HowToUse extends Component {
    render() {
        return (
            <div className={styles.home}>
                <Header className={styles.header}/>
                <div className={styles.body}>
                    <h3>this is a how to use page</h3>
                </div>
                <Footer className={styles.footer}/>
            </div>
        )
    }
}

export default HowToUse