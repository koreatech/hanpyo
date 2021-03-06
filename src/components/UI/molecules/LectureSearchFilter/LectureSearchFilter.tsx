import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { SelectMenu, TimeSelectMenu, SelectMenuProps, TimeSelectMenuProps, Button, ButtonType } from '@/components/UI/atoms';

interface LectureSearchFilterProps {
  majorSelectMenu: SelectMenuProps;
  daySelectMenu: SelectMenuProps;
  gradeSelectMenu: SelectMenuProps;
  startTimeSelectMenu: TimeSelectMenuProps;
  endTimeSelectMenu: TimeSelectMenuProps;
  onInitButtonClickListener: () => void;
}

const DROP_MENU_WIDTH = {
  MAJOR: '10.5rem',
  DAY: '4.6875rem',
  GRADE: '5rem',
  TIME: '7.25rem',
};

const BUTTON_STYLE_PROPS = { width: 80, height: 32.25, borderRadius: 11.2, fontSize: 12 };

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '1.2rem',
      width: '100%',
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

const LectureSearchFilter = ({
  majorSelectMenu,
  daySelectMenu,
  gradeSelectMenu,
  startTimeSelectMenu,
  endTimeSelectMenu,
  onInitButtonClickListener,
}: LectureSearchFilterProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.majorSelect}>
        <SelectMenu {...majorSelectMenu} dropMenuWidth={DROP_MENU_WIDTH.MAJOR} />
      </div>
      <div className={classes.daySelect}>
        <SelectMenu {...daySelectMenu} dropMenuWidth={DROP_MENU_WIDTH.DAY} />
      </div>
      <div className={classes.gradeSelect}>
        <SelectMenu {...gradeSelectMenu} dropMenuWidth={DROP_MENU_WIDTH.GRADE} />
      </div>
      <div className={classes.timeSelect}>
        <TimeSelectMenu {...startTimeSelectMenu} dropMenuWidth={DROP_MENU_WIDTH.TIME} />
      </div>
      <span>&#126;</span>
      <div className={classes.timeSelect}>
        <TimeSelectMenu {...endTimeSelectMenu} dropMenuWidth={DROP_MENU_WIDTH.TIME} />
      </div>
      <div>
        <Button btnType={ButtonType.primary} style={BUTTON_STYLE_PROPS} onClick={onInitButtonClickListener}>
          초기화
        </Button>
      </div>
    </div>
  );
};

export { LectureSearchFilter };
export type { LectureSearchFilterProps };
