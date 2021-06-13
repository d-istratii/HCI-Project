import {Component} from "react";
import styles from "./footer.module.css";

class Footer extends Component {
    render() {
        return (
            <div>
                <button className={styles.footerButton}> About </button>
                <button className={styles.footerButton}> Contact </button>
                <button className={styles.footerButton}> FAQ </button>
            </div>
        )
    }
}

export default Footer