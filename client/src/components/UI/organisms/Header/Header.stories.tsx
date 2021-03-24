import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Header } from '@/components/UI/molecules';

export default {
  title: 'molecules/Header',
  component: Header,
  decorators: [withKnobs],
} as Meta;

const Template = () => <Header />;

export const MainHeader = Template.bind({});
