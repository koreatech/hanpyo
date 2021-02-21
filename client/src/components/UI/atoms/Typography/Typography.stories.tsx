import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Typography, TypographyProps, TypographyType } from '@/components/UI/atoms';

export default {
  title: 'atom/Typography',
  component: Typography,
  decorators: [withKnobs],
} as Meta;

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

export const XLTypography = Template.bind({});
XLTypography.args = {
  typoType: TypographyType.primary,
  size: 'XL',
  children: '한표',
};

export const LTypography = Template.bind({});
LTypography.args = {
  typoType: TypographyType.primary,
  size: 'L',
  children: '한표',
};

export const MTypography = Template.bind({});
MTypography.args = {
  typoType: TypographyType.primary,
  size: 'M',
  children: '한표',
};

export const STypography = Template.bind({});
STypography.args = {
  typoType: TypographyType.primary,
  size: 'S',
  children: '한표',
};

export const XSTypography = Template.bind({});
XSTypography.args = {
  typoType: TypographyType.primary,
  size: 'XS',
  children: '한표',
};
