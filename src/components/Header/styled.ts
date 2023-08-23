import { styled } from "styled-components";
import { StylesProps } from "../../assets/styles/interface";

export const HeaderStyled = styled.header<StylesProps>`
  @media (max-width: 880px) {
    .menu-toggle {
      display: flex;
      cursor: pointer;
      flex-direction: column;
    }

    .bar {
      width: 25px;
      height: 3px;
      background-color: #084420;
      margin: 3px 0;
    }

    nav ul {
      display: ${props => (props.menuOpen ? "flex" : "none")};
      position: absolute;
      top: 60px;
      left: 0;
      flex-direction: column;
      background-color: #FFFFFF;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
      width: 100%;
      z-index: 1; /* Garante que o menu fique sobreposto aos outros elementos */
    }

    nav li {
      /* Estilos para cada item do menu no modo condensado */
      margin: 0;
      text-align: center;
      padding: 10px 0;
    }
  }
  
  @media (min-width: 881px) {
    padding: 2em;
    display: flex;
    justify-content: center;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    border-bottom-style: solid;
    border-color: transparent; 
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.3);
    
    .menu-toggle {
      display: none;
      cursor: pointer;
      flex-direction: column;
    }

    img{
      margin-right: 2em;
      width: 60px;
    }

    ul{
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0;
    }

    li{
      display: inline-block;
      margin: 20px;
      font-weight: bold;
      font-size: 16px;
      transition-duration: 400ms;
    }

    li:hover{
      text-decoration: underline;
      transition-duration: 400ms;
      color: #31955F;
    }

    li > a{
      text-decoration: none;
      color: #31955F;
    }
  }
`;