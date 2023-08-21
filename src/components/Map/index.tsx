import { TileLayer } from 'react-leaflet';
import { MapProps } from './interface';
import { MapContainerStyled, MarkerStyled, PopupStyled } from "./styled";

function Map({ pharmacies }: MapProps) {
  return (
    <MapContainerStyled center={[-27.586785, -48.524593]} zoom={13}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {pharmacies.map((pharmacy: any, index: number) => (
        <MarkerStyled
          position={[pharmacy.geolocationLatitude, pharmacy.geolocationLongitude]}
          key={index}
        >
          <PopupStyled>
            <p>Corporate Name: {pharmacy.corporateName}
              Trade Name: {pharmacy.tradeName}
              CNPJ: {pharmacy.tradeName}
              E-mail: {pharmacy.companyEmail}
              Phone: {pharmacy.companyPhone}
              Cellphone: <a href={`https://wa.me/55${pharmacy.companyCellphone}`}>{pharmacy.companyCellphone}</a>
              Zip Code: {pharmacy.zipCode}
              Street: {pharmacy.street},
              Number: {pharmacy.number},
              Neighborhood: {pharmacy.neighborhood},
              City: {pharmacy.city},
              State: {pharmacy.state},
              Complement: {pharmacy.complement},
              GeolocationLatitude: {pharmacy.geolocationLatitude},
              GeolocationLongitude: {pharmacy.geolocationLongitude}
              {pharmacy.street} {pharmacy.number}, {pharmacy.city}
            </p>
          </PopupStyled>
        </MarkerStyled>
      ))}
    </MapContainerStyled>
  );
}

export { Map };