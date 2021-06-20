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
                    <h4>
                        Trash collecting site
                    </h4>
                </div>
                <Footer className={styles.footer}/>
            </div>
        )
    }
}

export default HowToUse