import styled from "styled-components"
import { StylesProps } from "../../assets/styles/interface"

export const LoginHeaderStyled = styled.header<StylesProps>`
  position: fixed;
  margin-top: 20px;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;


  img{
    width: 5em;
    margin: 1em;
  }

  p{
    font-size: 2.5em;
    font-weight: bold;
    color: #084420;
  }
`