import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { TimeTableModalType } from '@/components/UI/molecules';
import { TimeTableModalPopup, TimeTableModalPopupProps } from './TimeTableModalPopup';

export default {
  title: 'organisms/TimeTableModalPopup',
  component: TimeTableModalPopup,
  decorators: [withKnobs],
} as Meta;

const Template: Story<TimeTableModalPopupProps> = (args) => <TimeTableModalPopup {...args} />;

export const TabAdd = Template.bind({});
TabAdd.args = {
  modalOpen: true,
  modalType: TimeTableModalType.TAB_ADD_MODAL,
  onModalAreaClose: action('onClick'),
  onModalBtnClick: action('onClick'),
};

export const TabRemove = Template.bind({});
TabRemove.args = {
  modalOpen: true,
  modalType: TimeTableModalType.TAB_REMOVE_MODAL,
  onModalAreaClose: action('onClick'),
  onModalBtnClick: action('onClick'),
};
