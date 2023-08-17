import { useState } from "react";
import { InputField } from "../../components/InputField";
import { TextAreaField } from "../../components/TextAreaField";
import { SelectField } from "../../components/SelectField";

function MedicineRegistration(){
  const [medicineName, setMedicineName] = useState('');
  const [labName, setLabName] = useState();
  const [dosage, setDosage] = useState('');
  const [description, setDescription] = useState('');
  const [unitPrice, setUnitPrice] = useState();
  const [type, setType] = useState();
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
      !type
    ) {
      setGeneralAlert(true);
      return;
    } else {
      try {
        setSuccessAlert(true);
        return;
      } catch {
        setFailureAlert(true);
        return;
      }
    }

    setTimeout(() => {
      setGeneralAlert(false);
      setSuccessAlert(false);
      setFailureAlert(false);
    }, 3500);
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
                type="text"
                name="dosage"
                id="dosage"
                value={dosage}
                onChange={setDosage}
                placeholder="Type the Dosage"
              />
              <TextAreaField
                label="Description"
                type="text"
                name="description"
                id="description"
                value={description}
                onChange={setDescription}
                placeholder="Type the Description"
              />
              <InputField
                label="Unit Price*"
                type="text"
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
        {generalAlert && <p style={{ color: 'red' }}>Please fill in all required fields.</p>}
        {successAlert && <p style={{ color: 'green' }}>Registration successfull!</p>}
        {failureAlert && <p style={{ color: 'red' }}>Registration failure.</p>}
      </div>
    </>
  )
}

export { MedicineRegistration }