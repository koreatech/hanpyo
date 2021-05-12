import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { LectureReviewTitle } from '@/components/UI/molecules';
import { withStoryBox } from '@/components/HOC';

export default {
  title: 'molecules/LectureReviewTitle',
  component: LectureReviewTitle,
  decorators: [withKnobs],
} as Meta;

const Template: Story = (args) => {
  const LectureReviewTitleStory = withStoryBox(args, 640)(LectureReviewTitle);
  return <LectureReviewTitleStory {...args} />;
};

export const Default = Template.bind({});
