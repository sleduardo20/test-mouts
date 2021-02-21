import React from 'react';
import { Flag, Home, ArrowLeftCircle } from 'styled-icons/feather';

import * as S from './styles';

export interface BaseProps {
  children: React.ReactNode;
}

const Base = ({ children }: BaseProps) => {
  return (
    <S.Container>
      <S.SlideBar>
        <S.GroupIcons>
          <S.Icon>
            <a href="http://#">
              <Home />
            </a>
          </S.Icon>
          <S.Icon>
            <a href="http://#">
              <Flag />
            </a>
          </S.Icon>
          <S.Icon>
            <a href="http://#">
              <ArrowLeftCircle />
            </a>
          </S.Icon>
        </S.GroupIcons>
      </S.SlideBar>
      <S.Wrapper>{children}</S.Wrapper>
    </S.Container>
  );
};

export default Base;
