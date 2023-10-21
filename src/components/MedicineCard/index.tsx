import { useState } from "react";
import { Modal } from "../Modal";
import { MedicineCardProps } from "./interface"
import { MedicineCardButtonStyled } from "./styled"
import medicine from "../../assets/img/medicine.jpg"
import deleteButton from "../../assets/svg/deleteButton.svg"
import { DeleteButtonStyled } from "../DeleteButton/styled";

function MedicineCard({
  medicineName,
  labName,
  dosage,
  description,
  unitPrice,
  type,
  onDelete
}: MedicineCardProps) {
  // Uses react-modal to expand the card and show more medicine details
  const [openModal, setOpenModal] = useState(false);

  // Check if the card is clicked
  const [btnClick, setBtnClick] = useState(false);

  const handleMouseDown = () => {
    setBtnClick(true);
  };

  const handleMouseUp = () => {
    setBtnClick(false);
  };

  const handleDeleteClick = () => {
    onDelete();
  };

  return (
    <MedicineCardButtonStyled
      onClick={() => setOpenModal(!openModal)}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={btnClick ? 'active' : ''}
    >
      <img src={medicine} alt="Medicine image." />
      <h3>Medicine name: {medicineName}</h3>
        <p>Lab name: {labName}</p>
        <p className="details">Click for details</p>
      
      {/* Information that modal will show once card is clicked */}
      {openModal && (
        <Modal>
          <>
            <p>Dosage: {dosage}</p>
            {description && <p>Description: {description}</p>}
            <p>Unit price: R$ {unitPrice}</p>
            <p>Type: {type}</p>
          </>
        </Modal>
      )}
      <DeleteButtonStyled onClick={handleDeleteClick}>
        <img src={deleteButton} alt="Delete button." />
      </DeleteButtonStyled>
    </MedicineCardButtonStyled>
  )
}

export { MedicineCard }