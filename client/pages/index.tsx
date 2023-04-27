import { useState } from "react";
import MapContainer from "../components/MapContainer";
import Destination from "../components/Destination";
type Marker = {
  lat: number;
  lng: number;
};

export default function Home() {
  const [markers, setMarkers] = useState<Marker[]>([]);
  const handleAddMarker = (marker: Marker) => {
    setMarkers((prevMarkers) => [...prevMarkers, marker]);
  };

  return (
    <div>
      <Destination/>
      <MapContainer markers={markers} onAddMarker={handleAddMarker} />
    </div>
  );
}