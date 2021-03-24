import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react/types-6-0';
import { HeaderAuthSection } from '@/components/UI/molecules';

export default {
  title: 'molecules/HeaderAuthSection',
  component: HeaderAuthSection,
  decorators: [withKnobs],
} as Meta;

export const headerAuthSection = () => <HeaderAuthSection />;
