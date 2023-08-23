import { ButtonProps } from "./interface"
import { ButtonStyled } from "./styled"
import { useState } from 'react';

function Button({
  type,
  children
}: ButtonProps) {
  const [btnClick, setBtnClick] = useState(false);

  const handleMouseDown = () => {
    setBtnClick(true);
  };

  const handleMouseUp = () => {
    setBtnClick(false);
  };

  return (
    <>
      <ButtonStyled
        type={type}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        active={btnClick}
      >
        {children}
      </ButtonStyled>
    </>
  );
}

export { Button };