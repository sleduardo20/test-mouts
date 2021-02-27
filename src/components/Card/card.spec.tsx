import React from 'react';
import { screen, render } from '@testing-library/react';

import Card from '.';
import { CardProps } from '../../types';

const props: CardProps = {
  name: 'Brazil',
  capital: 'Brasília',
  flag: {
    svgFile: 'https://restcountries.eu/data/bra.svg',
  },
};

describe('<Card />', () => {
  it('should be able render Card correctly', () => {
    render(<Card {...props} />);

    expect(
      screen.getByRole('img', { name: 'Flag of country' }),
    ).toBeInTheDocument();

    expect(screen.getByRole('img')).toHaveAttribute('src', props.flag.svgFile);

    expect(screen.getAllByRole('heading')).toHaveLength(1);
  });
});
