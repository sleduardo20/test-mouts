import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Search } from 'styled-icons/feather';

import Button from '../components/Button';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    icon: {
      type: '',
    },
  },
} as Meta;

export const Basic: Story = args => (
  <div style={{ width: 400 }}>
    <Button title="Search" {...args} />
  </div>
);

export const WithIcon: Story = args => (
  <div style={{ width: 400 }}>
    <Button title="Search" icon={<Search />} {...args} />
  </div>
);
