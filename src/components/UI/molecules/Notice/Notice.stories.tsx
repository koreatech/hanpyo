import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Notice } from '@/components/UI/molecules';

export default {
  title: 'molecules/Notice',
  component: Notice,
  decorators: [withKnobs],
} as Meta;

const Template: Story = (args) => <Notice {...args} />;

export const Default = Template.bind({});
