import React from 'react';
import { Button } from '@material-ui/core';

type ButtonProps = {
  onClick?: () => void;
};

const StyledButton = ({ onClick }: ButtonProps): JSX.Element => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      Hello World
    </Button>
  );
};

export { StyledButton };
export type { ButtonProps };
