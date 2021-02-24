import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Loader } from '../components/Loader';

export default {
  title: 'components/Loader',
  component: Loader,
} as Meta;

export const Basic: Story = () => (
  <div style={{ width: 400 }}>
    <Loader />
  </div>
);
