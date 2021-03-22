import React from 'react';
import { Button, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';

enum TimeTableModalType {
  TAB_ADD_MODAL = 'TAB_ADD_MODAL',
  TAB_REMOVE_MODAL = 'TAB_REMOVE_MODAL',
}

interface TimeTableModalContentProps {
  modalType: TimeTableModalType;
  onModalClose?: () => void;
}

const MODAL_TITLE = {
  [TimeTableModalType.TAB_ADD_MODAL]: '시간표 탭 추가',
  [TimeTableModalType.TAB_REMOVE_MODAL]: '시간표 탭 삭제',
};
const TAB_INPUT_LABEL = '탭 이름';
const SUBMIT_BTN_NAME = {
  [TimeTableModalType.TAB_ADD_MODAL]: '추가',
  [TimeTableModalType.TAB_REMOVE_MODAL]: '삭제',
};

const TimeTableModalContent = ({ modalType, onModalClose }: TimeTableModalContentProps): JSX.Element => {
  const isTabAddModal = (timeTablemodalType: TimeTableModalType): boolean => timeTablemodalType === TimeTableModalType.TAB_ADD_MODAL;

  const getTextField = (timeTablemodalType: TimeTableModalType): JSX.Element | null => {
    if (isTabAddModal(timeTablemodalType)) {
      return <TextField autoFocus margin="dense" id="name" label={TAB_INPUT_LABEL} type="email" fullWidth />;
    }
    return null;
  };

  const onModalCloseListener = () => {
    if (onModalClose) onModalClose();
  };

  return (
    <>
      <DialogTitle id="form-dialog-title">{MODAL_TITLE[modalType]}</DialogTitle>
      <DialogContent>{getTextField(modalType)}</DialogContent>
      <DialogActions>
        <Button onClick={onModalCloseListener} color="primary">
          {SUBMIT_BTN_NAME[modalType]}
        </Button>
      </DialogActions>
    </>
  );
};

export { TimeTableModalContent, TimeTableModalType };
export type { TimeTableModalContentProps };
