import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react/types-6-0';
import { Notice } from '@/components/UI/molecules';

export default {
  title: 'molecules/Notice',
  component: Notice,
  decorators: [withKnobs],
} as Meta;

const Template = () => <Notice />;

export const MainNotice = Template.bind({});
