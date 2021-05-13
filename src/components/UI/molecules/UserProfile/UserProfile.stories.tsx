import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { UserProfile } from './UserProfile';

export default {
  title: 'molecules/UserProfile',
  component: UserProfile,
  decorators: [withKnobs],
} as Meta;

const Template: Story = (args) => <UserProfile {...args} />;

export const Default = Template.bind({});
