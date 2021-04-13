import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { withStoryBox } from '@/components/HOC';
import { SignUpModalContent, SignUpModalType, SignUpModalContentProps } from './SignUpModalContent';

export default {
  title: 'molecules/SignUpModalContent',
  component: SignUpModalContent,
  decorators: [withKnobs],
} as Meta;

const Template: Story<SignUpModalContentProps> = (args) => {
  const SignUpModalContentStory = withStoryBox(args, 300)(SignUpModalContent);
  return <SignUpModalContentStory />;
};

export const Default = Template.bind({});
Default.args = {
  modalType: SignUpModalType.SIGN_UP_MODAL,
  onModalClose: action('onClick'),
};
