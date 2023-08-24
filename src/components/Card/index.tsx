import { CardProps } from "./interface"
import { CardDivStyled } from "./styled"

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
      <CardDivStyled>
        <h3>{medicineName}</h3>
        <p>{labName}</p>
        <p>{dosage}</p>
        <p>{description}</p>
        <p>{unitPrice}</p>
        <p>{type}</p>
      </CardDivStyled>
    </>
  )
}

export { Card }