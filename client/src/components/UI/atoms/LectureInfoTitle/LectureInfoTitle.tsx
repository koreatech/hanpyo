import React from 'react';
import { Box, Typography } from '@material-ui/core';
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
  children: any;
  isHeader: boolean;
}

interface CSSProps {
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
    color: (props: CSSProps) => (props.isHeader ? theme.palette.grey[500] : theme.palette.grey[800]),
  },
}));

const LectureInfoTitle = ({ className, children, isHeader }: TitleProps): JSX.Element => {
  const classes = useStyles({ isHeader });
  const getClassName = () => {
    return { ...classes }[className];
  };
  return (
    <Box className={`${classes.default} ${getClassName()}`}>
      <Typography className={classes.text} variant="caption">
        {children}
      </Typography>
    </Box>
  );
};

export { LectureInfoTitle, LectureInfoTitleType };
