import React from 'react';
import { ModalPopupArea, LoginModalContent } from '@/components/UI/molecules';

interface LoginModalPopupProps {
  modalOpen: boolean;
  onModalAreaClose: () => void;
  onModalBtnClick: () => void;
}

const LoginModalPopup = ({ modalOpen, onModalAreaClose, onModalBtnClick }: LoginModalPopupProps): JSX.Element => {
  return (
    <ModalPopupArea modalOpen={modalOpen} onModalClose={onModalAreaClose}>
      <LoginModalContent onModalClose={onModalBtnClick} />
    </ModalPopupArea>
  );
};

export { LoginModalPopup };
export type { LoginModalPopupProps };
