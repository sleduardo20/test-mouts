import React from 'react';
import { screen, render } from '@testing-library/react';

import { Search } from 'styled-icons/feather';
import Input from '.';

describe('<Input />', () => {
  it('should be able render with name input correctly', () => {
    const { container } = render(<Input name="search" />);

    const input = container.firstElementChild;

    expect(input).toHaveAttribute('name', 'search');
  });

  it('should be able render with icon', () => {
    render(<Input name="search" icon={<Search aria-label="icon" />} />);

    expect(screen.getByLabelText('icon')).toBeInTheDocument();
  });
});
