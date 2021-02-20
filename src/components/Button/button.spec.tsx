import React from 'react';
import { screen, render } from '@testing-library/react';

import { Search } from 'styled-icons/feather';
import Button from '.';

describe('<Button />', () => {
  it('should be able render title Button', () => {
    render(<Button title="Salve" />);

    expect(screen.getByRole('button')).toHaveTextContent('Salve');
  });
  it('should be able render Button', () => {
    render(<Button title="Salve" icon={<Search aria-label="icon" />} />);

    expect(screen.getByRole('button')).toHaveTextContent('Salve');
    expect(screen.getByLabelText('icon')).toBeInTheDocument();
  });
});
