import React from 'react';
import { ModalPopupArea, FindModalContent } from '@/components/UI/molecules';
import { useInputForm } from '@/common/hooks';

interface FindModalPopupProps {
  modalOpen: boolean;
  onModalAreaClose: () => void;
}

interface InputState {
  email: string;
  name: string;
}

const INIT_INPUTS_STATE = {
  email: '',
  name: '',
};

const FindModalPopup = ({ modalOpen, onModalAreaClose }: FindModalPopupProps): JSX.Element => {
  const [inputs, onInputChange, { reset, isEmpty, valids, isValid }] = useInputForm<InputState>(INIT_INPUTS_STATE, { validation: true });

  const onFindBtnClickListener = () => {
    alert('구현예정입니다.');
  };

  const onFindModalCloseListener = () => {
    reset();
    onModalAreaClose();
  };

  const checkFindDisabled = (): boolean => {
    return !(!isEmpty && isValid);
  };

  return (
    <ModalPopupArea modalOpen={modalOpen} onModalClose={onFindModalCloseListener}>
      <FindModalContent valid={valids} isFindDisabled={checkFindDisabled()} onFindBtnClick={onFindBtnClickListener} onInputChange={onInputChange} />
    </ModalPopupArea>
  );
};

export { FindModalPopup };
export type { FindModalPopupProps };
