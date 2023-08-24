import { styled } from "styled-components"
import { StylesProps } from "../../assets/styles/interface"


export const FooterDivContainerStyled = styled.div<StylesProps>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #ffffff;
  padding: 3em;
  height: 15vw;
  background-color: #084420;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  font-size: 14px;

  ul{
    font-weight: bold;
  }

  li{
    padding: 1em;
  }

  li > a{
    text-decoration: none;
    color: #ffffff; 
  }

  li > a:hover{
    text-decoration: underline;
    color: #ffffff;
  }
`