/* eslint-disable import/no-extraneous-dependencies, react/jsx-props-no-spreading */
import React from 'react';
import type { Story, Meta } from '@storybook/react';

import MobileHeader, { MobileHeaderProps } from './MobileHeader';

export default {
  title: 'Mobile Header',
  component: MobileHeader,
} as Meta<MobileHeaderProps>;

const Template: Story<MobileHeaderProps> = (args) => <MobileHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  onToggleMenu: () => {},
};
