import { styled, css } from "styled-components";
import { StylesProps } from "../../assets/styles/interface";

export const ButtonStyledDiv = styled.div<StylesProps>`
  text-align: center;
`

export const ButtonStyled = styled.button<StylesProps>`
  margin: 1em;
  padding: 10px;
  width: 150px;
  cursor: pointer;
  border-radius: 15px;
  border-color: transparent;
  box-shadow: 4px 4px 4px 2px rgba(0,0,0,0.3);
  transition-duration: 300ms;
  background-color: #084420;
  font-size: 1em;
  font-weight: bold;
  color: #FFFFFF;

  @media (min-width: 769px){
    width: 250px;

    &:hover {
    transform: scale(1.02) translate(1px, 1px); 
    box-shadow: 8px 8px 6px 2px rgba(0,0,0,0.3);
    transition-duration: 300ms;
    background-color: #31955F;
    color: #FFFFFF;
  

    &.active {
    transform: scale(0.95) translate(0px, 0px);
    box-shadow: 4px 4px 4px 2px rgba(0,0,0,0.3);
    color: #FFFFFF;
    background-color: #084420; 
    transition-duration: 150ms;
    }
  }
  }
`