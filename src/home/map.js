import 'ol/ol.css';
import Feature from 'ol/Feature';
import Map from 'ol/Map';
import Point from 'ol/geom/Point';
import TileJSON from 'ol/source/TileJSON';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import {Icon, Style} from 'ol/style';
import {Modify} from 'ol/interaction';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';

const iconFeature = new Feature({
    geometry: new Point([0, 0]),
    name: 'Null Island',
    population: 4000,
    rainfall: 500,
});

const iconStyle = new Style({
    image: new Icon({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: 'data/icon.png',
    }),
});

iconFeature.setStyle(iconStyle);

const vectorSource = new VectorSource({
    features: [iconFeature],
});

const vectorLayer = new VectorLayer({
    source: vectorSource,
});

const rasterLayer = new TileLayer({
    source: new TileJSON({
        url: 'https://a.tiles.mapbox.com/v3/aj.1x1-degrees.json?secure=1',
        crossOrigin: '',
    }),
});

const target = document.getElementById('map');
const map = new Map({
    layers: [rasterLayer, vectorLayer],
    target: target,
    view: new View({
        center: [0, 0],
        zoom: 3,
    }),
});

const modify = new Modify({
    hitDetection: vectorLayer,
    source: vectorSource,
});
modify.on(['modifystart', 'modifyend'], function (evt) {
    target.style.cursor = evt.type === 'modifystart' ? 'grabbing' : 'pointer';
});
const overlaySource = modify.getOverlay().getSource();
overlaySource.on(['addfeature', 'removefeature'], function (evt) {
    target.style.cursor = evt.type === 'addfeature' ? 'pointer' : '';
});

map.addInteraction(modify);
