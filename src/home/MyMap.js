import React, {Component} from "react";

import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import OSM from "ol/source/OSM";
import Menu from "./Menu/Menu.js";
import Placemark from "ol-ext/overlay/Placemark";

var raster = new TileLayer({
    source: new OSM(),
});

var source = new VectorSource({wrapX: false});

var vector = new VectorLayer({
    source: source,
});

var placemark = new Placemark({
    contentColor: '#000',
    autoPan: true,
    autoPanAnimation: { duration: 250 }
});

const xOffset = -9040000;
const yOffset = -505000;
const mapSize = 15000;

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
            overlays: [placemark]
        });
    }

    componentDidMount() {
        this.map.setTarget("map")
        this.map.on('click', function(e) {
            placemark.show(e.coordinate);
        })
    }

    render() {
        return (
            <div>
                <div id="map" className="map" style={{width: "90%", height: "560px"}}/>
                <br/>
                <Menu placemark={placemark}/>
            </div>
        );
    }
}

export default PublicMap;
