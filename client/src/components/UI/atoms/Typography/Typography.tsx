import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

enum TypographyType {
  primary = 'primary',
  secondary = 'secondary',
  secondaryDark = 'secondaryDark',
  grey1 = 'grey1',
  grey2 = 'grey2',
  grey3 = 'grey3',
  grey4 = 'grey4',
  grey5 = 'grey5',
  grey6 = 'grey6',
  grey7 = 'grey7',
  grey8 = 'grey8',
  grey9 = 'grey9',
  grey0 = 'grey0',
  white = 'white',
}

interface TypographyProps {
  children: React.ReactChild;
  size: string;
  typoType: TypographyType;
  css?: string;
  onClick?: () => void;
}

interface CSSProps {
  size: string;
}

const useStyles = makeStyles((theme) => ({
  default: {
    fontSize: (props: CSSProps) => props.size,
  },
  primary: {
    color: theme.palette.primary.main,
  },
  secondary: {
    color: theme.palette.secondary.main,
  },
  secondaryDark: {
    color: theme.palette.secondary.dark,
  },
  grey1: {
    color: theme.palette.grey[100],
  },
  grey2: {
    color: theme.palette.grey[200],
  },
  grey3: {
    color: theme.palette.grey[300],
  },
  grey4: {
    color: theme.palette.grey[400],
  },
  grey5: {
    color: theme.palette.grey[500],
  },
  grey6: {
    color: theme.palette.grey[600],
  },
  grey7: {
    color: theme.palette.grey[700],
  },
  grey8: {
    color: theme.palette.grey[800],
  },
  grey9: {
    color: theme.palette.grey[900],
  },
  grey0: {
    color: theme.palette.grey[50],
  },
  white: {
    color: 'white',
  },
}));

const StyledTypography = ({ children, size, typoType, css, onClick }: TypographyProps): JSX.Element => {
  const getClassName = () => {
    return { ...classes }[typoType];
  };

  const Sizes: any = {
    XL: '3.5rem',
    L: '2.0rem',
    M: '1.3rem',
    S: '1rem',
    XS: '0.7rem',
  };

  const getSize = () => {
    return { ...Sizes }[size];
  };
  const classes = useStyles({ size: getSize() });

  return (
    <Typography className={`${classes.default} ${getClassName()}`} onClick={onClick}>
      {children}
    </Typography>
  );
};

export { StyledTypography, TypographyType };
export type { TypographyProps };
