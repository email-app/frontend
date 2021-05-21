/* eslint-disable import/no-extraneous-dependencies, react/jsx-props-no-spreading */
import React from 'react';
import type { Story, Meta } from '@storybook/react';

import Navbar from './Navbar';

export default {
  title: 'Navbar',
  component: Navbar,
  decorators: [
    (Story) => (
      <div className="flex flex-col w-64">
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
