import { useEffect, useState } from "react"
import { SearchField } from '../../components/SearchField'
import { MedicineCard } from '../../components/MedicineCard'
import { CardDivContainerStyled, MedicineListDivStyled } from "./styled";

function MedicineList() {
  const existingMedicine = JSON.parse(localStorage.getItem('itemMedicineData') || '[]');
  const [medicineList, setMedicineList] = useState(existingMedicine);  

  useEffect(() => {
    setMedicineList(existingMedicine);
  }, []);



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
              />
            </div>
          ))
        ) : (
          <MedicineListDivStyled>
            <p>Sorry, there's no medicine registered.</p>
          </MedicineListDivStyled>
        )}
      </CardDivContainerStyled>
    </>
  )
}

export { MedicineList }