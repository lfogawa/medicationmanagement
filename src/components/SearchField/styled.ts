import { styled } from "styled-components";
import { StylesProps } from "../../assets/styles/interface";

export const SearchFieldDivStyled = styled.div<StylesProps>`
  display: flex;
  margin: 2em;
  padding: 0;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    align-items: center;
  }

  input {
    margin-right: 2em;
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
`