import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Polyline,
  Popup,
  useMap,
  Marker,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const GoogleMapPolyline = () => {
  const redDotIcon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
    iconSize: [12, 12], // Adjust the size as needed
    iconAnchor: [6, 12],
    popupAnchor: [0, -10],
    tooltipAnchor: [8, -8],
  });

  const coordinates = [
    [7.876, 72.884],
    [4.876, 71.884],
    [3.876, 70.884],
    [1.876, 69.884],
    [-8.876, 68.884],
    [-7.876, 67.884],
    [-10.0, 75.0],
  ];

  const CenterAndZoomSetter = ({ coordinates }) => {
    const map = useMap();

    useEffect(() => {
      const center = calculateCenter(coordinates);
      const zoomLevel = calculateZoomLevel(
        coordinates,
        map.getSize().x,
        map.getSize().y
      );

      map.setView(center, zoomLevel);
    }, [map, coordinates]);

    return null;
  };

  useEffect(() => {
    // Find and hide the attribution control
    const attributionControl = document.querySelector(
      ".leaflet-control-attribution"
    );
    if (attributionControl) {
      attributionControl.style.display = "none";
    }
  }, []);

  const calculateCenter = (coords) => {
    const bounds = coords.map((coord) => [coord[0], coord[1]]);
    const sumLat = bounds.reduce((sum, coord) => sum + coord[0], 0);
    const sumLng = bounds.reduce((sum, coord) => sum + coord[1], 0);
    const centerLat = sumLat / bounds.length;
    const centerLng = sumLng / bounds.length;
    return [centerLat, centerLng];
  };

  const calculateZoomLevel = (coords) => {
    const WORLD_DIM = { height: 256, width: 256 };
    const ZOOM_MAX = 21;

    const latLngBounds = L.latLngBounds(coords);
    const ne = latLngBounds.getNorthEast();
    const sw = latLngBounds.getSouthWest();

    const scaleX = (ne.lng - sw.lng) / WORLD_DIM.width;
    const scaleY = (ne.lat - sw.lat) / WORLD_DIM.height;

    const scale = Math.max(scaleX, scaleY);

    const zoom = Math.floor(Math.log2(1 / scale)) + 1;

    return Math.min(zoom, ZOOM_MAX);
  };
  const tripStartIcon = new L.DivIcon({
    className: "custom-icon",
    html: "Trip Start",
    iconSize: [60, 20],
  });

  const tripEndIcon = new L.DivIcon({
    className: "custom-icon",
    html: "Trip End",
    iconSize: [60, 20],
  });
  return (
    <MapContainer
      center={[0, 0]} // Initial center
      zoom={10} // Initial zoom level
      style={{ width: "100%", height: "400px" }}
      //   scrollWheelZoom={false}
    >
      <CenterAndZoomSetter coordinates={coordinates} />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Polyline positions={coordinates} color="blue">
        <Popup>Just random coordinates</Popup>
      </Polyline>
      {/* {coordinates.map((coord, index) => (
        <Marker key={index} position={coord} icon={redDotIcon}>
          <Popup>
            Coordinate: {coord[0]}, {coord[1]}
          </Popup>
        </Marker>
      ))} */}
      <Marker position={coordinates[0]} icon={tripStartIcon}>
        <Popup>Trip Start</Popup>
      </Marker>
      <Marker position={coordinates[coordinates.length - 1]} icon={tripEndIcon}>
        <Popup>Trip End</Popup>
      </Marker>
    </MapContainer>
  );
};

export default GoogleMapPolyline;
