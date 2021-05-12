import React from 'react';
import { Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  profileRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '12rem',
    height: '5rem',
    borderRadius: '0.65625rem',
    backgroundColor: '#e9e9e9',
  },

  profileInfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '0.3125rem',

    '& > *': {
      marginRight: '0.5rem',

      '&:last-of-type': {
        marginRight: 0,
      },
    },
  },

  profileTextArea: {
    display: 'flex',
    flexDirection: 'column',

    '& > *': {
      marginBottom: '0.3125rem',
      '&:last-child': {
        marginBottom: 0,
      },
    },

    '& > span:first-child': {
      color: theme.palette.grey[600],
      fontSize: '0.9375rem',
    },

    '& > span:last-child': {
      color: theme.palette.grey[500],
      fontSize: '0.6875rem',
    },
  },

  divider: {
    borderLeft: `1px solid ${theme.palette.grey[500]}`,
    margin: '0 0.625rem',
  },

  menuRoot: {
    display: 'flex',
    justifyContent: 'center',
  },

  menuText: {
    fontSize: '0.625rem',

    '& > a, &': {
      color: theme.palette.grey[600],
      textDecoration: 'none',
    },

    '& > a:hover, &:hover': {
      color: theme.palette.primary.main,
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  },
}));

const UserProfile = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.profileRoot}>
      <div className={classes.profileInfo}>
        <div>
          <Avatar alt="profile img" imgProps={{ width: 44, height: 44 }} />
        </div>
        <div className={classes.profileTextArea}>
          <span>김한표</span>
          <span>디자인건축공학부</span>
        </div>
      </div>
      <div className={classes.menuRoot}>
        <Typography
          className={classes.menuText}
          variant="caption"
          onClick={() => {
            alert('로그아웃 구현예정입니다.');
          }}>
          로 그 아 웃
        </Typography>
        <div className={classes.divider} />
        <Typography className={classes.menuText} variant="caption">
          <Link to="/my">마 이 페 이 지</Link>
        </Typography>
      </div>
    </div>
  );
};

export { UserProfile };
