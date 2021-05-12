import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { LectureReviewRating, LectureReviewRatingProps } from './LectureReviewRating';

export default {
  title: 'atom/LectureReviewRating',
  component: LectureReviewRating,
  decorators: [withKnobs],
} as Meta;

const Template: Story<LectureReviewRatingProps> = (args) => <LectureReviewRating {...args} />;

export const Default = Template.bind({});
Default.args = {
  rating: 3.5,
};
