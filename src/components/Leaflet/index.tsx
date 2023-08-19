import { TileLayer } from 'react-leaflet';
import { LeafletProps } from './interface';
import { MapContainerStyled, MarkerStyled, PopupStyled } from "./styled";

function Leaflet({ pharmacy }: LeafletProps) {
  return (
    <MapContainerStyled center={[-27.5944418, -48.52081496678028]} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {pharmacy.map((pharmacy: any) => (
        <MarkerStyled key={pharmacy.id} position={[pharmacy.geolocationLatitude, pharmacy.geolocationLongitude]}>
          <PopupStyled>
            <p>
              {pharmacy.street} {pharmacy.number},{" "}
              {pharmacy.city}
            </p>
            <p>
              {pharmacy.city}, {pharmacy.state} -{" "}
              {pharmacy.zipCode}
            </p>
          </PopupStyled>
        </MarkerStyled>
      ))}
    </MapContainerStyled>
  );
}


export { Leaflet };