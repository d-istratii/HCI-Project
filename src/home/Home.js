import {Component} from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from "./home.module.css"

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
                    <h3>this is a home page {this.state.count}</h3>
                    <button onClick={this.toggleShow}>Report trash</button>
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
