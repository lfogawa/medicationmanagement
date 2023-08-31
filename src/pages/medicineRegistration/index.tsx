import { useState } from "react";
import { InputField } from "../../components/InputField";
import { TextAreaField } from "../../components/TextAreaField";
import { SelectField } from "../../components/SelectField";
import { MedicineRegistrationAlertDivStyled, MedicineRegistrationDivStyled } from "./styled";
import { Button } from "../../components/Button";

function MedicineRegistration() {
  // Medicine data
  const [form, setForm] = useState({
    medicineName: '',
    labName: '',
    dosage: '',
    description: '',
    unitPrice: '',
    type: '',
  });

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

  // Types of medicine
  const types = ['Alopático', 'de Referência', 'Genérico', 'Similar', 'Fitoterápico', 'Homeopático', 'Manipulado', 'Fracionado', 'Biológico']


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    clearAlerts();

    // Check if required fields are filled
    if (
      !form.medicineName ||
      !form.labName ||
      !form.dosage ||
      !form.unitPrice ||
      form.type === ""
    ) {
      setAlerts((previousData) => ({
        ...previousData,
        alert: 'Please fill in all required fields.'
      }));
      setTimeout(() => clearAlerts(), 3500);
      return;
    } else {
      try {
        // New medicine data array information
        const newMedicine = {
          medicineName: form.medicineName,
          labName: form.labName,
          dosage: form.dosage,
          description: form.description,
          unitPrice: form.unitPrice,
          type: form.type
        };

        // Get existing medicine data array from localStorage
        const existingMedicine = JSON.parse(localStorage.getItem('itemMedicineData') || '[]');

        // Check if the new medicine data is already registered
        const isMedicineAlreadyRegistered = existingMedicine.some(
          (medicine: any) =>
            medicine.medicineName === newMedicine.medicineName &&
            medicine.labName === newMedicine.labName &&
            medicine.dosage === newMedicine.dosage &&
            medicine.unitPrice === newMedicine.unitPrice &&
            medicine.type === newMedicine.type
        );

        if (isMedicineAlreadyRegistered) {
          // Show alert if medicine data is already registered
          setAlerts((previousData) => ({
            ...previousData,
            alert: 'Medicine already registered.',
          }))
          setTimeout(() => clearAlerts(), 3500);
        } else {
          // Update localStorage with the updated array (appending new data)
          localStorage.setItem('itemMedicineData', JSON.stringify([...existingMedicine, newMedicine]));

          // Show success alert
          setAlerts((previousData) => ({
            ...previousData,
            alert: 'Registration successfull!',
            success: true
          }))
          setTimeout(() => clearAlerts(), 3500);

          // Reset form
          setForm({
            medicineName: '',
            labName: '',
            dosage: '',
            description: '',
            unitPrice: '',
            type: ''
          })
        }
        setTimeout(() => clearAlerts(), 3500);
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
      <MedicineRegistrationDivStyled>
        <h2>Medicine Registration</h2>
          <form onSubmit={handleSubmit}>
            <h3>Medicine information</h3>
              <InputField
                label="Medicine Name*"
                type="text"
                name="medicineName"
                id="corporatName"
                value={form.medicineName}
                onChange={(value) => setForm({...form, medicineName: value})}
                placeholder="Type the Medicine Name"
              />
              <InputField
                label="Lab Name*"
                type="text"
                name="labName"
                id="labName"
                value={form.labName}
                onChange={(value) => setForm({...form, labName: value})}
                placeholder="Type the Lab Name"
              />
              <InputField
                label="Dosage*"
                type="text"
                name="dosage"
                id="dosage"
                value={form.dosage}
                onChange={(value) => setForm({...form, dosage: value})}
                placeholder="Type the Dosage"
              />
              <TextAreaField
                label="Description"
                name="description"
                id="description"
                value={form.description}
                onChange={(value) => setForm({...form, description: value})}
                placeholder="Type the Description"
              />
              <InputField
                label="Unit Price*"
                type="number"
                name="unitprice"
                id="unitprice"
                value={form.unitPrice}
                onChange={(value) => setForm({...form, unitPrice: value})}
                placeholder="Type the Unit Price"
              />
              <SelectField
                label="Type*"
                name="type"
                id="type"
                value={form.type}
                onChange={(value) => setForm({...form, type: value})}
                options={types}
              />
              <p>* fields must be filled.</p>
            <Button type='submit'>Register</Button>
          </form>
        <MedicineRegistrationAlertDivStyled $success={alerts.success}>
          <p>{alerts.alert}</p>
        </MedicineRegistrationAlertDivStyled>
      </MedicineRegistrationDivStyled>
    </>
  )
}

export { MedicineRegistration }