import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { withStoryBox } from '@/components/HOC';
import { SelectMenu, SelectMenuProps } from './SelectMenu';

export default {
  title: 'atom/SelectMenu',
  component: SelectMenu,
  decorators: [withKnobs],
} as Meta;

const Template: Story<SelectMenuProps> = (args) => {
  const SelectMenuStory = withStoryBox(args, 160)(SelectMenu);
  return <SelectMenuStory {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  menuLabel: '개설학부',
  menus: [
    { id: 0, title: '컴퓨터공학부', value: 0 },
    { id: 1, title: '디자인공학부', value: 1 },
    { id: 2, title: '기계공학부', value: 2 },
    { id: 3, title: '메카트로닉스공학부', value: 3 },
    { id: 4, title: '전기전자통신공학부', value: 4 },
    { id: 5, title: '에너지신소재화학공학부', value: 5 },
    { id: 6, title: '산업경영학부', value: 6 },
  ],
  dropMenuWidth: 160,
  onSelectMenuChange: action('onChange'),
};
