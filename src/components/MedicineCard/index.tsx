import { useState } from "react";
import { Modal } from "../Modal";
import { MedicineCardProps } from "./interface"
import { MedicineCardButtonStyled } from "./styled"

function MedicineCard({
  medicineName,
  labName,
  dosage,
  description,
  unitPrice,
  type
}: MedicineCardProps) {
  const [openModal, setOpenModal] = useState(false);

  const [btnClick, setBtnClick] = useState(false);

  const handleMouseDown = () => {
    setBtnClick(true);
  };

  const handleMouseUp = () => {
    setBtnClick(false);
  };

  return (
    <MedicineCardButtonStyled
      onClick={() => setOpenModal(!openModal)}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={btnClick ? 'active' : ''}
    >
      <img src="src\assets\img\medicine.jpg" alt="Medicine image." />
      <h3>{medicineName}</h3>
        <p>{labName}</p>
        <p className="details">Click for details</p>
      
      {openModal && (
        <Modal>
          <>
            <p>{dosage}</p>
            {description && <p>{description}</p>}
            <p>R$ {unitPrice}</p>
            <p>{type}</p>
          </>
        </Modal>
      )}
    </MedicineCardButtonStyled>
  )
}

export { MedicineCard }