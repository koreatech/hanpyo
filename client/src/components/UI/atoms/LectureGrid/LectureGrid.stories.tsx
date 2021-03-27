import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { LectureGrid } from '@/components/UI/atoms';

export default {
  title: 'atom/LectureGrid',
  component: LectureGrid,
  decorators: [withKnobs],
} as Meta;

export const lectureGrid = () => <LectureGrid />;
