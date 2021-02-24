import React from 'react';
import { Flag, Home, ArrowLeftCircle } from 'styled-icons/feather';

import { BaseProps } from '../../types';

import * as S from './styles';

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
