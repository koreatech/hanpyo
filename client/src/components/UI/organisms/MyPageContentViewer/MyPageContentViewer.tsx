import React from 'react';
import { useReactiveVar } from '@apollo/client';
import { useStores } from '@/stores';
import { MyPageMenuType } from '@/components/UI/atoms';

const MyPageContentViewer = (): JSX.Element => {
  const { myPageStore } = useStores();
  const selectedMenuType = useReactiveVar(myPageStore.state.menuType);

  if (selectedMenuType === MyPageMenuType.MEMBER_INFO) return <>회원정보</>;
  if (selectedMenuType === MyPageMenuType.CHANGE_PASSWORD) return <>비밀번호 변경</>;
  if (selectedMenuType === MyPageMenuType.MY_POSTING) return <>내 게시물</>;
  if (selectedMenuType === MyPageMenuType.FRIEND_MANAGEMENT) return <>친구 관리</>;
  if (selectedMenuType === MyPageMenuType.SHARE) return <>공유</>;
  if (selectedMenuType === MyPageMenuType.LOOKUP_CREDIT) return <>이수학점 현황 조회</>;
  if (selectedMenuType === MyPageMenuType.WITHDRAWAL) return <>회원탈퇴</>;
  return <>컨텐츠 뷰어</>;
};

export { MyPageContentViewer };
