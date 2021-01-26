import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TypographyProps, Typography } from './Button';

export default {
  title: 'atom/Typography',
  component: Typography,
} as Meta;

const Template: Story<TypographyProps> = (args) => <Typography {...args}>Hello</Typography>;

export const GoodEmoji = Template.bind({});
GoodEmoji.args = {
  variant: 'h2',
  fontSize: 10,
  lineHeight: 10,
};
