import styled from "styled-components";
import { StylesProps } from "../../assets/styles/interface";

export const InputFieldDivStyled = styled.div<StylesProps>`
  margin: auto;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1em;
  font-weight: bold;

  label {
    margin: 10px;
    color: #084420;
  }

  input {
    text-align: center;
    padding: 6px;
    border-radius: 10px;
    border-width: 1px;
    width: 45vw;
  }
`