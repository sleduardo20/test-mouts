import React, { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: React.ReactNode;
  bg?: 'primary' | 'secondary';
}

const Button = ({ title, icon, bg = 'primary', ...rest }: ButtonProps) => {
  return (
    <S.Container {...rest} bg={bg}>
      {!!icon && icon}
      <span>{title}</span>
    </S.Container>
  );
};

export default Button;
