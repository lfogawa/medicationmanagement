import { css, styled } from "styled-components";
import { StylesProps } from "../../assets/styles/interface";

export const MedicineCardButtonStyled = styled.button<StylesProps>`
  margin: 1em;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  min-height: 250px;
  border-radius: 15px;
  border-color: transparent;
  box-shadow: 4px 4px 4px 2px rgba(0,0,0,0.3);
  transition-duration: 300ms;
  background-color: #084420;
  font-weight: bold;
  color: #FFFFFF;
  overflow-wrap: break-word;


  h3{
    padding: 6px;
    color: #FFFFFF;
    text-align: center;
  }

  p{
    padding: 4px;    
  }

  img{
    margin: 10px;
    width: 250px;
    border-radius: 15px;
  }

  .details{
    margin: 10px;
    font-weight: normal;
  }

  @media (max-width: 600px){
    font-size: 14px;
  }

  @media (min-width: 769px){
    &:hover {
    transform: scale(1.02) translate(1px, 1px); 
    box-shadow: 8px 8px 6px 2px rgba(0,0,0,0.3);
    transition-duration: 300ms;
    background-color: #31955F;
    color: #FFFFFF;
  

  ${props => props.active && css`
    transform: scale(0.95) translate(0px, 0px);
    box-shadow: 4px 4px 4px 2px rgba(0,0,0,0.3);
    color: #FFFFFF;
    background-color: #084420; 
    transition-duration: 150ms;
  `}
  }
  }
`