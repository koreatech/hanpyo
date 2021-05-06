import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { toRem } from '@/common/utils/unit';

enum ButtonType {
  primary = 'primary',
}

interface ButtonStyle {
  width: number;
  height: number;
  borderRadius: number;
  fontSize: number;
}

interface ButtonProps {
  btnType: ButtonType;
  onClick?: () => void;
  children: React.ReactChild;
  style: ButtonStyle;
}

const useStyles = makeStyles({
  primary: ({ width, height, borderRadius, fontSize }: ButtonStyle) => ({
    width: `${toRem(width)}rem`,
    height: `${toRem(height)}rem`,
    borderRadius: `${toRem(borderRadius)}rem`,
    boxShadow: '0 1.5px 3px 0 rgba(0, 0, 0, 0.16)',
    '& > span': {
      fontSize: `${toRem(fontSize)}rem`,
    },
  }),
});

const StyledButton = ({ btnType, onClick, children, style }: ButtonProps): JSX.Element => {
  const classes = useStyles({ ...style });

  const getClassName = () => {
    return { ...classes }[btnType];
  };

  return (
    <Button className={getClassName()} variant="contained" color="primary" onClick={onClick}>
      {children}
    </Button>
  );
};

export { StyledButton, ButtonType };
export type { ButtonProps };
