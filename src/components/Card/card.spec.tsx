import React from 'react';
import { screen, render } from '@testing-library/react';

import Card, { CardProps } from '.';

const props: CardProps = {
  name: 'Brazil',
  capital: 'Brasília',
  flag: 'https://restcountries.eu/data/bra.svg',
};

describe('<Card />', () => {
  it('should be able render Card correctly', () => {
    render(<Card {...props} />);

    expect(
      screen.getByRole('img', { name: 'Flag of country' }),
    ).toBeInTheDocument();

    expect(screen.getByRole('img')).toHaveAttribute('src', props.flag);

    expect(screen.getAllByRole('heading')).toHaveLength(1);
  });
});
