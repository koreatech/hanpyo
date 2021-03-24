import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react/types-6-0';
import { SearchResults } from './SearchResults';

export default {
  title: 'molecules/SearchResult',
  component: SearchResults,
  decorators: [withKnobs],
} as Meta;

const Template = () => <SearchResults />;

export const MainSearchResults = Template.bind({});
