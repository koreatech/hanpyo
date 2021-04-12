import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SubTitle } from '@/components/UI/molecules';

export default {
  title: 'molecules/SubTitle',
  component: SubTitle,
  decorators: [withKnobs],
} as Meta;

const Template: Story<React.ReactChild> = (args) => <SubTitle {...args} />;

export const LectureSearch = Template.bind({});
LectureSearch.args = {
  children: '강의 찾기',
};

export const Basket = Template.bind({});
Basket.args = {
  children: '장바구니',
};
