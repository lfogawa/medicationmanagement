import { CardProps } from "./interface"

function Card({
  medicineName,
  labName,
  dosage,
  description,
  unitPrice,
  type,
}: CardProps) {

  return(
    <>
      <div>
        <p>{medicineName}</p>
        <p>{labName}</p>
        <p>{dosage}</p>
        <p>{description}</p>
        <p>{unitPrice}</p>
        <p>{type}</p>
      </div>
    </>
  )
}

export { Card }