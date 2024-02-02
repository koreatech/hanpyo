import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { withStoryBox } from '@/components/HOC';
import { LectureReviewInfo, LectureReviewInfoProps } from './LectureReviewInfo';

export default {
  title: 'molecules/LectureReviewInfo',
  component: LectureReviewInfo,
  decorators: [withKnobs],
} as Meta;

const Template: Story<LectureReviewInfoProps> = (args) => {
  const LectureReviewInfoStory = withStoryBox(args, 500)(LectureReviewInfo);
  return <LectureReviewInfoStory {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  lectureName: '스토리북테스트',
  profName: '진혀쿠님',
  rating: 5,
  period: '2021년도 1학기',
};
