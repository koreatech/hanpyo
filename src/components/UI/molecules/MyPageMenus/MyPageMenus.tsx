import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MyPageMenu, MyPageMenuType } from '@/components/UI/atoms';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const menus = [
  MyPageMenuType.MEMBER_INFO,
  MyPageMenuType.CHANGE_PASSWORD,
  MyPageMenuType.MY_POSTING,
  MyPageMenuType.FRIEND_MANAGEMENT,
  MyPageMenuType.SHARE,
  MyPageMenuType.LOOKUP_CREDIT,
  MyPageMenuType.WITHDRAWAL,
];

const MyPageMenus = () => {
  const classes = useStyles();

  const getMyPageMenus = () => {
    return menus.map((menu) => {
      return <MyPageMenu key={menu} menuType={menu} />;
    });
  };

  return <div className={classes.root}>{getMyPageMenus()}</div>;
};

export { MyPageMenus };
