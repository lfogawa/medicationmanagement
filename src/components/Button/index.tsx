import { ButtonProps } from "./interface"
import { ButtonStyled, ButtonStyledDiv } from "./styled"
import { useState } from 'react';

function Button({
  type,
  children
}: ButtonProps) {
  // Check if button is clicked
  const [btnClick, setBtnClick] = useState(false);

  const handleMouseDown = () => {
    setBtnClick(true);
  };

  const handleMouseUp = () => {
    setBtnClick(false);
  };

  return (
    <ButtonStyledDiv>
      <ButtonStyled
        type={type}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className={btnClick ? 'active' : ''}
      >
        {children}
      </ButtonStyled>
    </ButtonStyledDiv>
  );
}

export { Button };