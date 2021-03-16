import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { LectureInfo, LectureInfoProps } from './LectureInfo';

export default {
  title: 'molecules/SearchResult/LectureInfo',
  component: LectureInfo,
  decorators: [withKnobs],
} as Meta;

const Template: Story<LectureInfoProps> = (args) => <LectureInfo {...args} />;

export const Header = Template.bind({});
Header.args = {
  isHeader: true,
  infos: {
    code: '코드',
    name: '강의명',
    class: '분반',
    prof: '교수님',
    grade: '대상',
    personnel: '정원',
    dept: '개설학부',
    time: '시간',
  },
};

export const Item = Template.bind({});
Item.args = {
  infos: {
    code: 'HANPYO',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인/건축',
    time: '09:00-10:00',
  },
};
