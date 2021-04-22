import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { withStoryBox } from '@/components/HOC';
import { LectureReview, LectureReviewProps } from './LectureReview';

export default {
  title: 'organisms/LectureReview',
  component: LectureReview,
  decorators: [withKnobs],
} as Meta;

const Template: Story<LectureReviewProps> = (args) => {
  const LectureReviewStory = withStoryBox(args, 800)(LectureReview);
  return <LectureReviewStory {...args} />;
};

export const MyReview = Template.bind({});
MyReview.args = {
  infos: {
    lectureName: '취준하며놀고먹기',
    profName: '진혀쿠',
    rating: 1.5,
    period: '2021년도 1학기',
  },
  content: '취준하면서 놀고 먹고 싶다구요? 저처럼 공부를 안 하면 된답니다!',
  tags: ['백수', '진혀쿠', '나처럼살지마'],
  scores: {
    upScore: 5,
    downScore: 18,
  },
  isMine: true,
};

export const OthersReview = Template.bind({});
OthersReview.args = {
  infos: {
    lectureName: '멋지게취업하기',
    profName: '갓우진',
    rating: 5,
    period: '2021년도 1학기',
  },
  content: '나는야 갓우진 그린팩토리를 점령할 사람이지!',
  tags: ['취뽀', '신과함께'],
  scores: {
    upScore: 1000,
    downScore: 0,
  },
};
