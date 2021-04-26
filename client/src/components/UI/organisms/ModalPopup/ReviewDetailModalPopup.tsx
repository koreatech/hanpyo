import React from 'react';
import { ModalPopupArea, ReviewDetailModalContent } from '@/components/UI/molecules';
import { useStores } from '@/stores';

interface ReviewDetailModalPopupProps {
  modalOpen: boolean;
  onModalAreaClose: () => void;
  onModalBtnClick: () => void;
}

const ReviewDetailModalPopup = ({ modalOpen, onModalAreaClose, onModalBtnClick }: ReviewDetailModalPopupProps): JSX.Element => {
  const { lectureReviewStore } = useStores();
  return (
    <ModalPopupArea modalOpen={modalOpen} onModalClose={onModalAreaClose}>
      <ReviewDetailModalContent data={lectureReviewStore.getNowSelectedReview()} onModalClose={onModalBtnClick} />
    </ModalPopupArea>
  );
};

export { ReviewDetailModalPopup };
export type { ReviewDetailModalPopupProps };
