import React from 'react';
import { ModalPopupArea, TimeTableModalContent, TimeTableModalType } from '@/components/UI/molecules';

interface TimeTableModalPopupProps {
  modalOpen: boolean;
  modalType: TimeTableModalType;
  onModalAreaClose: () => void;
  onModalBtnClick: () => void;
}

const TimeTableModalPopup = ({ modalOpen, modalType, onModalAreaClose, onModalBtnClick }: TimeTableModalPopupProps): JSX.Element => {
  return (
    <ModalPopupArea modalOpen={modalOpen} onModalClose={onModalAreaClose}>
      <TimeTableModalContent modalType={modalType} onModalClose={onModalBtnClick} />
    </ModalPopupArea>
  );
};

export { TimeTableModalPopup };
export type { TimeTableModalPopupProps };
