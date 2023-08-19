import { useEffect, useState } from "react";
import { InputField } from "../../components/InputField";
import { TextAreaField } from "../../components/TextAreaField";
import { SelectField } from "../../components/SelectField";

function MedicineRegistration(){
  const [form, setForm] = useState({
    medicineName: '',
    labName: '',
    dosage: '',
    description: '',
    unitPrice: '',
    type: '',
  });

  const [alert, setAlert] = useState({
    general: false,
    success: false,
    failure: false,
    medicineRegistered: false
  });
  
  useEffect(() => {
    setAlert({
      general: false,
      success: false,
      failure: false,
      medicineRegistered: false
    });
  }, []);


  const types = ['Alopático', 'de Referência', 'Genérico', 'Similar', 'Fitoterápico', 'Homeopático', 'Manipulado', 'Fracionado', 'Biológico']


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !form.medicineName ||
      !form.labName ||
      !form.dosage ||
      !form.unitPrice ||
      form.type === ""
    ) {
      setAlert({ ...alert, general: true });
      setTimeout(() => setAlert({ ...alert, general: false }), 3500);
      return;
    } else {
      try {
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
          setAlert({ ...alert, medicineRegistered: true });
          setTimeout(() => setAlert({ ...alert, medicineRegistered: false }), 3500);
        } else {
          // Update localStorage with the updated array (appending new data)
          localStorage.setItem('itemMedicineData', JSON.stringify([...existingMedicine, newMedicine]));

          // Show success alert
          setAlert({ ...alert, success: true });
          setTimeout(() => setAlert({ ...alert, success: false }), 3500);
        }

        return;
      } catch (error) {
        console.error("Error during registration:", error);
        setAlert({ ...alert, failure: true });
        setTimeout(() => setAlert({ ...alert, failure: false }), 3500);
        return;
      }
    }
  };


  return (
    <>
      <div>
        <h1>Medicine Registration</h1>
          <form onSubmit={handleSubmit}>
            <h2>Medicine information</h2>
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
                type="number"
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
            <button type='submit'>Register</button>
          </form>
        <div>
          {alert.general && <p style={{ color: 'red' }}>Please fill in all required fields.</p>}
          {alert.success && <p style={{ color: 'green' }}>Registration successfull!</p>}
          {alert.failure && <p style={{ color: 'red' }}>Registration failure.</p>}
          {alert.medicineRegistered && <p style={{ color: 'red' }}>Medicine already registered.</p>}
        </div>
      </div>
    </>
  )
}

export { MedicineRegistration }