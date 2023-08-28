import { styled } from "styled-components";
import { StylesProps } from "../../assets/styles/interface";

export const HeaderDivStyled = styled.div<StylesProps>`
  @media (max-width: 880px) {
    height: 84px;
  }

  @media (min-width: 881px) {
    height: 125px;
  }
`

export const HeaderStyled = styled.header<StylesProps>`
  @media (max-width: 880px) {
    position: fixed;
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    background-color: #FFFFFF;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    box-shadow: 0 5px 5px 0px rgba(0,0,0,0.3);
    z-index: 2;

    .menu-toggle {
      display: flex;
      cursor: pointer;
      flex-direction: column;
      justify-content: center;      
    }

    .bar {
      margin: 3px;
      width: 50px;
      height: 3px;
      border-radius: 5px;
      background-color: #31955F;      
      transition-duration: 400ms;
    }

    .bar {
      margin: ${props => (props.menuOpen ? "6px" : "none")}; 
      transition-duration: 400ms;
    }

    ul {
      display: ${props => (props.menuOpen ? "flex" : "none")};
      left: 0;
      flex-direction: column;
      background-color: #FFFFFF;
      width: 100%;
      list-style: none;
      z-index: 2;
    }

    li {
      margin: 0;
      text-align: center;
      padding: 10px;
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

    img{
      justify-content: center;
      align-items: flex-start;
      width: 70px;
      transition-duration: 400ms;
    }

    img:hover{
      transform: scale(1.1);
      transition-duration: 400ms;     
    }
  }
  
  @media (min-width: 881px) {
    position: fixed;
    width: 100%;
    padding: 2em;
    display: flex;
    justify-content: center;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    border-color: transparent; 
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.3);
    background-color: #FFFFFF;
    z-index: 2;
    
    .menu-toggle {
      display: none;
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