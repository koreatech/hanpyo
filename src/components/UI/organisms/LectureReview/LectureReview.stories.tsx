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

const mockData = {
  id: 0,
  infos: {
    lectureName: '디자인커뮤니케이션',
    profName: '윤정식',
    rating: 3.5,
    period: '2020년도 2학기',
  },
  content:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. 안녕하세요 제 이름은 지녀쿠입니다. 한기대학생이 아니지만 한표를 만들고 있답니다 하하',
  tags: ['꿀수업', '진혀쿠', '돔황챠', '진혀쿠', '돔황챠', '진혀쿠', '돔황챠', '진혀쿠', '돔황챠', '진혀쿠', '돔황챠', '진혀쿠', '돔황챠'],
  scores: {
    upScore: 20,
    downScore: 3,
  },
};

const Template: Story<LectureReviewProps> = (args) => {
  const LectureReviewStory = withStoryBox(args, 800)(LectureReview);
  return <LectureReviewStory {...args} />;
};

export const MyReview = Template.bind({});
MyReview.args = {
  data: mockData,
  isMine: true,
};

export const OthersReview = Template.bind({});
OthersReview.args = {
  data: mockData,
};
