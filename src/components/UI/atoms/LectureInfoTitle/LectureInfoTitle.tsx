import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

enum LectureInfoTitleType {
  code = 'code',
  name = 'name',
  class = 'class',
  prof = 'prof',
  grade = 'grade',
  personnel = 'personnel',
  dept = 'dept',
  time = 'time',
}

interface TitleProps {
  className: LectureInfoTitleType;
  children?: JSX.Element[] | string | number;
  isHeader: boolean;
}

const useStyles = makeStyles((theme) => ({
  default: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  code: {
    width: '10%',
  },
  name: {
    width: '24%',
  },
  class: {
    width: '5%',
  },
  prof: {
    width: '12%',
  },
  grade: {
    width: '5%',
  },
  personnel: {
    width: '5%',
  },
  dept: {
    width: '21%',
  },
  time: {
    width: '18%',
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.grey[800],
  },
  headerText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.grey[500],
  },
}));

const LectureInfoTitle = ({ className, children, isHeader }: TitleProps): JSX.Element => {
  const classes = useStyles();
  const getClassName = () => {
    return { ...classes }[className];
  };
  return (
    <div className={`${classes.default} ${getClassName()}`}>
      <Typography className={isHeader ? classes.headerText : classes.text} variant="caption">
        {children}
      </Typography>
    </div>
  );
};

export { LectureInfoTitle, LectureInfoTitleType };
