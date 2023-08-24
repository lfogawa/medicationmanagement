import { TileLayer } from 'react-leaflet';
import { MapProps } from './interface';
import { MapContainerStyled, MarkerStyled, PopupDivContainerStyled, PopupDivStyled, PopupStyled } from "./styled";

function Map({ pharmacies }: MapProps) {
  return (
    <MapContainerStyled center={[-15.720882, -50.412599]} zoom={4}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {pharmacies.map((pharmacy: any, index: number) => (
        <MarkerStyled
          position={[pharmacy.geolocationLatitude, pharmacy.geolocationLongitude]}
          key={index}
        >
          <PopupStyled>
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
                {pharmacy.zipCode && (
                  <>
                    <h3>Zip Code:</h3>
                    <p>{pharmacy.zipCode}</p>
                  </>
                )}
              </PopupDivStyled>
              <PopupDivStyled>
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
                {pharmacy.geolocationLatitude && (
                  <>
                    <h3>GeolocationLatitude:</h3>
                    <p>{pharmacy.geolocationLatitude}</p>
                  </>
                )}
                {pharmacy.geolocationLongitude && (
                  <>
                    <h3>GeolocationLongitude:</h3>
                    <p>{pharmacy.geolocationLongitude}</p>
                  </>
                )}
              </PopupDivStyled>
            </PopupDivContainerStyled>
          </PopupStyled>
        </MarkerStyled>
      ))}
    </MapContainerStyled>
  );
}

export { Map };