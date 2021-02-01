import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const key =
  "pk.eyJ1IjoiaW1yYW5oMjEiLCJhIjoiY2trY2xpdmpxMGZydTJxcXNrNTBrdm5ybSJ9.S6KhfRpftPchrqb1C4c98w";
export default function Map({ data }) {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitute: data.lat,
    longitute: data.lon,
    zoom: 0
    
  });

  

  return (
    <div className="mapContainer">
      <ReactMapGL
        style={{ marginTop: "-80px", zIndex: "-1" }}
        {...viewport}
        mapStyle="mapbox://styles/imranh21/ckki2o4ty0h3t17phifue5of5"
        mapboxApiAccessToken={key}
        onViewportChange={setViewport}
      >
        
      </ReactMapGL>
    </div>
  );
}
