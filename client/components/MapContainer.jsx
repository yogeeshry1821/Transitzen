import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 12.9716,
    lng: 77.5946,
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.MAPS_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={defaultCenter}
      />
    </LoadScript>
  );
};

export default MapContainer;
