import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

enum TypographyType {
  primary = 'primary',
  secondary = 'secondary',
}

interface TypographyProps {
  children: string;
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
