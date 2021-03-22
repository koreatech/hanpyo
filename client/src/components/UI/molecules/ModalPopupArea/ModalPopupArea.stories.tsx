import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { Box } from '@material-ui/core';
import { ModalPopupArea, ModalPopupAreaProps } from './ModalPopupArea';

export default {
  title: 'molecules/ModalPopupArea',
  component: ModalPopupArea,
  decorators: [withKnobs],
} as Meta;

const TestModalContent = (): JSX.Element => {
  return <Box width={300} height={200} />;
};

const Template: Story<ModalPopupAreaProps> = (args) => (
  <ModalPopupArea {...args}>
    <TestModalContent />
  </ModalPopupArea>
);

export const TestModalPopupArea = Template.bind({});
TestModalPopupArea.args = {
  modalOpen: true,
  onModalClose: action('onClick'),
};
