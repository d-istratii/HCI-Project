import React, {Component} from "react";

import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import OSM from "ol/source/OSM";
import Draw from "ol/interaction/Draw";
import Modify from "ol/interaction/Modify";

var raster = new TileLayer({
    source: new OSM(),
});

var source = new VectorSource({wrapX: false});

var vector = new VectorLayer({
    source: source,
});

const xOffset = -9040000;
const yOffset = -505000;
const mapSize = 15000;
var draw, typeSelect;

class PublicMap extends Component {
    constructor(props) {
        super(props);
        this.map = new Map({
            layers: [raster, vector],
            view: new View({
                extent: [xOffset-2*mapSize, yOffset -mapSize, xOffset+2*mapSize, yOffset +mapSize],
                minZoom: 1,
                zoom: 2,
                maxZoom: 20,
                center: [0, 0]
            }),
        });
    }

    componentDidMount() {
        this.map.setTarget("map")
        var modify = new Modify({source: source});
        this.map.addInteraction(modify);
        this.addInteractions()
    }

    addInteractions() {
        typeSelect = document.getElementById("type")
        draw = new Draw({
            source: source,
            type: typeSelect.value,
        });
        this.map.addInteraction(draw)
    }

    changeIcon() {
        this.map.removeInteraction(draw)
        this.addInteractions()
    }

    render() {
        return (
            <div>
                <div id="map" className="map" style={{width: "90%", height: "560px"}}/>
                <form className="form-inline">
                    <label htmlFor="type">Geometry type &nbsp;</label>
                    <select id="type" onChange={() => this.changeIcon()}>
                        <option value="Point">Point</option>
                        <option value="Polygon">Polygon</option>
                        <option value="Circle">Circle</option>
                    </select>
                </form>
            </div>
        );
    }
}

export default PublicMap;
