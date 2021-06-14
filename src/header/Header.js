import {Component} from "react";
import styles from "./header.module.css"
import {withRouter} from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button className={styles.headerButton} onClick={() => this.props.history.push("/")}> Home </button>
                <button className={styles.headerButton} onClick={() => this.props.history.push("/howtouse")}> How to use </button>
            </div>
        )
    }
}

export default withRouter(Header);