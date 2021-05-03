import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Footer } from '@/components/UI/organisms';

export default {
  title: 'organisms/Footer',
  component: Footer,
  decorators: [withKnobs],
} as Meta;

const Template: Story = (args) => <Footer {...args} />;

export const Default = Template.bind({});
