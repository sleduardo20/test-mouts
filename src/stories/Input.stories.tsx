import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Input from '../components/Input';

export default {
  title: 'components/Input',
  component: Input,
} as Meta;

export const Basic: Story = args => <Input name="search" {...args} />;
