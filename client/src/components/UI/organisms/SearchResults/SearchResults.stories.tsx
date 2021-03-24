import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react/types-6-0';
import { SearchResults } from '@/components/UI/organisms';

export default {
  title: 'organisms/SearchResults',
  component: SearchResults,
  decorators: [withKnobs],
} as Meta;

export const searchResults = () => <SearchResults />;
