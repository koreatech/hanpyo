import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HeaderLoginMenu } from '@/components/UI/molecules';

export default {
  title: 'molecules/HeaderLoginMenu',
  component: HeaderLoginMenu,
  decorators: [withKnobs],
} as Meta;

const Template: Story = (args) => <HeaderLoginMenu {...args} />;

export const Default = Template.bind({});
