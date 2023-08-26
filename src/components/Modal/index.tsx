import { ModalProps } from "./interface";
import { ModalBackGroundStyled, ModalContainerStyled } from "./styled";

function Modal({ children }: ModalProps) {
  return (
    <ModalBackGroundStyled>
      <ModalContainerStyled>
          {children}          
      </ModalContainerStyled>
    </ModalBackGroundStyled>
  );
}

export { Modal };
