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
    border-color: transparent;
    width: 45vw;
    color: #084420;
    box-shadow: 4px 4px 4px 2px rgba(0,0,0,0.3);
    transition: 400ms;

    &::placeholder{
      color: #084420;
    }

    &:not(:placeholder-shown){
      background-color: #31955F;
      color: #ffffff;
    }

    &:invalid{
      background-color: black;
    }

    &:focus{
      background-color: #31955F;
      color: #ffffff;
      transition: 400ms;
    }

    &:focus::placeholder{
      color: #ffffff;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;}
`