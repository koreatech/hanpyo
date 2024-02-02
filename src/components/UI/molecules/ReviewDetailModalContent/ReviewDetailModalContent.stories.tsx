import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { withStoryBox } from '@/components/HOC';
import { ReviewDetailModalContent, ReviewDetailModalType, ReviewDetailModalContentProps } from './ReviewDetailModalContent';

export default {
  title: 'molecules/ReviewDetailModalContent',
  component: ReviewDetailModalContent,
  decorators: [withKnobs],
} as Meta;

const mockData = {
  id: 0,
  infos: {
    lectureName: '디자인커뮤니케이션',
    profName: '윤정식',
    rating: 3.5,
    period: '2020년도 2학기',
  },
  content:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. 안녕하세요 제 이름은 지녀쿠입니다. 한기대학생이 아니지만 한표를 만들고 있답니다 하하',
  tags: ['꿀수업', '진혀쿠', '돔황챠', '진혀쿠', '돔황챠', '진혀쿠', '돔황챠', '진혀쿠', '돔황챠', '진혀쿠', '돔황챠', '진혀쿠', '돔황챠'],
  scores: {
    upScore: 20,
    downScore: 3,
  },
};

const Template: Story<ReviewDetailModalContentProps> = (args) => {
  const ReviewDetailModalContentStory = withStoryBox(args, 700)(ReviewDetailModalContent);
  return <ReviewDetailModalContentStory />;
};

export const OthersReviewDetail = Template.bind({});
OthersReviewDetail.args = {
  data: mockData,
  modalType: ReviewDetailModalType.REVIEW_DETAIL_MODAL,
  onModalClose: action('onClick'),
  onModalModifyBtnClick: action('onClick'),
  onModalDeleteBtnClick: action('onClick'),
};

export const MyReviewDetail = Template.bind({});
MyReviewDetail.args = {
  data: mockData,
  modalType: ReviewDetailModalType.REVIEW_DETAIL_MODAL,
  onModalClose: action('onClick'),
  isMine: true,
  onModalModifyBtnClick: action('onClick'),
  onModalDeleteBtnClick: action('onClick'),
};
