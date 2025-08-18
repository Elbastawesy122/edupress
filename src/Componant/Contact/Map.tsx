import type { FC } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

interface MyMapProps {
  lat: number;
  lng: number;
  zoom?: number;
  onSelect?: (coords: { lat: number; lng: number }) => void;
}

const LocationMarker: FC<{ onSelect?: (coords: { lat: number; lng: number }) => void }> = ({ onSelect }) => {
  const [position, setPosition] = useState<L.LatLng | null>(null);

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      if (onSelect) onSelect({ lat: e.latlng.lat, lng: e.latlng.lng });
    },
  });

  return position ? (
    <Marker position={position}>
      <Popup>
        📍 You selected this location <br /> {position.lat.toFixed(4)}, {position.lng.toFixed(4)}
      </Popup>
    </Marker>
  ) : null;
};

const MyMap: FC<MyMapProps> = ({ lat, lng, zoom = 13, onSelect }) => {
  return (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
      <MapContainer center={[lat, lng]} zoom={zoom} className="w-full h-full" scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker onSelect={onSelect} />
      </MapContainer>
    </div>
  );
};

export default MyMap;
