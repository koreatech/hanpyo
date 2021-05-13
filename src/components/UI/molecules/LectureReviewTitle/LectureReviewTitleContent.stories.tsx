import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { withStoryBox } from '@/components/HOC';
import { LectureReviewTitleContent, LectureReviewTitleContentProps } from './LectureReviewTitleContent';

export default {
  title: 'molecules/LectureReviewTitle',
  component: LectureReviewTitleContent,
  decorators: [withKnobs],
} as Meta;

const Template: Story<LectureReviewTitleContentProps> = (args) => {
  const LectureReviewTitleStory = withStoryBox(args, 640)(LectureReviewTitleContent);
  return <LectureReviewTitleStory {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  onWriteBtnClick: action('onClick'),
};
