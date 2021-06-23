import React, {Component} from "react";
import styles from "./menu.module.css";
import {
    Button,
    ButtonGroup,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Typography
} from "@material-ui/core";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trashSmall: true,
            plastic: false,
            wood: false,
            other: true,
        }
    }

    changeTrashSize = (isSmall) => {
        this.setState({
            trashSmall: isSmall
        })
    }

    togglePlastic = () => {
        this.setState((state) => ({
            plastic: !state.plastic
        }));
    }

    toggleWood = () => {
        this.setState((state) => ({
            wood: !state.wood
        }));
    }

    toggleOther = () => {
        this.setState((state) => ({
            other: !state.other
        }));
    }

    render() {
        return (
            <div>
                <h6 className={styles.instruction}>
                    Select the location of the trash on the map and then select trash size and materials.
                </h6>
                <div className={styles.menu}>
                    <Typography variant="h5">
                        Menu
                    </Typography>
                    <div className={styles.trashSize}>
                        <FormLabel>Trash size</FormLabel>
                        <br/>
                        <ButtonGroup variant="contained" aria-label="contained primary button group">
                            <Button color="primary" onClick={() => {
                                this.props.placemark.setClassName('');
                                this.props.placemark.setColor('#00f');
                                this.changeTrashSize(true);
                            }}>Small</Button>
                            <Button color="secondary" onClick={() => {
                                this.props.placemark.setClassName('shield');
                                this.props.placemark.setColor('#f00');
                                this.changeTrashSize(false);
                            }}>Large</Button>
                        </ButtonGroup>
                    </div>
                    <div className={styles.material}>
                        <FormControl>
                            <FormLabel>Materials</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox onChange={this.togglePlastic}/>}
                                    label="Plastic"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={this.toggleWood}/>}
                                    label="Wood"
                                />
                                <FormControlLabel
                                    control={<Checkbox defaultChecked onChange={this.toggleOther}/>}
                                    label="Other"
                                />
                            </FormGroup>
                        </FormControl>
                    </div>
                </div>
                <div className={styles.summary}>
                    <Typography variant="h5">
                        Summary
                    </Typography>
                    <ul>
                        <li>
                            Trash size: {this.state.trashSmall ? "Small" : "Large"}.
                        </li>
                        <li>
                            Material:
                            <ul>
                                <li>
                                    Plastic: {this.state.plastic ? "Yes" : "No"}.
                                </li>
                                <li>
                                    Wood: {this.state.wood ? "Yes" : "No"}.
                                </li>
                                <li>
                                    Other: {this.state.other ? "Yes" : "No"}.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Menu;