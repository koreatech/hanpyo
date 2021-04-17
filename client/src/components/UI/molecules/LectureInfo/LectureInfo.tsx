import React from 'react';
import { Tooltip, Typography } from '@material-ui/core';
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
    height: '2rem',
    padding: `0.25rem 0rem`,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      cursor: 'pointer',
      color: 'white',
      '& div:nth-child(even)': {
        borderLeft: `1px solid white`,
      },
      '& div> .MuiTypography-root': {
        color: 'white',
      },
    },
  },
}));

interface TimeTypes {
  start: number;
  end: number;
}

interface LectureInfos {
  code: string;
  name: string;
  class: string;
  prof: string;
  grade: string;
  personnel: string;
  dept: string;
  time: Array<TimeTypes> | string;
  color?: string;
}

interface LectureInfoProps {
  isHeader?: boolean;
  infos: LectureInfos;
  onDoubleClick: (infos: LectureInfos) => void;
  onClick: (infos: LectureInfos) => void;
  isBasketList?: boolean;
}

const LectureInfo = ({ isHeader = false, infos, onDoubleClick, onClick, isBasketList = false }: LectureInfoProps): JSX.Element => {
  const classes = useStyles();
  const subClass = isHeader ? classes.header : classes.item;
  const convertNumberToTime = (time: number) => {
    const hour = Math.floor((time % 1440) / 60)
      .toString()
      .padStart(2, '0');
    const minute = (time % 60).toString().padEnd(2, '0');
    return `${hour}:${minute}`;
  };
  const convertTimeToString = (times: TimeTypes) => {
    const days = ['월', '화', '수', '목', '금', '토'];
    const startDay = days[Math.floor(times.start / 1440)];
    const startTime = convertNumberToTime(times.start);
    const endTime = convertNumberToTime(times.end);
    return `${startDay} ${startTime} - ${endTime}`;
  };
  const getLectureTime = (times: Array<TimeTypes> | string) => {
    if (typeof times === 'string') return times;
    return times.map((time) => {
      return <Typography variant="caption">{convertTimeToString(time)}</Typography>;
    });
  };
  return (
    <Tooltip title={isBasketList ? '시간표에서 제거하기' : '시간표에 추가하기'} placement="left" arrow disableHoverListener={isHeader}>
      <div className={`${classes.root} ${subClass}`} onClick={() => onClick(infos)} onDoubleClick={() => onDoubleClick(infos)}>
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
          {getLectureTime(infos.time)}
        </LectureInfoTitle>
      </div>
    </Tooltip>
  );
};

export { LectureInfo };
export type { LectureInfoProps, LectureInfos, TimeTypes };
