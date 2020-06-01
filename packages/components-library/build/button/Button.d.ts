import React, { ReactNode } from 'react';
interface Props {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: ReactNode;
}
declare const Button: React.FC<Props>;
export default Button;
