import React from 'react';
import { TextField } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { SelectMenu, TimeSelectMenu, SelectMenuProps, TimeSelectMenuProps, Button, ButtonType } from '@/components/UI/atoms';

interface TimeTableAddFormContentProps {
  daySelectMenu: SelectMenuProps;
  timeSelectMenu: TimeSelectMenuProps;
  onTimeTableFormSubmit: () => void;
}

const DROP_MENU_WIDTH = {
  DAY: '4.1875rem',
  TIME: '6.75rem',
};

const BUTTON_STYLE_PROPS = { width: 60, height: 32.25, borderRadius: 11.2, fontSize: 12 };

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

    daySelect: {
      width: DROP_MENU_WIDTH.DAY,
    },

    timeSelect: {
      width: DROP_MENU_WIDTH.TIME,
    },

    timeTableNameInput: {
      width: '10.8125rem',

      '& .MuiOutlinedInput-root': {
        borderRadius: 0,
      },

      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.grey[300],

        '&: hover': {
          borderColor: theme.palette.primary.main,
        },
      },

      '& .MuiOutlinedInput-input': {
        padding: '0.5625rem 0.875rem',
        color: theme.palette.grey[800],
        fontSize: '0.75rem',
      },
    },
  }),
);

const TimeTableAddFormContent = ({ daySelectMenu, timeSelectMenu, onTimeTableFormSubmit }: TimeTableAddFormContentProps): JSX.Element => {
  const classes = useStyles();

  return (
    <form className={classes.root} onSubmit={onTimeTableFormSubmit}>
      <div className={classes.daySelect}>
        <SelectMenu {...daySelectMenu} dropMenuWidth={DROP_MENU_WIDTH.DAY} />
      </div>
      <div className={classes.timeSelect}>
        <TimeSelectMenu {...timeSelectMenu} dropMenuWidth={DROP_MENU_WIDTH.TIME} />
      </div>
      <div className={classes.timeSelect}>
        <TimeSelectMenu {...timeSelectMenu} dropMenuWidth={DROP_MENU_WIDTH.TIME} />
      </div>
      <TextField
        required
        className={classes.timeTableNameInput}
        id="time-tabel-name"
        variant="outlined"
        InputProps={{
          placeholder: '이름을 입력해주세요. ex ) 근장',
        }}
      />
      <Button btnType={ButtonType.primary} style={BUTTON_STYLE_PROPS}>
        추 가
      </Button>
    </form>
  );
};

export { TimeTableAddFormContent };
export type { TimeTableAddFormContentProps };
