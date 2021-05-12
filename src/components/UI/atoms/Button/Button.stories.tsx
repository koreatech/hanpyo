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

export const Primary = Template.bind({});
Primary.args = {
  btnType: ButtonType.primary,
  onClick: action('onClick'),
  children: 'Primary',
  style: {
    width: 208,
    height: 36.8,
    borderRadius: 32,
    fontSize: 12.8,
  },
};
