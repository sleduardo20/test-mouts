import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Search } from 'styled-icons/feather';

import Input from '../components/Input';

export default {
  title: 'components/Input',
  component: Input,
} as Meta;

export const Basic: Story = args => <Input name="search" {...args} />;

export const WithIcon: Story = args => (
  <Input name="search" icon={<Search />} {...args} />
);
