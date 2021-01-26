import React from 'react';
import styled from 'styled-components';
import MUITypography from '@material-ui/core/Typography';

type TypographyProps = {
  fontSize?: number;
  lineHeight?: number;
  variant?: string;
};

const Typography = styled(({ fontSize, lineHeight, ...props }) => <MUITypography {...props} />)<TypographyProps>`
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}px;`}
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight};`}
`;

export { TypographyProps, Typography };
