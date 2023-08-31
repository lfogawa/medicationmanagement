import React from "react";
import { useState } from "react";
import { InputField } from "../../components/InputField";
import { PharmacyRegistrationAlertDivStyled, PharmacyRegistrationDivContainerStyled, PharmacyRegistrationDivStyled } from "./styled";
import { Button } from "../../components/Button";

function PharmacyRegistration() {
  // Pharmacy data array
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

  // Alerts
  const [alerts, setAlerts] = useState({
    alert: '',
    success: false
  });

  const clearAlerts = () => {
    setAlerts((previousData) => ({
      ...previousData,
      alert: '',
      success: false
    }))
  };

  // Autofill address informations using Zip Code (Brasil API)
  const checkZipCode = async (zipCode: string) => {
    const newZipCode = zipCode;
    setForm((previousData) => ({
      ...previousData,
      zipCode: newZipCode
    }));

    if (newZipCode.length === 8) {
      try {
        const response = await fetch(`https://brasilapi.com.br/api/cep/v2/${newZipCode}`);
        const data = await response.json();
        setForm((previousData) => ({
          ...previousData,
          street: data.street,
          neighborhood: data.neighborhood,
          city: data.city,
          state: data.state,
          geolocationLatitude: data.location.coordinates.latitude,
          geolocationLongitude: data.location.coordinates.longitude
        }))
      } catch (error) {
        console.error("Error during fetch:", error);
        setAlerts((previousData) => ({
          ...previousData,
          alert: 'We could not find other address informations from your Zip Code. Please insert each of them manually.'
        }));
      }
    }
  };

  // Onsubmit check required fields and insert localstorage information if not repeated
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    clearAlerts();

    // Check if required fields are filled
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
      setAlerts((previousData) => ({
        ...previousData,
        alert: 'Please fill in all required fields.'
      }));
      setTimeout(() => clearAlerts(), 3500);
      return;
    } else {
      try {
        // New pharmacy data array
        const newPharmacyData = {
          corporateName: form.corporateName,
          cnpj: form.cnpj,
          tradeName: form.tradeName,
          companyEmail: form.companyEmail,
          companyPhone: form.companyPhone,
          companyCellphone: form.companyCellphone,
          zipCode: form.zipCode,
          street: form.street,
          number: form.number,
          neighborhood: form.neighborhood,
          city: form.city,
          state: form.state,
          complement: form.complement,
          geolocationLatitude: form.geolocationLatitude,
          geolocationLongitude: form.geolocationLongitude
        };

        // Get existing pharmacy data array from localStorage
        const existingPharmacy = JSON.parse(localStorage.getItem('itemPharmacyData') || '[]');

        // Check if the new pharmacy data array is already registered
        const isPharmacyAlreadyRegistered = existingPharmacy.some(
          (pharmacy: any) =>
            pharmacy.corporateName === newPharmacyData.corporateName &&
            pharmacy.cnpj === newPharmacyData.cnpj &&
            pharmacy.tradeName === newPharmacyData.tradeName &&
            pharmacy.zipCode === newPharmacyData.zipCode &&
            pharmacy.number === newPharmacyData.number
        );

        if (isPharmacyAlreadyRegistered) {
          // Show alert if pharmacy data array is already registered
          setAlerts((previousData) => ({
            ...previousData,
            alert: 'Pharmacy already registered.',
          }))
          setTimeout(() => clearAlerts(), 3500);
        } else {
          // Update localStorage with the updated array (appending new data)
          localStorage.setItem('itemPharmacyData', JSON.stringify([...existingPharmacy, newPharmacyData]));

          // Show success alert
          setAlerts((previousData) => ({
            ...previousData,
            alert: 'Registration successfull!',
            success: true
          }))
          setTimeout(() => clearAlerts(), 3500);
        
          // Reset form
          setForm({
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
        }
        return;
      } catch (error) {
        // Show registration error alert
        console.error("Error during registration:", error);
        setAlerts((previousData) => ({
          ...previousData,
          alert: 'Registration failure.',
        }))
        setTimeout(() => clearAlerts(), 3500);
        return;
      }
    }
  };


  return (
    <>
      <div>
        <h2>Pharmacy Registration</h2>
          <form onSubmit={handleSubmit}>
            <PharmacyRegistrationDivContainerStyled>
              <PharmacyRegistrationDivStyled>
              <h3>General information</h3>
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
                  label="Corporate Taxpayers Registry*"
                  type="number"
                  name="cnpj"
                  id="cnpj"
                  value={form.cnpj}
                  onChange={(value) => setForm({...form, cnpj: value})}
                  placeholder="Type the Corporate Taxpayers Registry"
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
                  type="number"
                  name="companyPhone"
                  id="companyPhone"
                  value={form.companyPhone}
                  onChange={(value) => setForm({...form, companyPhone: value})}
                  placeholder="Type the Company Phone"
                />
                <InputField
                  label="Company Cellphone*"
                  type="number"
                  name="companyCellphone"
                  id="companyCellphone"
                  value={form.companyCellphone}
                  onChange={(value) => setForm({...form, companyCellphone: value})}
                  placeholder="Type the Company Cellphone"
                />
              </PharmacyRegistrationDivStyled>
              <PharmacyRegistrationDivStyled>
              <h3>Address</h3>
                <InputField
                  label="Zip Code*"
                  type="text"
                  name="zipCode"
                  id="zipCode"
                  value={form.zipCode}
                  onChange={(value) => setForm({...form, zipCode: value.replace(/\D/g, '')})}
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
                  placeholder="Type the Number"
                />
                <InputField
                  label="Neighborhood*"
                  type="text"
                  name="neighborhood"
                  id="neighborhood"
                  value={form.neighborhood}
                  onChange={(value) => setForm({...form, neighborhood: value})}
                  placeholder="Type the Neighborhood"
                />
                <InputField
                  label="City*"
                  type="text"
                  name="city"
                  id="city"
                  value={form.city}
                  onChange={(value) => setForm({...form, city: value})}
                  placeholder="Type the City"
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
                  placeholder="Type the Complement"
                />
                <InputField
                  label="Geolocation Latitude*"
                  type="number"
                  name="geolocationLatitude"
                  id="geolocationLatitude"
                  value={form.geolocationLatitude}
                  onChange={(value) => setForm({...form, geolocationLatitude: value.replace(/,/g, '.')})}
                  placeholder="Type the Geolocation Latitude"
                />
                <InputField
                  label="Geolocation Longitude*"
                  type="number"
                  name="geolocationLongitude"
                  id="geolocationLongitude"
                  value={form.geolocationLongitude}
                  onChange={(value) => setForm({...form, geolocationLongitude: value.replace(/,/g, '.')})}
                  placeholder="Type the Geolocation Longitude"
                />
              </PharmacyRegistrationDivStyled>  
            </PharmacyRegistrationDivContainerStyled>
              <p>* fields must be filled.</p>
            <Button type='submit'>Register</Button>
          </form>
          <PharmacyRegistrationAlertDivStyled $success={alerts.success}>
            <p>{alerts.alert}</p>
          </PharmacyRegistrationAlertDivStyled>
      </div>
    </>
  )
}

export { PharmacyRegistration }