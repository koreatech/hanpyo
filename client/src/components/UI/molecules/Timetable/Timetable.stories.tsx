import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Timetable, TimetableProps } from '@/components/UI/molecules';

export default {
  title: 'molecules/Timetable',
  component: Timetable,
  decorators: [withKnobs],
} as Meta;

const Template: Story<TimetableProps> = (args) => <Timetable {...args} />;

export const DefaultTimetable = Template.bind({});
DefaultTimetable.args = {
  row: 10,
  containedSat: false,
};

export const SatTimetable = Template.bind({});
SatTimetable.args = {
  row: 10,
  containedSat: true,
};
