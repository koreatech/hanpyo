import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Meta, Story } from '@storybook/react/types-6-0';
import { LectureList, LectureListProps } from '@/components/UI/organisms';

export default {
  title: 'organisms/LectureList',
  component: LectureList,
  decorators: [withKnobs],
} as Meta;

const Template: Story<LectureListProps> = (args) => <LectureList {...args} />;

export const searchedLectureList = Template.bind({});
searchedLectureList.args = {
  isBasketList: false,
};

export const basketLectureList = Template.bind({});
basketLectureList.args = {
  isBasketList: true,
};
