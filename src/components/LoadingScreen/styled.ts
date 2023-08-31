import styled from "styled-components";
import { StylesProps } from "../../assets/styles/interface";

export const LoadingDivContainerStyled = styled.div<StylesProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const LoadingDivIndicatorStyled = styled.div<StylesProps>`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #31955F;
  border-radius: 50%;
  width: 75px;
  height: 75px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const LoadingDivTextStyled = styled.div<StylesProps>`
  margin: 1em;
  font-size: 20px;
  font-weight: bold;
  color: #31955F;
`