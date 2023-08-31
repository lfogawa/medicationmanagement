import { MapContainer } from 'react-leaflet';
import styled from "styled-components";
import { StylesProps } from '../../assets/styles/interface';

export const MapContainerStyled = styled(MapContainer)<StylesProps>`
  height: 80vh;
  width: 100%;
  z-index: 1;

  @media (max-width: 800px){
    height: 70vh;
  }
`

export const PopupDivContainerStyled = styled.div<StylesProps>`
  display: flex;
  font-size: 12px;
`

export const PopupDivStyled = styled.div<StylesProps>`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p{
    margin: 0;
    margin-top: 5px;
    margin-bottom: 10px;
    padding: 0;
  }

  @media (max-width: 800px){
    padding: 0;

    p{
      margin-bottom: 0;
    }
  }
`