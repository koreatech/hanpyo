import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react/types-6-0';
import { Timetable } from '@/components/UI/molecules';

export default {
  title: 'molecules/Timetable',
  component: Timetable,
  decorators: [withKnobs],
} as Meta;

const Template = () => <Timetable />;

export const MainTimetable = Template.bind({});
