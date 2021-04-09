import React from 'react';
import { Box } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { SelectMenu, TimeSelectMenu, SelectMenuProps, TimeSelectMenuProps } from '@/components/UI/atoms';

interface LectureSearchFilterProps {
  majorSelectMenu: SelectMenuProps;
  daySelectMenu: SelectMenuProps;
  gradeSelectMenu: SelectMenuProps;
  timeSelectMenu: TimeSelectMenuProps;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '1.2rem',

      '& > *': {
        marginRight: '0.3125rem',
      },

      '& > span': {
        color: theme.palette.grey[300],
      },
    },
    majorSelect: {
      width: '10rem',
    },
    daySelect: {
      width: '4.1875rem',
    },
    gradeSelect: {
      width: '4.5rem',
    },
    timeSelect: {
      width: '6.75rem',
    },
  }),
);

const LectureSearchFilter = ({ majorSelectMenu, daySelectMenu, gradeSelectMenu, timeSelectMenu }: LectureSearchFilterProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.majorSelect}>
        <SelectMenu {...majorSelectMenu} dropMenuWidth="10rem" />
      </Box>
      <Box className={classes.daySelect}>
        <SelectMenu {...daySelectMenu} dropMenuWidth="4.1875rem" />
      </Box>
      <Box className={classes.gradeSelect}>
        <SelectMenu {...gradeSelectMenu} dropMenuWidth="4.5rem" />
      </Box>
      <Box className={classes.timeSelect}>
        <TimeSelectMenu {...timeSelectMenu} dropMenuWidth="6.75rem" />
      </Box>
      <span>&#126;</span>
      <Box className={classes.timeSelect}>
        <TimeSelectMenu {...timeSelectMenu} dropMenuWidth="6.75rem" />
      </Box>
    </Box>
  );
};

export { LectureSearchFilter };
export type { LectureSearchFilterProps };
