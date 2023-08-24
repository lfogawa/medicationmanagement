import styled from "styled-components";
import { StylesProps } from "../../assets/styles/interface";

export const TextAreaFieldDivStyled = styled.div<StylesProps>`
  margin: auto;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1em;
  font-weight: bold;

  label {
    margin: 10px;
  }

  textarea {
    text-align: left;
    padding: 6px;
    border-radius: 10px;
    border-color: transparent;
    width: 45vw;
    height: 10vh;
    color: #084420;
    box-shadow: 4px 4px 4px 2px rgba(0,0,0,0.3);
    transition: 400ms;
  }
`