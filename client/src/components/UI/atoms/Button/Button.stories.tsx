import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { StyledButton, ButtonProps } from '@/components/UI/atoms';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components|basic/Button', // 스토리북에서 보여질 그룹과 경로를 명시
  component: StyledButton, // 어떤 컴포넌트를 문서화 할지 명시
  decorators: [withKnobs], // 애드온 적용
};

export const button = (args: ButtonProps): JSX.Element => {
  return <StyledButton {...args} />;
};

button.story = {
  name: 'Default',
};

button.args = {
  onClick: action('onClick'),
};
