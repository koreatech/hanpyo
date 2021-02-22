import React from 'react';
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
    '&:hover': {
      color: theme.palette.primary.main,
      borderBottom: `1rem solid ${theme.palette.primary.main}`,
      borderTop: `1rem solid ${theme.palette.secondary.main}`,
    },
  },
}));

const HeaderMenu = ({ children }: HeaderMenuProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.menu}>
      <Typography size="L" typoType={TypographyType.secondaryDark}>
        {children}
      </Typography>
    </Box>
  );
};

export { HeaderMenu };
