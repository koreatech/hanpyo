import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { LoginModalPopup, LoginModalPopupProps } from './LoginModalPopup';

export default {
  title: 'organisms/LoginModalPopup',
  component: LoginModalPopup,
  decorators: [withKnobs],
} as Meta;

const Template: Story<LoginModalPopupProps> = (args) => <LoginModalPopup {...args} />;

export const Default = Template.bind({});
Default.args = {
  modalOpen: true,
  onModalAreaClose: action('onClick'),
};
