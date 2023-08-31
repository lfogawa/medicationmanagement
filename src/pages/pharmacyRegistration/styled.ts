import styled from "styled-components"
import { StylesProps } from "../../assets/styles/interface"

export const PharmacyRegistrationAlertDivStyled = styled.div<StylesProps>`
  margin-bottom: 1em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  font-size: 15px;
  font-weight: bold;
  color: ${props => (props.$success ? "#31955F" : "#ff0000")};
  height: 30px;
`
export const PharmacyRegistrationDivContainerStyled = styled.div<StylesProps>`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

export const PharmacyRegistrationDivStyled = styled.div<StylesProps>`
  justify-content: center;
  text-align: center;
  margin-bottom: 2em;

  input{
    width: 20em;
  }
`

