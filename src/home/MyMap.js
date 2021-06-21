import React, {Component} from "react";
import 'ol/ol.css';
import Feature from 'ol/Feature';
import Map from 'ol/Map';
import Point from 'ol/geom/Point';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import {Vector as VectorLayer} from 'ol/layer';
import OSM from 'ol/source/OSM';
import TileLayer from "ol/layer/Tile";
import {styleKeys, styles} from "./icons";
import Draw from 'ol/interaction/Draw';

const count = 40;
const features = new Array(count);
const e = 10000;
const xOffset = -9040000;
const yOffset = -505000;
const mapSize = 15000;

for (let i = 0; i < count; ++i) {
    const coordinates = [2 * e * Math.random() - e + xOffset, 2 * e * Math.random() - e + yOffset];
    features[i] = new Feature(new Point(coordinates));
    features[i].setStyle(
        styles[styleKeys[Math.floor(Math.random() * styleKeys.length)]]
    );
}

const source = new VectorSource({
    features: features,
});

const vectorLayer = new VectorLayer({
    source: source,
});

let mapLoaded = false;

const sourceDrawing = new VectorSource({wrapX: false});

const vectorDrawing = new VectorLayer({
    source: sourceDrawing,
});

let draw; // global so we can remove it later
draw = new Draw({
    source: sourceDrawing,
    type: "LineString",
    freehand: true,
});

class PublicMap extends Component {
    constructor(props) {
        super(props);
        this.state = {center: [0, 0], zoom: 1};
        this.map = new Map({
            layers:
                [
                    new TileLayer({source: new OSM(),}),
                    vectorLayer,
                    vectorDrawing,
                ],
            target: document.getElementById('map'),
            view: new View({
                extent: [xOffset - 2 * mapSize, yOffset - mapSize, xOffset + 2 * mapSize, yOffset + mapSize],
                minZoom: 1,
                zoom: 2,
                maxZoom: 20,
            }),
        });
        this.map.addInteraction(draw);          // Starts drawing mode
        //this.map.removeInteraction(draw)      // Stops drawing mode
    }

    updateMap() {
        if (this.state.center[0] !== 0 && !mapLoaded) {
            this.map.getView().setCenter(this.state.center);
            this.map.getView().setZoom(this.state.zoom);
            mapLoaded = true;
        }
    }

    componentDidMount() {
        this.map.setTarget("map");
        this.setState({center: [xOffset, yOffset], zoom: 9});
    }

    render() {
        this.updateMap(); // Update map on render?
        return (
            <div id="map" className="map" style={{width: "90%", height: "560px"}}></div>
        );
    }
}

export default PublicMap;
