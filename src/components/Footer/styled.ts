import { styled } from "styled-components"
import { StylesProps } from "../../assets/styles/interface"

export const FooterDivContainerStyled = styled.div<StylesProps>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #ffffff;
  padding: 3em;
  height: 25vh;
  background-color: #084420;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  font-size: 14px;

  ul{
    font-weight: bold;
  }

  li{
    padding: 1em;
    list-style: none;
  }

  li > a{
    text-decoration: none;
    color: #ffffff; 
  }

  li > a:hover{
    text-decoration: underline;
    color: #ffffff;
  }

  img{
    width: 85px;
    transition-duration: 400ms;
  }

  img:hover{
    transform: scale(1.1);
    transition-duration: 400ms;
  }
  
  @media (max-width: 700px){
    img{
      width: 70px;
      margin-right: 10px;
    }
  }

  @media (max-width: 600px){
    height: 45vw;

    img{
      width: 50px;
      margin-right: 20px;
    }
  }
`