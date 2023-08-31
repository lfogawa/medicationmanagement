import styled from "styled-components"
import { StylesProps } from "../../assets/styles/interface"

export const UserRegistrationDivContainerStyled = styled.div<StylesProps>`
  display: flex;
  margin-top: 150px;
  margin-bottom: 60px;
`

export const UserRegistrationDivStyled = styled.div<StylesProps>`
  margin: auto;
  padding: 3em;
  width: 70%;
  border-radius: 15px;
  box-shadow: 12px 12px 20px 5px rgba(0,0,0,0.3);
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 879px) {
    height: 85vh;
  }
`

export const UserRegistrationAlertDivStyled = styled.div<StylesProps>`
  margin-bottom: 20px;
  display: flex;
  color: ${(props) => (props.$success ? '#31955F' : '#ff0000')};
  justify-content: center;
  font-size: 15px;
  height: 20px;
`

export const LinkToLoginDivStyled = styled.div<StylesProps>`
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