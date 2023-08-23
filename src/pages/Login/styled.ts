import styled from "styled-components"
import { StylesProps } from "../../assets/styles/interface"

export const LoginContainerStyled = styled.div<StylesProps>`
  display: flex;
  height: 100vh;
`
export const LoginDivStyled = styled.div<StylesProps>`
  margin: auto;
  padding: 2em;
  width: 70%;
  border-radius: 15px;
  box-shadow: 12px 12px 20px 5px rgba(0,0,0,0.3);
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

`

export const LoginAlertDivStyled = styled.div<StylesProps>`
  display: flex;
  color: #ff0000;
  justify-content: center;
  font-size: 15px;
  height: 10px;
`