import { DeleteButtonProps } from "./interface"
import { DeleteButtonStyled } from "./styled"
import { useState } from 'react';

function Button({
  type,
  children,
  onClick
}: DeleteButtonProps) {
  // Check if button is clicked
  const [btnClick, setBtnClick] = useState(false);

  const handleMouseDown = () => {
    setBtnClick(true);
  };

  const handleMouseUp = () => {
    setBtnClick(false);
  };

  return (
    <>
      <DeleteButtonStyled
        type={type}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onClick={onClick}
        className={btnClick ? 'active' : ''}
      >
        {children}
      </DeleteButtonStyled>
    </>
  );
}

export { Button };