/* eslint-disable import/no-extraneous-dependencies, react/jsx-props-no-spreading */
import React from 'react';
import type { Story, Meta } from '@storybook/react';

import EmailListItem, { EmailListItemProps } from './EmailListItem';

export default {
  title: 'Email List Item',
  component: EmailListItem,
  decorators: [(Story) => <Story />],
} as Meta<EmailListItemProps>;

const email: EmailListItemProps['email'] = {
  subject: 'Commodi deserunt aut veniam rem ipsam',
  sender: 'Guadalupe Walsh',
  read: false,
  href: '/emails/7',
  date: '1d ago',
  datetime: '2021-01-27T16:35',
  preview:
    'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
};

const Template: Story<EmailListItemProps> = (args) => (
  <EmailListItem {...args} />
);

export const Unread = Template.bind({});
Unread.args = {
  email,
  active: false,
};

export const Read = Template.bind({});
Read.args = {
  email: { ...email, read: true },
  active: false,
};

export const Active = Template.bind({});
Active.args = {
  email,
  active: true,
};
