import React from "react";
import { useState } from "react";
import { InputField } from "../../components/InputField";

function PharmacyRegistration() {
  const [form, setForm] = useState({
    corporateName: '',
    cnpj: '',
    tradeName: '',
    companyEmail: '',
    companyPhone: '',
    companyCellphone: '',
    zipCode: '',
    street: '',
    number: '',
    neighborhood: '',
    city: '',
    state: '',
    complement: '',
    geolocationLatitude: '',
    geolocationLongitude: '',
  })

  const [generalAlert, setGeneralAlert] = useState(false);

  const checkZipCode = async (zipCode: string) => {
    const newZipCode = zipCode;
    zipCode(newZipCode);

    if (newZipCode.length === 8) {
      try {
        const response = await fetch(`https://brasilapi.com.br/api/cep/v2/${newZipCode}`);
        const data = await response.json();
        form.street(data.street);
        form.neighborhood(data.neighborhood);
        form.city(data.city);
        form.state(data.state);
        form.geolocationLatitude(data.location.coordinates.latitude);
        form.geolocationLongitude(data.location.coordinates.longitude);
      } catch (error) {
        console.log('Error:', error);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !form.corporateName ||
      !form.cnpj ||
      !form.tradeName ||
      !form.companyEmail ||
      !form.companyCellphone ||
      !form.zipCode ||
      !form.street ||
      !form.number ||
      !form.neighborhood ||
      !form.city ||
      !form.state ||
      !form.geolocationLatitude ||
      !form.geolocationLongitude
    ) {
      setGeneralAlert(true);
      setTimeout(() => setGeneralAlert(false), 3500);
      return;
    } else {
      try {
        const pharmacyData = {
          form.corporateName,
          form.cnpj,
          form.tradeName,
          form.companyEmail,
          form.companyPhone,
          form.companyCellphone,
          form.zipCode,
          form.street,
          form.number,
          form.neighborhood,
          form.city,
          form.state,
          form.complement,
          form.geolocationLatitude,
          form.geolocationLongitude
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
                value={form.corporateName}
                onChange={(value) => setForm({...form, corporateName: value})}
                placeholder="Type the Corporate Name"
              />
              <InputField
                label="Corporate Taxpayers Registry (CNPJ)*"
                type="text"
                name="cnpj"
                id="cnpj"
                value={form.cnpj}
                onChange={(value) => setForm({...form, cnpj: value})}
                placeholder="Type the Corporate Taxpayers Registry (CNPJ)"
              />
              <InputField
                label="Trade Name*"
                type="text"
                name="tradeName"
                id="tradeName"
                value={form.tradeName}
                onChange={(value) => setForm({...form, tradeName: value})}
                placeholder="Type the Trade Name"
              />
              <InputField
                label="Company E-mail*"
                type="text"
                name="companyEmail"
                id="companyEmail"
                value={form.companyEmail}
                onChange={(value) => setForm({...form, companyEmail: value})}
                placeholder="Type the Company E-mail"
              />
              <InputField
                label="Company Phone (optional)"
                type="text"
                name="companyPhone"
                id="companyPhone"
                value={form.companyPhone}
                onChange={(value) => setForm({...form, companyPhone: value})}
                placeholder="Type the Company Phone"
              />
              <InputField
                label="Company Cellphone*"
                type="text"
                name="companyCellphone"
                id="companyCellphone"
                value={form.companyCellphone}
                onChange={(value) => setForm({...form, companyCellphone: value})}
                placeholder="Type the Company Cellphone"
              />
            <h2>Adress</h2>
              <InputField
                label="Zip Code*"
                type="number"
                name="zipCode"
                id="zipCode"
                value={form.zipCode}
                onChange={(value) => setForm({...form, zipCode: value})}
                placeholder="Type the Zip Code"
                onBlur={(value) => checkZipCode(value)}
              />
              <InputField
                label="Street*"
                type="text"
                name="street"
                id="street"
                value={form.street}
                onChange={(value) => setForm({...form, street: value})}
                placeholder="Type the Street"
              />
              <InputField
                label="Number*"
                type="number"
                name="number"
                id="number"
                value={form.number}
                onChange={(value) => setForm({...form, number: value})}
                placeholder="Type the number"
              />
              <InputField
                label="Neighborhood*"
                type="text"
                name="neighborhood"
                id="neighborhood"
                value={form.neighborhood}
                onChange={(value) => setForm({...form, neighborhood: value})}
                placeholder="Type the neighborhood"
              />
              <InputField
                label="City*"
                type="text"
                name="city"
                id="city"
                value={form.city}
                onChange={(value) => setForm({...form, city: value})}
                placeholder="Type the city"
              />
              <InputField
                label="State*"
                type="text"
                name="state"
                id="state"
                value={form.state}
                onChange={(value) => setForm({...form, state: value})}
                placeholder="Type the State"
              />
              <InputField
                label="Complement (optional)"
                type="text"
                name="complement"
                id="complement"
                value={form.complement}
                onChange={(value) => setForm({...form, complement: value})}
                placeholder="Type the complement"
              />
              <InputField
                label="Geolocation Latitude*"
                type="text"
                name="geolocationLatitude"
                id="geolocationLatitude"
                value={form.geolocationLatitude}
                onChange={(value) => setForm({...form, geolocationLatitude: value})}
                placeholder="Type the Geolocation Latitude"
              />
              <InputField
                label="Geolocation Longitude*"
                type="text"
                name="geolocationLongitude"
                id="geolocationLongitude"
                value={form.geolocationLongitude}
                onChange={(value) => setForm({...form, geolocationLongitude: value})}
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