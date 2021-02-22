import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { Typography, TypographyType } from '@/components/UI/atoms';
import { makeStyles } from '@material-ui/core/styles';

interface HeaderMenuProps {
  children: React.ReactChild;
}

const useStyles = makeStyles((theme) => ({
  menu: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    minHeight: '100%',
    boxSizing: 'border-box',
    margin: '1rem',
    '&:hover': {
      color: theme.palette.primary.main,
      borderBottom: `1rem solid ${theme.palette.primary.main}`,
      borderTop: `1rem solid ${theme.palette.secondary.main}`,
    },
  },
}));

const HeaderMenu = ({ children }: HeaderMenuProps): JSX.Element => {
  const classes = useStyles();
  const [isHover, setIsHover] = useState(false);

  return (
    <Box className={classes.menu} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <Typography size="L" typoType={isHover ? TypographyType.primary : TypographyType.secondaryDark}>
        {children}
      </Typography>
    </Box>
  );
};

export { HeaderMenu };
