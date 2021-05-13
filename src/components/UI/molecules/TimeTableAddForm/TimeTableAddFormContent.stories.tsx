import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { withStoryBox } from '@/components/HOC';
import { TimeTableAddFormContent, TimeTableAddFormContentProps } from './TimeTableAddFormContent';

export default {
  title: 'molecules/TimeTableAddFormContent',
  component: TimeTableAddFormContent,
  decorators: [withKnobs],
} as Meta;

const Template: Story<TimeTableAddFormContentProps> = (args) => {
  const TimeTableAddFormContentStory = withStoryBox(args, 590)(TimeTableAddFormContent);
  return <TimeTableAddFormContentStory {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  daySelectMenu: {
    menuLabel: '요일',
    menus: [
      { id: 0, title: '월', value: 0 },
      { id: 1, title: '화', value: 1 },
      { id: 2, title: '수', value: 2 },
      { id: 3, title: '목', value: 3 },
      { id: 4, title: '금', value: 4 },
    ],
    onSelectMenuChange: action('onChange'),
  },
  timeSelectMenu: {
    menuLabel: '시간',
    onSelectMenuChange: action('onChange'),
  },
  onTimeTableFormSubmit: action('onSubmit'),
};
