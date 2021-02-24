import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Card from '../components/Card';

import mockCard from '../components/Card/mock';
import { CardProps } from '../types';

export default {
  title: 'components/Card',
  component: Card,
  args: mockCard,
} as Meta;

export const Basic: Story<CardProps> = args => (
  <div>
    <Card {...args} />
  </div>
);
