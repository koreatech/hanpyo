import React from 'react';
import Box from '@material-ui/core/Box';
import { Typography, Button, TypographyType } from '@/components/UI/atoms';
import { makeStyles } from '@material-ui/core/styles';
import { HeaderMenu } from './HeaderMenu';
import { HeaderLoginTab } from './HeaderLoginTab';

const useStyles = makeStyles({
  wrapper: {
    height: '12.5vh',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 15%',
  },
  title: {
    padding: '0 30px',
  },
});

const Header = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Box bgcolor="secondary.main" className={classes.wrapper}>
      <Typography size="XL" typoType={TypographyType.primary}>
        한표
      </Typography>
      <HeaderMenu>시간표짜기</HeaderMenu>
      <HeaderMenu>강의후기</HeaderMenu>
      <HeaderMenu>마이페이지</HeaderMenu>
      <HeaderLoginTab />
    </Box>
  );
};

export { Header };
