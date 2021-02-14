import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Button, ButtonProps, ButtonType } from '@/components/UI/atoms';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '@/common/styles';

export default {
  title: 'atom/Button',
  component: Button,
  decorators: [withKnobs],
};

export const SaveButton = (args: ButtonProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Button {...args}>저 장</Button>
    </ThemeProvider>
  );
};

SaveButton.story = {
  name: 'SaveButton',
};

SaveButton.args = {
  btnType: ButtonType.save,
  onClick: action('onClick'),
};

export const ShareButton = (args: ButtonProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Button {...args}>공 유</Button>
    </ThemeProvider>
  );
};

ShareButton.story = {
  name: 'ShareButton',
};

ShareButton.args = {
  btnType: ButtonType.share,
  onClick: action('onClick'),
};

export const LoginButton = (args: ButtonProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Button {...args}>로 그 인</Button>
    </ThemeProvider>
  );
};

LoginButton.story = {
  name: 'LoginButton',
};

LoginButton.args = {
  btnType: ButtonType.login,
  onClick: action('onClick'),
};

export const AddButton = (args: ButtonProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Button {...args}>추 가</Button>
    </ThemeProvider>
  );
};

AddButton.story = {
  name: 'AddButton',
};

AddButton.args = {
  btnType: ButtonType.add,
  onClick: action('onClick'),
};
