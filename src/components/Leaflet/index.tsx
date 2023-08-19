import { TileLayer } from 'react-leaflet';
import { LeafletProps } from './interface';
import { MapContainerStyled, MarkerStyled, PopupStyled } from "./styled";

function Leaflet({ storages }: LeafletProps) {
  return (
    <MapContainerStyled center={[-27.5944418, -48.52081496678028]} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {storages.map((storage: any) => (
        <MarkerStyled key={storage.id} position={[storage.lat, storage.lon]}>
          <PopupStyled>
            <p>
              {storage.address.street} {storage.address.numberStreet},{" "}
              {storage.address.district}
            </p>
            <p>
              {storage.address.city}, {storage.address.uf} -{" "}
              {storage.address.zip}
            </p>
          </PopupStyled>
        </MarkerStyled>
      ))}
    </MapContainerStyled>
  );
}


export { Leaflet };