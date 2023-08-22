import styled from "styled-components"
import { StylesProps } from "../../assets/styles/interface"

export const LoginHeaderStyled = styled.header<StylesProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    width: 5em;
    margin: 1em;
  }

  p{
    font-size: 2em;
    font-weight: bold;
    color: #084420;
  }
`