import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { TimeTableTabBtnGroup, TimeTableTabBtnGroupProps } from './TimeTableTabBtnGroup';

export default {
  title: 'molecules/TimeTableTabBtnGroup',
  component: TimeTableTabBtnGroup,
  decorators: [withKnobs],
} as Meta;

const Template: Story<TimeTableTabBtnGroupProps> = (args) => <TimeTableTabBtnGroup {...args} />;

export const defaultTimeTableTabBtnGroup = Template.bind({});
defaultTimeTableTabBtnGroup.args = {
  onTabAddBtnClick: action('onClick'),
  onTabRemoveBtnClick: action('onClick'),
};
