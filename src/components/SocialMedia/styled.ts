import { StylesProps } from "../../assets/styles/interface";
import { styled } from "styled-components";

export const SocialMediaDivStyled = styled.div<StylesProps>`
  position: fixed;
  display: flex;
  justify-content: center;
  flex-direction: flex-end;
  bottom: 0;
  width: 100%;
  
  a{
    padding: 1em;
  }

  img{
    width: 2.5em;
  }
`