import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { withStoryBox } from '@/components/HOC';
import { LectureReviewThumbs, LectureReviewThumbsProps } from './LectureReviewThumbs';

export default {
  title: 'molecules/LectureReviewThumbs',
  component: LectureReviewThumbs,
  decorators: [withKnobs],
} as Meta;

const Template: Story<LectureReviewThumbsProps> = (args) => {
  const LectureReviewThumbsStory = withStoryBox(args, 250)(LectureReviewThumbs);
  return <LectureReviewThumbsStory {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  upScore: 20,
  downScore: 10,
};
