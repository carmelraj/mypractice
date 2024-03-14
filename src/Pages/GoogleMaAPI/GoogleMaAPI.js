import React, { useState } from "react";
import PropTypes from "prop-types";
import "./GoogleMaAPI.css";
import SearchGoogleMaps from "../../Components/Map/SearchGoogleMap";
const GoogleMaApi = () => {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 28.7041,
    lng: 77.1025,
  });
  return (
    <div className="GoogleMaAPI" data-testid="GoogleMaApi">
      <SearchGoogleMaps setSelectedLocation={setSelectedLocation} />
    </div>
  );
};

GoogleMaApi.propTypes = {};

GoogleMaApi.defaultProps = {};

export default GoogleMaApi;
