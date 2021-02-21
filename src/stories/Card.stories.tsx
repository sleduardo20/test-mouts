import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Card, { CardProps } from '../components/Card';

import mockCard from '../components/Card/mock';

export default {
  title: 'components/Card',
  component: Card,
} as Meta;

export const Basic: Story<CardProps> = args => (
  <div>
    <Card
      flag={mockCard.flag.svgFile}
      name={mockCard.name}
      capital={mockCard.capital}
    />
  </div>
);
