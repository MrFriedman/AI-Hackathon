import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

interface AccidentLocation {
  accident: [number, number]; // [lng, lat]
}

export default function AccidentMap() {
  const [location, setLocation] = useState<AccidentLocation | null>(null);

  useEffect(() => {
    fetch("/api/accident-location")
      .then((res) => res.json())
      .then((data) => setLocation(data))
      .catch((err) => console.error("Error fetching accident location", err));
  }, []);

  return (
    <MapContainer center={location?.accident.reverse() || [0, 0]} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {location && (
        <Marker position={location.accident.reverse()}>
          <Popup>Accident Location</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}