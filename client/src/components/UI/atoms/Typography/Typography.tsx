import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

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
}

interface TypographyProps {
  children: React.ReactChild;
  size: string;
  typoType: TypographyType;
  css?: string;
  onClick?: () => void;
}

const useStyles = makeStyles((theme) => ({
  primary: {
    color: theme.palette.primary.main,
  },
  secondary: {
    color: theme.palette.secondary.main,
  },
  secondaryDark: {
    color: theme.palette.secondary.dark,
    '&:hover': {
      color: theme.palette.primary.main,
    },
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
}));

const StyledTypography = ({ children, size, typoType, css, onClick }: TypographyProps): JSX.Element => {
  const classes = useStyles({ size });

  const getClassName = () => {
    return { ...classes }[typoType];
  };

  const Sizes: any = {
    XL: '3.5em',
    L: '2.2em',
    M: '1.5em',
    S: '1em',
    XS: '0.7em',
  };

  const getSize = () => {
    return { ...Sizes }[size];
  };

  const StyleTypography = styled(Typography)`
    ${css}
    font-size: ${getSize()}
  `;

  return (
    <StyleTypography className={getClassName()} onClick={onClick}>
      {children}
    </StyleTypography>
  );
};

export { StyledTypography, TypographyType };
export type { TypographyProps };
