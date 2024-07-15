import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import customicon from "./placeholder.png";

let DefaultIcon = L.icon({
  iconUrl: customicon,
  iconSize: [40, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const CallByRegion = () => {
  const [center, setCenter] = useState([[46.808327, -100.783737]]);
  const [zoom, setZoom] = useState(4);

  return (
    <div>
      <Map center={center[0]} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {center.map((e, index) => (
          <Marker key={index} position={e}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}
      </Map>
    </div>
  );
};

export default CallByRegion;
