import { styled } from "styled-components";
import { StylesProps } from "../../assets/styles/interface";

export const CardDivContainerStyled = styled.div<StylesProps>`
  margin: 2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

export const MedicineListDivStyled = styled.div<StylesProps>`
  margin: 2em;
  height: 48vh;
  display: flex;
  justify-content: center;
  align-items: center;

  p{
    color: #31955F;
    display: flex;
    justify-content: center;
    font-size: 2em;
    font-weight: bold;
  }
`