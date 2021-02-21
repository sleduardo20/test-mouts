import React from 'react';
import { screen, render } from '@testing-library/react';

import Base from '.';

describe('<Base />', () => {
  it('should be able render content in Base', () => {
    render(
      <Base>
        <h1>Content</h1>
      </Base>,
    );

    expect(
      screen.getByRole('heading', { name: 'Content' }),
    ).toBeInTheDocument();
  });

  it('should be able render links slidebar in Base', () => {
    render(
      <Base>
        <h1>Content</h1>
      </Base>,
    );

    expect(screen.getAllByRole('link')).toHaveLength(3);
  });
});
