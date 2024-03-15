import React, { useState, useCallback } from "react";
import "./GoogleMapMarker.css";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
const containerStyle = {
  width: "500px",
  height: "500px",
};

const center = {
  lat: 11.107958082273775,
  lng: 77.17685222625734,
};

const points = [
  {
    lat: 11.107958082273775,
    lng: 77.17685222625734,
  },
  {
    lat: 11.088448049090545,
    lng: 77.18479088672565,
  },
  {
    lat: 11.082043114781674,
    lng: 77.21053670218977,
  },
];
const GoogleMapMarker = () => {
  const [map, setMap] = useState(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "",
  });

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    bounds.extend(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="GoogleMapMarker" data-testid="GoogleMapMarker">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{ streetView: false, mapTypeControl: false }}
      >
        {points.map((point, i) => (
          <MarkerF position={point}></MarkerF>
        ))}
        {/* <MarkerF position={center}></MarkerF> Single pointer  */}
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

GoogleMapMarker.propTypes = {};

GoogleMapMarker.defaultProps = {};

export default GoogleMapMarker;
