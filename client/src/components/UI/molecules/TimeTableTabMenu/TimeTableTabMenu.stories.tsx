import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { TimeTableTabMenu, TimeTableTabMenuProps } from './TimeTableTabMenu';

export default {
  title: 'molecules/TimeTableTabMenu',
  component: TimeTableTabMenu,
  decorators: [withKnobs],
} as Meta;

const Template: Story<TimeTableTabMenuProps> = (args) => <TimeTableTabMenu {...args} />;

export const defaultTimeTableTabMenu = Template.bind({});
defaultTimeTableTabMenu.args = {
  tables: [
    {
      index: 1,
      name: '시간표1',
    },
    {
      index: 2,
      name: '시간표2',
    },
    {
      index: 3,
      name: '시간표3',
    },
    {
      index: 4,
      name: '시간표4',
    },
    {
      index: 5,
      name: '시간표5',
    },
  ],
  seletedTab: 1,
  onTimeTableTabChange: action('onClick'),
};
