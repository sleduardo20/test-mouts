import React from 'react';

import Base from '../../components/Base';

import * as S from './styles';

import mockCountry from './mock';

const Details = () => {
  return (
    <Base>
      <h1>Details</h1>
      <S.Content>
        {mockCountry.Country.map(item => (
          <S.Info key={item.name}>
            <S.Flag>{item.flag.svgFile}</S.Flag>

            <h2>{item.name}</h2>
            <strong>
              Capital:<span>{item.capital}</span>
            </strong>
            <strong>
              Population:<span>{item.population}</span>
            </strong>
            <strong>
              Area:<span>{item.area}</span>
            </strong>
            <strong>
              Top-Level Domain:<span>{item.topLevelDomains[0].name}</span>
            </strong>
            <strong>
              Official Language:<span>{item.officialLanguages[0].name}</span>
            </strong>
          </S.Info>
        ))}
        <S.Map />
      </S.Content>
    </Base>
  );
};

export default Details;
