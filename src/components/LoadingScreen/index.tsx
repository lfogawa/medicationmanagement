import { LoadingDivContainerStyled, LoadingDivIndicatorStyled, LoadingDivTextStyled } from "./styled";


const LoadingScreen = () =>{
  return (
    <LoadingDivContainerStyled>
      <LoadingDivIndicatorStyled />
      <LoadingDivTextStyled>
        Loading
      </LoadingDivTextStyled>
    </LoadingDivContainerStyled>
  );
};

export { LoadingScreen };