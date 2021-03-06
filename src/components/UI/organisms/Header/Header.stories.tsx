import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Header } from '@/components/UI/organisms';

export default {
  title: 'organisms/Header',
  component: Header,
  decorators: [withKnobs],
} as Meta;

const Template: Story = (args) => <Header {...args} />;

export const Default = Template.bind({});
