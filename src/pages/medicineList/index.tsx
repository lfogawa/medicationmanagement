import { useEffect, useState } from "react"
import { SearchField } from '../../components/SearchField'
import { MedicineCard } from '../../components/MedicineCard'
import { CardDivContainerStyled, MedicineListDivStyled } from "./styled"

function MedicineList() {
  // Get medicine data array from localStorage if it exists
  const existingMedicine = JSON.parse(localStorage.getItem('itemMedicineData') || '[]');
  const [medicineList, setMedicineList] = useState(existingMedicine);  

  useEffect(() => {
    setMedicineList(existingMedicine);
  }, []);

  const deleteMedicine = (index: number) => {
    const updatedMedicineList = [...medicineList];
    updatedMedicineList.splice(index, 1);
    setMedicineList(updatedMedicineList);
    localStorage.setItem('itemMedicineData', JSON.stringify(updatedMedicineList));
  };

  return (
    <>
      <SearchField />
      <CardDivContainerStyled>
        {medicineList.length > 0 ? (
          medicineList.map((medicine: any, index: number) => (
            <div key={index}>
              <MedicineCard
                medicineName={medicine.medicineName}
                labName={medicine.labName}
                dosage={medicine.dosage}
                description={medicine.description}
                unitPrice={medicine.unitPrice}
                type={medicine.type}
                onDelete={() => deleteMedicine(index)}
              />
            </div>
          ))
        ) :
        // If there's no medicine data array from localstorage, message below will appear
        (
          <MedicineListDivStyled>
            <p>Sorry, there's no medicine registered.</p>
          </MedicineListDivStyled>
        )}
      </CardDivContainerStyled>
    </>
  )
}

export { MedicineList }