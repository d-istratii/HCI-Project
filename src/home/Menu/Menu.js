import React, {Component} from "react";

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <select id="type" onChange={() => this.props.eventHandler()}>
                <option value="Point">Point</option>
                <option value="Polygon">Polygon</option>
                <option value="Circle">Circle</option>
            </select>
        );
    }
}

export default Menu;