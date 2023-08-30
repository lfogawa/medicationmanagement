import styled from "styled-components"
import { StylesProps } from "../../assets/styles/interface"

export const MedicineRegistrationDivStyled = styled.div<StylesProps>`
  text-align: center;
`
export const MedicineRegistrationAlertDivStyled = styled.div<StylesProps>`
  margin-bottom: 1em;
  display: flex;
  color: ${(props) => (props.success ? '#31955F' : '#ff0000')};
  justify-content: center;
  font-size: 15px;
  font-weight: bold;
  height: 30px;
`