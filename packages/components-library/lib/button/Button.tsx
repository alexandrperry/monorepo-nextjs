import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

const StyledButton = styled.button`
  color: red;
`;

const Button: React.FC<Props> = ({ onClick, children }) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
