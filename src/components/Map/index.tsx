import { TileLayer, Marker, Popup } from 'react-leaflet';
import { MapProps } from './interface';
import { MapContainerStyled, PopupDivContainerStyled, PopupDivStyled } from "./styled";
import markerIcon from "../../assets/svg/markerIcon.svg"
import { Icon } from 'leaflet';
import deleteButton from "../../assets/svg/deleteButton.svg"
import { DeleteButtonStyled } from "../DeleteButton/styled";

function Map({ pharmacies, onDelete }: MapProps) {
  const customIcon = new Icon({
    iconUrl: markerIcon,
    iconSize: [45, 45]
  });

  const handleDeleteClick = (index: number) => {
    onDelete(index);
  };

  return (
    <MapContainerStyled center={[-15.720882, -50.412599]} zoom={4}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {pharmacies.map((pharmacy: any, index: number) => {
        // Parses the localstorage string to a decimal number literal
        const latitude = parseFloat(pharmacy.geolocationLatitude);
        const longitude = parseFloat(pharmacy.geolocationLongitude);

        // Verifies if NaN, if it's, it will show a map without the respective marker
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
                {/* Link to WhatsApp conversation */}
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
              <DeleteButtonStyled onClick={() => handleDeleteClick(index)}>
                <img src={deleteButton} alt="Delete button." />
              </DeleteButtonStyled>
              </PopupDivStyled>
            </PopupDivContainerStyled>
          </Popup>
        </Marker>
      )})}
    </MapContainerStyled>
  );
}

export { Map };