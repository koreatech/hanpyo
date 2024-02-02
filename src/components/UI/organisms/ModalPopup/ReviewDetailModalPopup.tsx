import React from 'react';
import { ModalPopupArea, ReviewDetailModalContent } from '@/components/UI/molecules';
import { useStores } from '@/stores';

interface ReviewDetailModalPopupProps {
  modalOpen: boolean;
  onModalAreaClose: () => void;
  onModalModifyBtnClick: () => void;
  onModalDeleteBtnClick: () => void;
}

const ReviewDetailModalPopup = ({
  modalOpen,
  onModalAreaClose,
  onModalModifyBtnClick,
  onModalDeleteBtnClick,
}: ReviewDetailModalPopupProps): JSX.Element => {
  const { lectureReviewStore } = useStores();
  return (
    <ModalPopupArea modalOpen={modalOpen} onModalClose={onModalAreaClose}>
      <ReviewDetailModalContent
        data={lectureReviewStore.getNowSelectedReview()}
        onModalClose={onModalAreaClose}
        onModalModifyBtnClick={onModalModifyBtnClick}
        onModalDeleteBtnClick={onModalDeleteBtnClick}
      />
    </ModalPopupArea>
  );
};

export { ReviewDetailModalPopup };
export type { ReviewDetailModalPopupProps };
