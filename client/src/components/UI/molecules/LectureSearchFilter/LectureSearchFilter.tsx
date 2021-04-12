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

const DROP_MENU_WIDTH = {
  MAJOR: '10rem',
  DAY: '4.1875rem',
  GRADE: '4.5rem',
  TIME: '6.75rem',
};

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
      width: DROP_MENU_WIDTH.MAJOR,
    },
    daySelect: {
      width: DROP_MENU_WIDTH.DAY,
    },
    gradeSelect: {
      width: DROP_MENU_WIDTH.GRADE,
    },
    timeSelect: {
      width: DROP_MENU_WIDTH.TIME,
    },
  }),
);

const LectureSearchFilter = ({ majorSelectMenu, daySelectMenu, gradeSelectMenu, timeSelectMenu }: LectureSearchFilterProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.majorSelect}>
        <SelectMenu {...majorSelectMenu} dropMenuWidth={DROP_MENU_WIDTH.MAJOR} />
      </Box>
      <Box className={classes.daySelect}>
        <SelectMenu {...daySelectMenu} dropMenuWidth={DROP_MENU_WIDTH.DAY} />
      </Box>
      <Box className={classes.gradeSelect}>
        <SelectMenu {...gradeSelectMenu} dropMenuWidth={DROP_MENU_WIDTH.GRADE} />
      </Box>
      <Box className={classes.timeSelect}>
        <TimeSelectMenu {...timeSelectMenu} dropMenuWidth={DROP_MENU_WIDTH.TIME} />
      </Box>
      <span>&#126;</span>
      <Box className={classes.timeSelect}>
        <TimeSelectMenu {...timeSelectMenu} dropMenuWidth={DROP_MENU_WIDTH.TIME} />
      </Box>
    </Box>
  );
};

export { LectureSearchFilter };
export type { LectureSearchFilterProps };
