import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { withStoryBox } from '@/components/HOC';
import { LectureReviewHashTags, LectureReviewHashTagsProps } from './LectureReviewHashTags';

export default {
  title: 'molecules/LectureReviewHashTags',
  component: LectureReviewHashTags,
  decorators: [withKnobs],
} as Meta;

const Template: Story<LectureReviewHashTagsProps> = (args) => {
  const LectureReviewHashTagsStory = withStoryBox(args, 250)(LectureReviewHashTags);
  return <LectureReviewHashTagsStory {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  tags: ['테스트', '스토리북', '진혀쿠'],
};
