import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Base from '../components/Base';

import { BaseProps } from '../types';

export default {
  title: 'components/Base',
  component: Base,
} as Meta;

export const Basic: Story<BaseProps> = args => (
  <div>
    <Base {...args}>
      <h1>Content</h1>
    </Base>
  </div>
);
