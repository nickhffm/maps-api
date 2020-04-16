import React from "react";
import { GoogleApiWrapper, Map, Marker, Polygon } from "google-maps-react";

export class MapContainer extends React.Component {
  render() {
    const lat = 42.281151;
    const lng = -85.616224;
    const coords = [
      { lat: 42.271778, lng: -85.591431 },
      { lat: 42.271778, lng: -85.564651 },
      { lat: 42.297482, lng: -85.564651 },
      { lat: 42.297482, lng: -85.601044 },
      { lat: 42.306763, lng: -85.601044 },
      { lat: 42.306763, lng: -85.618124 },
      { lat: 42.298333, lng: -85.618124 },
      { lat: 42.298333, lng: -85.655117 },
      { lat: 42.271778, lng: -85.655117 },
      { lat: 42.271778, lng: -85.591431 },
    ];
    return (
      <Map
        google={this.props.google}
        zoom={13}
        initialCenter={{ lat, lng }}
        center={{ lat, lng }}
        onClick={this.onMapClicked}
      >
        <Marker />
        <Polygon
          paths={coords}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2}
        ></Polygon>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyATA98INHzaCou137hyhw4G1CM9dSjgLdw",
})(MapContainer);
