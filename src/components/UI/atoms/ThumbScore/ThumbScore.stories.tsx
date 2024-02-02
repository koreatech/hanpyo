import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Thumb, ThumbProps } from './ThumbScore';

export default {
  title: 'atom/Thumb',
  component: Thumb,
  decorators: [withKnobs],
} as Meta;

const Template: Story<ThumbProps> = (args) => <Thumb {...args} />;

export const Up = Template.bind({});
Up.args = {
  score: 10,
};

export const Down = Template.bind({});
Down.args = {
  thumbDown: true,
  score: 10,
};
