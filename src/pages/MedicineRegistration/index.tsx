import { useState } from "react";
import { InputField } from "../../components/InputField";
import { TextAreaField } from "../../components/TextAreaField";
import { SelectField } from "../../components/SelectField";

function MedicineRegistration(){
  const [medicineName, setMedicineName] = useState('');
  const [labName, setLabName] = useState('');
  const [dosage, setDosage] = useState();
  const [description, setDescription] = useState('');
  const [unitPrice, setUnitPrice] = useState();
  const [type, setType] = useState('');
  const [generalAlert, setGeneralAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [failureAlert, setFailureAlert] = useState(false)
  
  const types = ['Alopático', 'de Referência', 'Genérico', 'Similar', 'Fitoterápico', 'Homeopático', 'Manipulado', 'Fracionado', 'Biológico']


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !medicineName ||
      !labName ||
      !dosage ||
      !unitPrice ||
      type === ""
    ) {
      setGeneralAlert(true);
      setTimeout(() => setGeneralAlert(false), 3500);
      return;
    } else {
      try {
        const medicineData = {
          medicineName,
          labName,
          dosage,
          description,
          unitPrice,
          type
        };
        localStorage.setItem('itemMedicineData', JSON.stringify(medicineData));

        setSuccessAlert(true);
        setTimeout(() => setSuccessAlert(false), 3500);
        return;
      } catch (error) {
        console.error("Error during registration:", error);
        setFailureAlert(true);
        setTimeout(() => setFailureAlert(false), 3500);
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
                value={medicineName}
                onChange={setMedicineName}
                placeholder="Type the Medicine Name"
              />
              <InputField
                label="Lab Name*"
                type="text"
                name="labName"
                id="labName"
                value={labName}
                onChange={setLabName}
                placeholder="Type the Lab Name"
              />
              <InputField
                label="Dosage*"
                type="number"
                name="dosage"
                id="dosage"
                value={dosage}
                onChange={setDosage}
                placeholder="Type the Dosage"
              />
              <TextAreaField
                label="Description"
                name="description"
                id="description"
                value={description}
                onChange={setDescription}
                placeholder="Type the Description"
              />
              <InputField
                label="Unit Price*"
                type="number"
                name="unitprice"
                id="unitprice"
                value={unitPrice}
                onChange={setUnitPrice}
                placeholder="Type the Unit Price"
              />
              <SelectField
                label="Type*"
                name="type"
                id="type"
                value={type}
                onChange={setType}
                options={types}
              />
              <p>* fields must be filled.</p>
            <button type='submit'>Register</button>
          </form>
        <div>
          {generalAlert && <p style={{ color: 'red' }}>Please fill in all required fields.</p>}
          {successAlert && <p style={{ color: 'green' }}>Registration successfull!</p>}
          {failureAlert && <p style={{ color: 'red' }}>Registration failure.</p>}
        </div>
      </div>
    </>
  )
}

export { MedicineRegistration }