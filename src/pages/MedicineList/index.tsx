import { useEffect, useState } from "react"
import { SearchField } from '../../components/SearchField'
import { Card } from '../../components/Card'  // Certifique-se de importar o componente Card corretamente
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
        {
          medicineList.length > 0 ?
          medicineList.map((medicine: any, index: number) => (
            <Card
              key={index}
              medicineName={medicine.medicineName}
              labName={medicine.labName}
              dosage={medicine.dosage}
              description={medicine.description}
              unitPrice={medicine.unitPrice}
              type={medicine.type}
            />
           )
          )
          :
          <MedicineListDivStyled>
            <p>Sorry, there's no medicine registered.</p>
          </MedicineListDivStyled>
        }
      </CardDivContainerStyled>
    </>
  )
}

export { MedicineList }