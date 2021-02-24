import React from 'react';

import { CardProps } from '../../types';

import Base from '../../components/Base';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Input from '../../components/Input';

import * as S from './styles';

const mockCard: CardProps = {
  name: 'Brazil',
  capital: 'Brasília',
  flag: {
    svgFile: 'https://restcountries.eu/data/bra.svg',
  },
};

const Search = () => {
  return (
    <Base>
      <S.Content>
        <h1>Countries Information</h1>

        <form>
          <Input name="search" placeholder="Search country" />
          <Button title="search">Search</Button>
        </form>

        <S.GridCards>
          <Card {...mockCard} />
          <Card {...mockCard} />
          <Card {...mockCard} />
          <Card {...mockCard} />
          <Card {...mockCard} />
          <Card {...mockCard} />
          <Card {...mockCard} />
          <Card {...mockCard} />
          <Card {...mockCard} />
          <Card {...mockCard} />
          <Card {...mockCard} />
          <Card {...mockCard} />
        </S.GridCards>
      </S.Content>
    </Base>
  );
};

export default Search;
