import { styled, css } from "styled-components";
import { StylesProps } from "../../assets/styles/interface";

export const ButtonStyled = styled.button<StylesProps>`
  margin: 1em;
  padding: 10px;
  width: 150px;
  border-radius: 15px;
  border-color: transparent;
  box-shadow: 4px 4px 4px 2px rgba(0,0,0,0.3);
  transition-duration: 300ms;
  background-color: #31955F;
  font-size: 1em;
  font-weight: bold;
  color: #FFFFFF;
  filter: brightness(1); 

  &:hover:enabled {
    transform: scale(1.02) translate(1px, 1px); 
    box-shadow: 8px 8px 6px 2px rgba(0,0,0,0.3);
    transition-duration: 300ms;
    background-color: #31955F;
    color: #FFFFFF;
    filter: brightness(1.15);
  

  ${props => props.active && css`
    transform: scale(0.95) translate(0px, 0px);
    box-shadow: 4px 4px 4px 2px rgba(0,0,0,0.3);
    color: #31955F;
    background-color: #FFFFFF; 
    transition-duration: 150ms;
    filter: brightness(1);
  `}
  }
`