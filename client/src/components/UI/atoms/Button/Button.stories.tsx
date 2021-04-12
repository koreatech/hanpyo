import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps, ButtonType } from '@/components/UI/atoms';
import { action } from '@storybook/addon-actions';

export default {
  title: 'atom/Button',
  component: Button,
  decorators: [withKnobs],
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Save = Template.bind({});
Save.args = {
  btnType: ButtonType.save,
  onClick: action('onClick'),
  children: '저 장',
};

export const Share = Template.bind({});
Share.args = {
  btnType: ButtonType.share,
  onClick: action('onClick'),
  children: '공 유',
};

export const Login = Template.bind({});
Login.args = {
  btnType: ButtonType.login,
  onClick: action('onClick'),
  children: '로 그 인',
};

export const Add = Template.bind({});
Add.args = {
  btnType: ButtonType.add,
  onClick: action('onClick'),
  children: '추 가',
};
