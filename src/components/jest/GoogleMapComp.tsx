import { GoogleMap, LoadScript } from '@react-google-maps/api';

const GoogleMapComp = ({ center } : TypeGoogleMapComp) => {
  return (
    <LoadScript id="script-loader" googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap id="example-map" center={center} />
    </LoadScript>
  );
}

export default GoogleMapComp;

export type TypeGoogleMapComp = {
  center?: {
    lat: number;
    lng: number;
  };
}
