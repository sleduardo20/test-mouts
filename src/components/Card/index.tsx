import React from 'react';
import { ArrowRight } from 'styled-icons/feather';

import { CardProps } from '../../types';

import * as S from './styles';

const Card = ({ flag, name, capital }: CardProps) => {
  return (
    <S.Contanier>
      <a href="http://#">
        <S.Flag>
          <img src={flag.svgFile} alt="Flag of country" />
        </S.Flag>
      </a>
      <h2>{name}</h2>
      <span>{capital}</span>

      <a href="http://#">
        <ArrowRight size={24} />
      </a>
    </S.Contanier>
  );
};

export default Card;
