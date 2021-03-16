import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TypographyType } from '@/components/UI/atoms';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '95%',
    height: '1.5rem',
    boxSizing: 'border-box',
    borderRadius: '0.7rem',
    alignItems: 'center',
  },
  header: {
    height: '2.25rem',
    border: `1px solid ${theme.palette.grey[400]}`,
    padding: `0.35rem 0rem`,
    backgroundColor: `${theme.palette.grey[200]}`,
    margin: '0.25rem 0rem',
  },
  item: {
    height: '1.8rem',
    padding: `0.25rem 0rem`,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      '& .MuiBox-root:nth-child(even)': {
        borderLeft: `1px solid white`,
      },
      '& .MuiBox-root> .MuiTypography-root': {
        color: 'white',
      },
    },
  },
  divider: {
    height: '100%',
    borderLeft: `1px solid ${theme.palette.grey[400]}`,
  },
  dividerHover: {
    height: '100%',
    borderLeft: `1px solid white`,
  },
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

const Divider = (): JSX.Element => {
  const classes = useStyles();

  return <Box className={classes.divider} />;
};

enum TitleType {
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
  className: TitleType;
  children: React.ReactChild;
  isHeader: boolean;
}

const Title = ({ className, children, isHeader }: TitleProps): JSX.Element => {
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

interface LectureInfos {
  code: string;
  name: string;
  class: string;
  prof: string;
  grade: string;
  personnel: string;
  dept: string;
  time: string;
}

interface LectureInfoProps {
  isHeader?: boolean;
  infos: LectureInfos;
}

const LectureInfo = ({ isHeader = false, infos }: LectureInfoProps): JSX.Element => {
  const classes = useStyles();
  const subClass = isHeader ? classes.header : classes.item;

  return (
    <Box className={`${classes.root} ${subClass}`}>
      <Title className={TitleType.code} isHeader={isHeader}>
        {infos.code}
      </Title>
      <Divider />
      <Title className={TitleType.name} isHeader={isHeader}>
        {infos.name}
      </Title>
      <Divider />
      <Title className={TitleType.class} isHeader={isHeader}>
        {infos.class}
      </Title>
      <Divider />
      <Title className={TitleType.prof} isHeader={isHeader}>
        {infos.prof}
      </Title>
      <Divider />
      <Title className={TitleType.grade} isHeader={isHeader}>
        {infos.grade}
      </Title>
      <Divider />
      <Title className={TitleType.personnel} isHeader={isHeader}>
        {infos.personnel}
      </Title>
      <Divider />
      <Title className={TitleType.dept} isHeader={isHeader}>
        {infos.dept}
      </Title>
      <Divider />
      <Title className={TitleType.time} isHeader={isHeader}>
        {infos.time}
      </Title>
    </Box>
  );
};

export { LectureInfo };
export type { LectureInfoProps, LectureInfos };
