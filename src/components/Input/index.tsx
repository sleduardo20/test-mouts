import React, { InputHTMLAttributes } from 'react';

import * as S from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ReactNode;
}

const Input = ({ name, icon, ...rest }: InputProps) => {
  return (
    <S.Container name={name} icon={icon}>
      {!!icon && icon}
      <input type="text" {...rest} />
    </S.Container>
  );
};

export default Input;
