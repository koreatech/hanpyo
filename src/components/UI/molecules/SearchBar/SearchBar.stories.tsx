import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { SearchBar, SearchBarProps } from '@/components/UI/molecules';

export default {
  title: 'molecules/SearchBar',
  component: SearchBar,
  decorators: [withKnobs],
} as Meta;

const Template: Story<SearchBarProps> = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSearchBarChange: action('onChange'),
};
