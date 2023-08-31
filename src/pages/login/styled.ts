import styled from "styled-components"
import { StylesProps } from "../../assets/styles/interface"

export const LoginDivContainerStyled = styled.div<StylesProps>`
  display: flex;
  margin-top: 150px;
  margin-bottom: 40px;

  @media (min-width: 880px) {
    margin-bottom: 150px;
  }
`
export const LoginDivStyled = styled.div<StylesProps>`
  margin: auto;
  padding: 2em;
  padding-bottom: 3em;
  width: 70%;
  border-radius: 15px;
  box-shadow: 12px 12px 20px 5px rgba(0,0,0,0.3);
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 879px) {
    height: 68vh;
  }

`

export const LoginAlertDivStyled = styled.div<StylesProps>`
  margin-bottom: 20px;
  display: flex;
  color: #ff0000;
  justify-content: center;
  font-size: 15px;
  font-weight: bold;
  height: 20px;
`

export const LinkToUserRegistrationDivStyled = styled.div<StylesProps>`
  display: flex;
  justify-content: center;
  height: 20px;

  a{
    text-decoration: none;
    color: #31955F;
    font-size: 15px;
  }

  a:hover{
    text-decoration: underline;
    color: #31955F;
    font-size: 15px;
  }
`