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

interface CSSProps extends ButtonStyle {
  fullWidth: boolean;
}

interface ButtonProps {
  btnType: ButtonType;
  onClick?: () => void;
  children: React.ReactChild;
  style: ButtonStyle;
  color?: 'inherit' | 'primary' | 'secondary' | 'default' | undefined;
  fullWidth?: boolean;
  disabled?: boolean;
}

const useStyles = makeStyles({
  primary: ({ width, height, borderRadius, fontSize, fullWidth }: CSSProps) => ({
    width: fullWidth ? '100%' : `${toRem(width)}rem`,
    height: `${toRem(height)}rem`,
    borderRadius: `${toRem(borderRadius)}rem`,
    boxShadow: '0 1.5px 3px 0 rgba(0, 0, 0, 0.16)',
    '& > span': {
      fontSize: `${toRem(fontSize)}rem`,
    },
  }),
});

const StyledButton = ({ btnType, onClick, children, style, color = 'primary', fullWidth = false, disabled = false }: ButtonProps): JSX.Element => {
  const classes = useStyles({ ...style, fullWidth });

  const getClassName = () => {
    return { ...classes }[btnType];
  };

  return (
    <Button className={getClassName()} variant="contained" color={color} onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
};

export { StyledButton, ButtonType };
export type { ButtonProps };
