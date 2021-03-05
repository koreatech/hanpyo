import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react/types-6-0';
import { SelectTab } from '@/components/UI/molecules';

export default {
  title: 'molecules/SelectTab',
  component: SelectTab,
  decorators: [withKnobs],
} as Meta;

const Template = () => <SelectTab />;

export const DefaultSelectTab = Template.bind({});
