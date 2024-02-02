import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { withStoryBox } from '@/components/HOC';
import { FindModalContent, FindModalType, FindModalContentProps } from './FindModalContent';

export default {
  title: 'molecules/FindModalContent',
  component: FindModalContent,
  decorators: [withKnobs],
} as Meta;

const Template: Story<FindModalContentProps> = (args) => {
  const FindModalContentStory = withStoryBox(args, 700)(FindModalContent);
  return <FindModalContentStory />;
};

export const Default = Template.bind({});
Default.args = {
  modalType: FindModalType.FIND_MODAL,
  valid: [true, true],
  isFindDisabled: true,
  onFindBtnClick: action('onClick'),
  onInputChange: action('onChange'),
};
