import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Hello, HelloProps } from '@/components/UI/atoms';

export default {
  title: 'components|basic/Hello', // 스토리북에서 보여질 그룹과 경로를 명시
  component: Hello, // 어떤 컴포넌트를 문서화 할지 명시
  decorators: [withKnobs], // 애드온 적용
};

export const hello = (args: HelloProps): JSX.Element => {
  return <Hello {...args} />;
};

hello.story = {
  name: 'Default',
};

hello.args = {
  name: 'a',
  big: true,
  count: 10,
  onHello: action('onHello'),
  onBye: action('onBye'),
};
