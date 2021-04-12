import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { withStoryBox } from '@/components/HOC';
import { LoginModalContent, LoginModalType, LoginModalContentProps } from './LoginModalContent';

export default {
  title: 'molecules/LoginModalContent',
  component: LoginModalContent,
  decorators: [withKnobs],
} as Meta;

const Template: Story<LoginModalContentProps> = (args) => {
  const LoginModalContentStory = withStoryBox(args, 300)(LoginModalContent);
  return <LoginModalContentStory />;
};

export const Default = Template.bind({});
Default.args = {
  modalType: LoginModalType.LOGIN_MODAL,
  onModalClose: action('onClick'),
};
