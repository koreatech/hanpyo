/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Notifications } from '@material-ui/icons';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '30rem',
    boxSizing: 'border-box',
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: '10rem',
    padding: `0.5rem 1.5rem`,
    margin: '1.2rem 0',
    boxShadow: '0 1.5px 3px 0 rgba(0, 0, 0, 0.16)',
  },
}));

const StyledDiv: any = styled.div`
  display: flex;
  align-items: center;
  color: #ffb84d;
  margin-left: 1rem;
`;

const Notice = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Notifications color="primary" />
      <StyledDiv>공지사항 입니다.</StyledDiv>
    </Box>
  );
};

export { Notice };
