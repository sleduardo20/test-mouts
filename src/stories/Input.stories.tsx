import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Search } from 'styled-icons/feather';

import Input from '../components/Input';

export default {
  title: 'components/Input',
  component: Input,
  args: {
    placeholder: 'Search country',
  },
} as Meta;

export const Basic: Story = args => (
  <div style={{ width: 400 }}>
    <Input name="search" {...args} />
  </div>
);

export const WithIcon: Story = args => (
  <div style={{ width: 400 }}>
    <Input name="search" icon={<Search />} {...args} />
  </div>
);
