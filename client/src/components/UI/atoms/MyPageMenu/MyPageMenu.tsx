import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useStores } from '@/stores';

enum MyPageMenuType {
  MEMBER_INFO = 'MEMBER_INFO',
  CHANGE_PASSWORD = 'CHANGE_PASSWORD',
  MY_POSTING = 'MY_POSTING',
  FRIEND_MANAGEMENT = 'FRIEND_MANAGEMENT',
  SHARE = 'SHARE',
  LOOKUP_CREDIT = 'LOOKUP_CREDIT',
  WITHDRAWAL = 'WITHDRAWAL',
}

interface MyPageMenuProps {
  menuType: MyPageMenuType;
}

const nameMapper = {
  MEMBER_INFO: '회원정보',
  CHANGE_PASSWORD: '비밀번호 변경',
  MY_POSTING: '내 게시물',
  FRIEND_MANAGEMENT: '친구 관리',
  SHARE: '공유',
  LOOKUP_CREDIT: '이수학점 현황 조회',
  WITHDRAWAL: '회원탈퇴',
};

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.grey[500],
    marginBottom: '0.7rem',
    '&:hover': {
      color: theme.palette.primary.main,
      cursor: 'pointer',
    },
  },
}));

const MyPageMenu = ({ menuType }: MyPageMenuProps) => {
  const classes = useStyles();
  const { myPageStore } = useStores();

  const onClickListener = () => {
    myPageStore.state.menuType(MyPageMenuType[menuType]);
  };

  return (
    <Typography variant="h6" className={classes.root} onClick={onClickListener}>
      {nameMapper[menuType]}
    </Typography>
  );
};

export { MyPageMenu, MyPageMenuType };
export type { MyPageMenuProps };
