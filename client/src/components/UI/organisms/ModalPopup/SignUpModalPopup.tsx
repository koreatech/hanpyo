import React from 'react';
import { ModalPopupArea, SignUpModalContent } from '@/components/UI/molecules';

interface SignUpModalPopupProps {
  modalOpen: boolean;
  onModalAreaClose: () => void;
  onModalBtnClick: () => void;
}

const SignUpModalPopup = ({ modalOpen, onModalAreaClose, onModalBtnClick }: SignUpModalPopupProps): JSX.Element => {
  return (
    <ModalPopupArea modalOpen={modalOpen} onModalClose={onModalAreaClose}>
      <SignUpModalContent onModalClose={onModalBtnClick} />
    </ModalPopupArea>
  );
};

export { SignUpModalPopup };
export type { SignUpModalPopupProps };
