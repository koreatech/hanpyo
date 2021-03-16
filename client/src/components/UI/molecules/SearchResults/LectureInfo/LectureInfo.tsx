import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LectureInfoTitle, LectureInfoTitleType, LectureInfoDivider } from '@/components/UI/atoms';

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
}));

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
      <LectureInfoTitle className={LectureInfoTitleType.code} isHeader={isHeader}>
        {infos.code}
      </LectureInfoTitle>
      <LectureInfoDivider />
      <LectureInfoTitle className={LectureInfoTitleType.name} isHeader={isHeader}>
        {infos.name}
      </LectureInfoTitle>
      <LectureInfoDivider />
      <LectureInfoTitle className={LectureInfoTitleType.class} isHeader={isHeader}>
        {infos.class}
      </LectureInfoTitle>
      <LectureInfoDivider />
      <LectureInfoTitle className={LectureInfoTitleType.prof} isHeader={isHeader}>
        {infos.prof}
      </LectureInfoTitle>
      <LectureInfoDivider />
      <LectureInfoTitle className={LectureInfoTitleType.grade} isHeader={isHeader}>
        {infos.grade}
      </LectureInfoTitle>
      <LectureInfoDivider />
      <LectureInfoTitle className={LectureInfoTitleType.personnel} isHeader={isHeader}>
        {infos.personnel}
      </LectureInfoTitle>
      <LectureInfoDivider />
      <LectureInfoTitle className={LectureInfoTitleType.dept} isHeader={isHeader}>
        {infos.dept}
      </LectureInfoTitle>
      <LectureInfoDivider />
      <LectureInfoTitle className={LectureInfoTitleType.time} isHeader={isHeader}>
        {infos.time}
      </LectureInfoTitle>
    </Box>
  );
};

export { LectureInfo };
export type { LectureInfoProps, LectureInfos };
