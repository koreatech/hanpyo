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
  nicknameText: {
    color: theme.palette.grey[700],
  },
  majorText: {
    color: theme.palette.grey[500],
  },
  box: {
    border: `1px solid ${theme.palette.grey[400]}`,
    borderRadius: '0.8rem',
    padding: '0.5rem 1.5rem',
    marginTop: '0.5rem',
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
      <Typography variant="h5" className={classes.nicknameText}>
        {myMemberInfo.nickname}님
      </Typography>
      <div className={classes.box}>
        <Typography variant="h6" className={classes.majorText}>
          {myMemberInfo.major}
        </Typography>
      </div>
    </div>
  );
};

export { MyPageMemberInfo };
