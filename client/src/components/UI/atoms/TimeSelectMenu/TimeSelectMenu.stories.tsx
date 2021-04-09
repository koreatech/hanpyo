import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { withStoryBox } from '@/components/HOC';
import { TimeSelectMenu } from './TimeSelectMenu';

export default {
  title: 'atom/TimeSelectMenu',
  component: TimeSelectMenu,
  decorators: [withKnobs],
} as Meta;

const Template: Story = (args) => {
  const TimeSelectMenuStory = withStoryBox(args, 110)(TimeSelectMenu);
  return <TimeSelectMenuStory {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  menuLabel: '시간',
  dropMenuWidth: 110,
  onSelectMenuChange: action('onChange'),
};
