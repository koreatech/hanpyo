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

const MODAL_INFO = {
  [TimeTableModalType.TAB_ADD_MODAL]: {
    TITLE: '시간표 탭을 추가할까요?',
    TAB_LABEL: '탭 이름',
    SUBMIT_BTN_NAME: '추가',
  },
  [TimeTableModalType.TAB_REMOVE_MODAL]: {
    TITLE: '시간표 탭을 삭제할까요?',
    SUBMIT_BTN_NAME: '삭제',
  },
};

const TimeTableModalContent = ({ modalType, onModalClose }: TimeTableModalContentProps): JSX.Element => {
  const isTabAddModal = (timeTableModalType: TimeTableModalType): boolean => timeTableModalType === TimeTableModalType.TAB_ADD_MODAL;

  const getTextField = (timeTableModalType: TimeTableModalType): JSX.Element | null => {
    if (isTabAddModal(timeTableModalType)) {
      return <TextField autoFocus margin="dense" id="name" label={MODAL_INFO[TimeTableModalType.TAB_ADD_MODAL].TAB_LABEL} type="email" fullWidth />;
    }
    return null;
  };

  return (
    <>
      <DialogTitle id="form-dialog-title">{MODAL_INFO[modalType].TITLE}</DialogTitle>
      <DialogContent>{getTextField(modalType)}</DialogContent>
      <DialogActions>
        <Button onClick={onModalClose} color="primary">
          {MODAL_INFO[modalType].SUBMIT_BTN_NAME}
        </Button>
      </DialogActions>
    </>
  );
};

export { TimeTableModalContent, TimeTableModalType };
export type { TimeTableModalContentProps };
