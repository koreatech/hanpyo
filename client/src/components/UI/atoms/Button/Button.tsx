import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

enum ButtonType {
  save = 'save',
  share = 'share',
  login = 'login',
  add = 'add',
}

interface ButtonProps {
  btnType: ButtonType;
  onClick?: () => void;
  children: React.ReactChild;
}

const useStyles = makeStyles({
  save: {
    width: '13rem',
    height: '2.3rem',
    borderRadius: '2rem',
    boxShadow: '0 1.5px 3px 0 rgba(0, 0, 0, 0.16)',
    '& > span': {
      fontSize: '0.8rem',
    },
  },
  share: {
    width: '13rem',
    height: '2.3rem',
    borderRadius: '2rem',
    boxShadow: '0 1.5px 3px 0 rgba(0, 0, 0, 0.16)',
    '& > span': {
      fontSize: '0.8rem',
    },
  },
  login: {
    width: '12rem',
    height: '2.2rem',
    borderRadius: '4px',
    boxShadow: '0.5px 0.5px 0.5px 0 rgba(0, 0, 0, 0.16)',
    '& > span': {
      fontSize: '1.2rem',
    },
  },
  add: {
    width: '39.6px',
    height: '15.5px',
    boxShadow: '0 0.5px 1.5px 0 rgba(0, 0, 0, 0.16)',
    '& > span': {
      fontSize: '6px',
    },
  },
});

const StyledButton = ({ btnType, onClick, children }: ButtonProps): JSX.Element => {
  const classes = useStyles();

  const getClassName = () => {
    return { ...classes }[btnType];
  };

  const getColor = () => (btnType === ButtonType.share ? 'secondary' : 'primary');

  return (
    <Button className={getClassName()} variant="contained" color={getColor()} onClick={onClick}>
      {children}
    </Button>
  );
};

export { StyledButton, ButtonType };
export type { ButtonProps };
