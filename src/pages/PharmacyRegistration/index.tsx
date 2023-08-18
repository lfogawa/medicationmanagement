import React from "react";
import { useState } from "react";
import { InputField } from "../../components/InputField";

function PharmacyRegistration(){
  const [corporateName, setCorporateName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [tradeName, setTradeName] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyPhone, setCompanyPhone] = useState('');
  const [companyCellphone, setCompanyCellphone] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [complement, setComplement] = useState('');
  const [geolocationLatitude, setGeolocationLatitude] = useState('');
  const [geolocationLongitude, setGeolocationLongitude] = useState('');
  const [generalAlert, setGeneralAlert] = useState(false)

  const checkZipCode = async (zipCode: string) => {
    const newZipCode = zipCode;
    setZipCode(newZipCode);

    if (newZipCode.length === 8) {
      try {
        const response = await fetch(`https://brasilapi.com.br/api/cep/v2/${newZipCode}`);
        const data = await response.json();
        setStreet(data.street);
        setNeighborhood(data.neighborhood);
        setCity(data.city);
        setState(data.state);
        setGeolocationLatitude(data.location.coordinates.latitude);
        setGeolocationLongitude(data.location.coordinates.longitude);
      } catch (error) {
        console.log('Error:', error);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !corporateName ||
      !cnpj ||
      !tradeName ||
      !companyEmail ||
      !companyCellphone ||
      !zipCode ||
      !street ||
      !number ||
      !neighborhood ||
      !city ||
      !state ||
      !geolocationLatitude ||
      !geolocationLongitude
    ) {
      setGeneralAlert(true);
      setTimeout(() => setGeneralAlert(false), 3500);
      return;
    } else {
      try {
        const pharmacyData = {
          corporateName,
          cnpj,
          tradeName,
          companyEmail,
          companyPhone,
          companyCellphone,
          zipCode,
          street,
          number,
          neighborhood,
          city,
          state,
          complement,
          geolocationLatitude,
          geolocationLongitude
        };
        localStorage.setItem('itemPharmacyData', JSON.stringify(pharmacyData));
      } catch (error) {
        console.error("Error during registration:", error);
      }
    }
  };


  return (
    <>
      <div>
        <h1>Pharmacy Registration</h1>
          <form onSubmit={handleSubmit}>
            <h2>General information</h2>
              <InputField
                label="Corporate Name*"
                type="text"
                name="corporateName"
                id="corporatName"
                value={corporateName}
                onChange={setCorporateName}
                placeholder="Type the Corporate Name"
              />
              <InputField
                label="Corporate Taxpayers Registry (CNPJ)*"
                type="text"
                name="cnpj"
                id="cnpj"
                value={cnpj}
                onChange={setCnpj}
                placeholder="Type the Corporate Taxpayers Registry (CNPJ)"
              />
              <InputField
                label="Trade Name*"
                type="text"
                name="tradeName"
                id="tradeName"
                value={tradeName}
                onChange={setTradeName}
                placeholder="Type the Trade Name"
              />
              <InputField
                label="Company E-mail*"
                type="text"
                name="companyEmail"
                id="companyEmail"
                value={companyEmail}
                onChange={setCompanyEmail}
                placeholder="Type the Company E-mail"
              />
              <InputField
                label="Company Phone (optional)"
                type="text"
                name="companyPhone"
                id="companyPhone"
                value={companyPhone}
                onChange={setCompanyPhone}
                placeholder="Type the Company Phone"
              />
              <InputField
                label="Company Cellphone*"
                type="text"
                name="companyCellphone"
                id="companyCellphone"
                value={companyCellphone}
                onChange={setCompanyCellphone}
                placeholder="Type the Company Cellphone"
              />
            <h2>Adress</h2>
              <InputField
                label="Zip Code*"
                type="number"
                name="zipCode"
                id="zipCode"
                value={zipCode}
                onChange={setZipCode}
                placeholder="Type the Zip Code"
                onBlur={(value) => checkZipCode(value)}
              />
              <InputField
                label="Street*"
                type="text"
                name="street"
                id="street"
                value={street}
                onChange={setStreet}
                placeholder="Type the Street"
              />
              <InputField
                label="Number*"
                type="number"
                name="number"
                id="number"
                value={number}
                onChange={setNumber}
                placeholder="Type the number"
              />
              <InputField
                label="Neighborhood*"
                type="text"
                name="neighborhood"
                id="neighborhood"
                value={neighborhood}
                onChange={setNeighborhood}
                placeholder="Type the neighborhood"
              />
              <InputField
                label="City*"
                type="text"
                name="city"
                id="city"
                value={city}
                onChange={setCity}
                placeholder="Type the city"
              />
              <InputField
                label="State*"
                type="text"
                name="state"
                id="state"
                value={state}
                onChange={setState}
                placeholder="Type the State"
              />
              <InputField
                label="Complement (optional)"
                type="text"
                name="complement"
                id="complement"
                value={complement}
                onChange={setComplement}
                placeholder="Type the complement"
              />
              <InputField
                label="Geolocation Latitude*"
                type="text"
                name="geolocationLatitude"
                id="geolocationLatitude"
                value={geolocationLatitude}
                onChange={setGeolocationLatitude}
                placeholder="Type the Geolocation Latitude"
              />
              <InputField
                label="Geolocation Longitude*"
                type="text"
                name="geolocationLongitude"
                id="geolocationLongitude"
                value={geolocationLongitude}
                onChange={setGeolocationLongitude}
                placeholder="Type the Geolocation Longitude"
              />
              <p>* fields must be filled.</p>
            <button type='submit'>Register</button>
          </form>
          {generalAlert && <p style={{ color: 'red' }}>Please fill in all required fields.</p>}
      </div>
    </>
  )
}

export { PharmacyRegistration }