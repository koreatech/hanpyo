import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { withStoryBox } from '@/components/HOC';
import { LectureSearchFilter, LectureSearchFilterProps } from './LectureSearchFilter';

export default {
  title: 'molecules/LectureSearchFilter',
  component: LectureSearchFilter,
  decorators: [withKnobs],
} as Meta;

const Template: Story<LectureSearchFilterProps> = (args) => {
  const LectureSearchFilterStory = withStoryBox(args, 600)(LectureSearchFilter);
  return <LectureSearchFilterStory {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  majorSelectMenu: {
    menuLabel: '개설학부',
    menus: [
      { id: 0, title: '컴퓨터공학부', value: 0 },
      { id: 1, title: '디자인공학부', value: 1 },
      { id: 2, title: '기계공학부', value: 2 },
      { id: 3, title: '메카트로닉스공학부', value: 3 },
      { id: 4, title: '전기전자통신공학부', value: 4 },
      { id: 5, title: '에너지신소재화학공학부', value: 5 },
      { id: 6, title: '산업경영학부', value: 6 },
    ],
    onSelectMenuChange: action('onChange'),
  },
  daySelectMenu: {
    menuLabel: '요일',
    menus: [
      { id: 0, title: '월', value: 0 },
      { id: 1, title: '화', value: 1 },
      { id: 2, title: '수', value: 2 },
      { id: 3, title: '목', value: 3 },
      { id: 4, title: '금', value: 4 },
    ],
    onSelectMenuChange: action('onChange'),
  },
  gradeSelectMenu: {
    menuLabel: '학점',
    menus: [
      { id: 0, title: '1학점', value: 0 },
      { id: 1, title: '2학점', value: 1 },
      { id: 2, title: '3학점', value: 3 },
      { id: 3, title: '4학점', value: 4 },
    ],
    onSelectMenuChange: action('onChange'),
  },
  timeSelectMenu: {
    menuLabel: '시간',
    onSelectMenuChange: action('onChange'),
  },
};
