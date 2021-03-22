import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { withStoryBox } from '@/components/HOC';
import { TimeTableModalContent, TimeTableModalType, TimeTableModalContentProps } from './TimeTableModalContent';

export default {
  title: 'molecules/TimeTableModalContent',
  component: TimeTableModalContent,
  decorators: [withKnobs],
} as Meta;

const Template: Story<TimeTableModalContentProps> = (args) => {
  const TimeTableModalContentStory = withStoryBox(args, 300)(TimeTableModalContent);
  return <TimeTableModalContentStory />;
};

export const tapAddModalContent = Template.bind({});
tapAddModalContent.args = {
  modalType: TimeTableModalType.TAB_ADD_MODAL,
  onModalClose: action('onClick'),
};

export const tapRemoveModalContent = Template.bind({});
tapRemoveModalContent.args = {
  modalType: TimeTableModalType.TAB_REMOVE_MODAL,
  onModalClose: action('onClick'),
};
