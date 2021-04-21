import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { withStoryBox } from '@/components/HOC';
import { HashTag, HashTagProps } from './HashTag';

export default {
  title: 'atom/HashTag',
  component: HashTag,
  decorators: [withKnobs],
} as Meta;

const Template: Story<HashTagProps> = (args) => {
  const HashTagStory = withStoryBox(args, 80)(HashTag);
  return <HashTagStory {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: '테스트',
};
