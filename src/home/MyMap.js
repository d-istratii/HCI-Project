import React, {Component} from "react";
import 'ol/ol.css';
import Feature from 'ol/Feature';
import Map from 'ol/Map';
import Point from 'ol/geom/Point';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import {Style} from 'ol/style';
import {Vector as VectorLayer} from 'ol/layer';
import $ from 'jquery';
import SourceOSM from "ol/source/OSM";
import LayerTile from "ol/layer/Tile";


import {Fill, RegularShape, Stroke} from 'ol/style';
var stroke = new Stroke({color: 'black', width: 2});
var fill = new Fill({color: 'red'});
var styles = {
    'square': new Style({
        image: new RegularShape({
            fill: fill,
            stroke: stroke,
            points: 4,
            radius: 10,
            angle: Math.PI / 4,
        }),
    }),
    'rectangle': new Style({
        image: new RegularShape({
            fill: fill,
            stroke: stroke,
            radius: 10 / Math.SQRT2,
            radius2: 10,
            points: 4,
            angle: 0,
            scale: [1, 0.5],
        }),
    }),
    'triangle': new Style({
        image: new RegularShape({
            fill: fill,
            stroke: stroke,
            points: 3,
            radius: 10,
            rotation: Math.PI / 4,
            angle: 0,
        }),
    }),
    'star': new Style({
        image: new RegularShape({
            fill: fill,
            stroke: stroke,
            points: 5,
            radius: 10,
            radius2: 4,
            angle: 0,
        }),
    }),
    'cross': new Style({
        image: new RegularShape({
            fill: fill,
            stroke: stroke,
            points: 4,
            radius: 10,
            radius2: 0,
            angle: 0,
        }),
    }),
    'x': new Style({
        image: new RegularShape({
            fill: fill,
            stroke: stroke,
            points: 4,
            radius: 10,
            radius2: 0,
            angle: Math.PI / 4,
        }),
    }),
    'stacked': [
        new Style({
            image: new RegularShape({
                fill: fill,
                stroke: stroke,
                points: 4,
                radius: 5,
                angle: Math.PI / 4,
                displacement: [0, 10],
            }),
        }),
        new Style({
            image: new RegularShape({
                fill: fill,
                stroke: stroke,
                points: 4,
                radius: 10,
                angle: Math.PI / 4,
            }),
        })],
};
var styleKeys = [
    'x',
    'cross',
    'star',
    'triangle',
    'square',
    'rectangle',
    'stacked'];
var count = 50;
var features = new Array(count);
var e = 50000;
const xOffset = - 8900000;

for (var i = 0; i < count; ++i) {
    var coordinates = [2 * e * Math.random() - e + xOffset, 2 * e * Math.random() - e];
    features[i] = new Feature(new Point(coordinates));
    features[i].setStyle(
        styles[styleKeys[Math.floor(Math.random() * styleKeys.length)]]
    );
}

var source = new VectorSource({
    features: features,
});

var vectorLayer = new VectorLayer({
    source: source,
});

class PublicMap extends Component {
    constructor(props) {
        super(props);
        this.state = {center: [0, 0], zoom: 1};
        this.map = new Map({
            layers: [new LayerTile({source: new SourceOSM()}), vectorLayer],
            target: document.getElementById('map'),
            view: new View({
                center: [0, 0],
                zoom: 1,

            }),
        });
    }

    updateMap() {
        this.map.getView().setCenter(this.state.center);
        this.map.getView().setZoom(this.state.zoom);
    }

    componentDidMount() {
        this.map.setTarget("map");
        // Listen to map changes
        this.map.on("moveend", () => {
            let center = this.map.getView().getCenter();
            let zoom = this.map.getView().getZoom();
            this.setState({center, zoom});
        });
    }

    userAction() {
        this.setState({center: [546000, 6868000], zoom: 5});
    }

    render() {
        this.updateMap(); // Update map on render?
        return (
            <div id="map" className="map" style={{width: "90%", height: "560px"}}>
                <div id="popup"></div>
            </div>
        );
    }
}

export default PublicMap;
