import React, {Component} from "react";
import styles from "./menu.module.css";
import {List, ListItem, Button, ButtonGroup} from "@material-ui/core";

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label>Options</label>
                <List component="nav">
                    <ListItem>
                        <label>Trash size</label>
                        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                            <Button onClick={() => {
                                this.props.placemark.setClassName('');
                                this.props.placemark.setColor('#f00');
                            }}>Small</Button>
                            <Button onClick={() => {
                                this.props.placemark.setClassName('shield');
                                this.props.placemark.setColor('#00f');
                            }}>Large</Button>
                        </ButtonGroup>
                    </ListItem>
                </List>
            </div>
        );
    }
}

export default Menu;