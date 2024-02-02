import React from 'react';
import { SearchedLectureList, BasketLectureList } from '@/components/UI/organisms';

interface LectureListProps {
  isBasket?: boolean;
}

const LectureList = ({ isBasket = false }: LectureListProps): JSX.Element => {
  if (isBasket) return <BasketLectureList />;
  return <SearchedLectureList />;
};

export { LectureList };
