import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TypographyType } from '@/components/UI/atoms';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '90%',
    height: '1.5rem',
    boxSizing: 'border-box',
    borderRadius: '0.5rem',
    alignItems: 'center',
  },
  header: {
    height: '2.25rem',
    border: `1px solid ${theme.palette.grey[500]}`,
    padding: `0.35rem 0rem`,
    backgroundColor: `${theme.palette.grey[200]}`,
  },
  item: {
    height: '1.8rem',
    padding: `0.25rem 0rem`,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
    },
  },
  divider: {
    height: '100%',
    borderLeft: `1px solid ${theme.palette.grey[500]}`,
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
    width: '8%',
  },
  name: {
    width: '30%',
  },
  class: {
    width: '5%',
  },
  prof: {
    width: '12%',
  },
  object: {
    width: '12%',
  },
  personnel: {
    width: '5%',
  },
  dept: {
    width: '14%',
  },
  time: {
    width: '14%',
  },
}));

interface DividerProps {
  isHover: boolean;
}

const Divider = ({ isHover = false }: DividerProps): JSX.Element => {
  const classes = useStyles();

  return <Box className={isHover ? classes.dividerHover : classes.divider} />;
};

enum TitleType {
  code = 'code',
  name = 'name',
  class = 'class',
  prof = 'prof',
  object = 'object',
  personnel = 'personnel',
  dept = 'dept',
  time = 'time',
}

interface TitleProps {
  className: TitleType;
  children: React.ReactChild;
  isHover: boolean;
}

const Title = ({ className, children, isHover }: TitleProps): JSX.Element => {
  const classes = useStyles();
  const getClassName = () => {
    return { ...classes }[className];
  };
  return (
    <Box className={`${classes.default} ${getClassName()}`}>
      <Typography size="S" typoType={isHover ? TypographyType.white : TypographyType.grey5}>
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
  object: string;
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
  const [isHover, setIsHover] = useState(false);
  const onMouseEnterEvent = () => {
    if (isHeader) return;
    setIsHover(true);
  };
  const onMouseLeaveEvent = () => {
    if (isHeader) return;
    setIsHover(false);
  };
  return (
    <Box className={`${classes.root} ${subClass}`} onMouseEnter={() => onMouseEnterEvent()} onMouseLeave={() => onMouseLeaveEvent()}>
      <Title className={TitleType.code} isHover={isHover}>
        {infos.code}
      </Title>
      <Divider isHover={isHover} />
      <Title className={TitleType.name} isHover={isHover}>
        {infos.name}
      </Title>
      <Divider isHover={isHover} />
      <Title className={TitleType.class} isHover={isHover}>
        {infos.class}
      </Title>
      <Divider isHover={isHover} />
      <Title className={TitleType.prof} isHover={isHover}>
        {infos.prof}
      </Title>
      <Divider isHover={isHover} />
      <Title className={TitleType.object} isHover={isHover}>
        {infos.object}
      </Title>
      <Divider isHover={isHover} />
      <Title className={TitleType.personnel} isHover={isHover}>
        {infos.personnel}
      </Title>
      <Divider isHover={isHover} />
      <Title className={TitleType.dept} isHover={isHover}>
        {infos.dept}
      </Title>
      <Divider isHover={isHover} />
      <Title className={TitleType.time} isHover={isHover}>
        {infos.time}
      </Title>
    </Box>
  );
};

export { LectureInfo };
export type { LectureInfoProps };
