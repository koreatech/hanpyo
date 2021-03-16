import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TypographyType } from '@/components/UI/atoms';

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
    width: '28%',
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
    width: '14%',
  },
}));

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
  children: React.ReactChild;
  isHeader: boolean;
}

const LectureInfoTitle = ({ className, children, isHeader }: TitleProps): JSX.Element => {
  const classes = useStyles();
  const getClassName = () => {
    return { ...classes }[className];
  };
  const getTypoType = () => {
    if (isHeader) return TypographyType.grey5;
    return TypographyType.grey8;
  };
  return (
    <Box className={`${classes.default} ${getClassName()}`}>
      <Typography size="XS" typoType={getTypoType()}>
        {children}
      </Typography>
    </Box>
  );
};

export { LectureInfoTitle, LectureInfoTitleType };
