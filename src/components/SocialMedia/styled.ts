import { StylesProps } from "../../assets/styles/interface";
import { styled } from "styled-components";

export const SocialMediaDivStyled = styled.div<StylesProps>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  bottom: 0;
  width: 100%;
  background-color: #ffffff;
  margin-top: auto;
  
  a{
    padding: 1em;
  }

  img{
    width: 2.5em;
    transition-duration: 400ms;
  }

  img:hover{
    transform: scale(1.1);
    transition-duration: 400ms;
  }
`