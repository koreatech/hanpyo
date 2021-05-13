import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SearchBar } from '@/components/UI/molecules';

export default {
  title: 'molecules/SearchBar',
  component: SearchBar,
  decorators: [withKnobs],
} as Meta;

const Template: Story = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
