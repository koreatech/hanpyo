import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HeaderMenu } from '@/components/UI/atoms';

export default {
  title: 'atom/HeaderMenu',
  component: HeaderMenu,
  decorators: [withKnobs],
} as Meta;

const Template: Story<React.ReactChild> = (args) => <HeaderMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '마이페이지',
};
