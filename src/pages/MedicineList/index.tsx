import { useEffect, useState } from "react"
import { SearchField } from '../../components/SearchField'
import { Card } from '../../components/Card'  // Certifique-se de importar o componente Card corretamente

function MedicineList() {
  const existingMedicine = JSON.parse(localStorage.getItem('itemMedicineData') || '[]');
  const [medicineList, setMedicineList] = useState(existingMedicine);

  useEffect(() => {
    setMedicineList(existingMedicine);
  }, []);

  return (
    <>
      <SearchField />
      {medicineList.map((medicine: any, index: number) => (
        <Card
          key={index}
          medicineName={medicine.medicineName}
          labName={medicine.labName}
          dosage={medicine.dosage}
          description={medicine.description}
          unitPrice={medicine.unitPrice}
          type={medicine.type}
        />
      ))}
    </>
  )
}

export { MedicineList }