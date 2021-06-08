import React from 'react';
import { Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MY_MEMBER_INFO } from '@/queries';
import client from '@/apollo';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  image: {
    width: '12rem',
    height: '12rem',
    marginBottom: '2rem',
  },
  text: {
    color: theme.palette.grey[700],
  },
}));

const MyPageMemberInfo = (): JSX.Element => {
  const classes = useStyles();

  const { myMemberInfo } = client.readQuery({
    query: MY_MEMBER_INFO,
  });

  console.log(myMemberInfo);

  return (
    <div className={classes.root}>
      <Avatar alt="profile img" className={classes.image} />
      <Typography variant="h5" className={classes.text}>
        {myMemberInfo.nickname}님
      </Typography>
      <Typography variant="h5" className={classes.text}>
        {myMemberInfo.major}
      </Typography>
    </div>
  );
};

export { MyPageMemberInfo };
