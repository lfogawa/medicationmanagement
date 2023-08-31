import { TileLayer, Marker, Popup } from 'react-leaflet';
import { MapProps } from './interface';
import { MapContainerStyled, PopupDivContainerStyled, PopupDivStyled } from "./styled";
import markerIcon from "../../assets/svg/markerIcon.svg"
import { Icon } from 'leaflet';

function Map({ pharmacies }: MapProps) {
  const customIcon = new Icon({
    iconUrl: markerIcon,
    iconSize: [45, 45]
  });

  return (
    <MapContainerStyled center={[-15.720882, -50.412599]} zoom={4}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {pharmacies.map((pharmacy: any, index: number) => {
        const latitude = parseFloat(pharmacy.geolocationLatitude);
        const longitude = parseFloat(pharmacy.geolocationLongitude);

        if (isNaN(latitude) || isNaN(longitude)) {
          return null;
        }

        return (
        <Marker
          position={[latitude, longitude]}
          key={index}
          icon={customIcon}
        >
          <Popup>
            <PopupDivContainerStyled>
              <PopupDivStyled>
                {pharmacy.corporateName && (
                  <>
                    <h3>Corporate Name:</h3>
                    <p>{pharmacy.corporateName}</p>
                  </>
                )}
                {pharmacy.tradeName && (
                  <>
                    <h3>Trade Name:</h3>
                    <p>{pharmacy.tradeName}</p>
                  </>
                )}
                {pharmacy.cnpj && (
                  <>
                    <h3>Corporate Taxpayers Registry:</h3>
                    <p>{pharmacy.cnpj}</p>
                  </>
                )}
                {pharmacy.companyEmail && (
                  <>
                    <h3>E-mail:</h3>
                    <p>{pharmacy.companyEmail}</p>
                  </>
                )}
                {pharmacy.companyPhone && (
                  <>
                    <h3>Phone:</h3>
                    <p>{pharmacy.companyPhone}</p>
                  </>
                )}
                {pharmacy.companyCellphone && (
                  <>
                    <h3>Cellphone:</h3>
                    <p><a href={`https://wa.me/55${pharmacy.companyCellphone}`}>{pharmacy.companyCellphone}</a></p>
                  </>
                )}
              </PopupDivStyled>
              <PopupDivStyled>
                {pharmacy.zipCode && (
                  <>
                    <h3>Zip Code:</h3>
                    <p>{pharmacy.zipCode}</p>
                  </>
                )}
                {pharmacy.street && (
                  <>
                    <h3>Street:</h3>
                    <p>{pharmacy.street}</p>
                  </>
                )}
                {pharmacy.number && (
                  <>
                    <h3>Number:</h3>
                    <p>{pharmacy.number}</p>
                  </>
                )}
                {pharmacy.neighborhood && (
                  <>
                    <h3>Neighborhood:</h3>
                    <p>{pharmacy.neighborhood}</p>
                  </>
                )}
                {pharmacy.city && (
                  <>
                    <h3>City:</h3>
                    <p>{pharmacy.city}</p>
                  </>
                )}
                {pharmacy.state && (
                  <>
                    <h3>State:</h3>
                    <p>{pharmacy.state}</p>
                  </>
                )}
                {pharmacy.complement && (
                  <>
                    <h3>Complement:</h3>
                    <p>{pharmacy.complement}</p>
                  </>
                )}
                {latitude && (
                  <>
                    <h3>GeolocationLatitude:</h3>
                    <p>{latitude}</p>
                  </>
                )}
                {longitude && (
                  <>
                    <h3>GeolocationLongitude:</h3>
                    <p>{longitude}</p>
                  </>
                )}
              </PopupDivStyled>
            </PopupDivContainerStyled>
          </Popup>
        </Marker>
      )})}
    </MapContainerStyled>
  );
}

export { Map };