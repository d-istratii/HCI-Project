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
import {styles} from "./icons";
import Draw from 'ol/interaction/Draw';
import mapStyle from "./map.module.css";

const count = 40;
const features = new Array(count);
const e = 10000;
const xOffset = -9040000;
const yOffset = -505000;
const mapSize = 15000;

for (let i = 0; i < count; ++i) {
    const coordinates = [2 * e * Math.random() - e + xOffset, 2 * e * Math.random() - e + yOffset];
    features[i] = new Feature(new Point(coordinates));
    features[i].setStyle(styles['stacked']);
}

var raster = new TileLayer({
    source: new OSM(),
});

const source = new VectorSource({
    features: features,
});

const vectorLayer = new VectorLayer({
    source: source,
});

const sourceDrawing = new VectorSource({wrapX: false});

const vectorDrawing = new VectorLayer({
    source: sourceDrawing,
});

var draw;

class TrashMap extends Component {
    constructor(props) {
        super(props);
        this.map = new Map({
            layers: [raster, vectorLayer, vectorDrawing],
            view: new View({
                extent: [xOffset - 2 * mapSize, yOffset - mapSize, xOffset + 2 * mapSize, yOffset + mapSize],
                minZoom: 1,
                zoom: 10,
                maxZoom: 20,
                center: [0, 0]
            }),
        });
    }

    componentDidMount() {
        this.map.setTarget("map")
        draw = new Draw({
            source: source,
            type: 'Circle'
        })
        this.map.addInteraction(draw);
    }

    render() {
        return (
            <div>
                <div id="map" className={mapStyle.map}/>
            </div>
        );
    }
}

export default TrashMap;