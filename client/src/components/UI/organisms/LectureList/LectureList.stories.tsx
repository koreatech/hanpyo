import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react/types-6-0';
import { LectureList } from '@/components/UI/organisms';

export default {
  title: 'organisms/LectureList',
  component: LectureList,
  decorators: [withKnobs],
} as Meta;

export const lectureList = () => <LectureList />;
