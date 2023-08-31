import styled from "styled-components"
import { StylesProps } from "../../assets/styles/interface"

export const LoginHeaderStyled = styled.header<StylesProps>`
  position: fixed;
  padding-top: 20px;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;

  img{
    width: 5em;
    margin: 1em;
  }

  h1{
    font-size: 2.5em;
    font-weight: bold;
    color: #31955F;
  }
`