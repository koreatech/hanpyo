import React from 'react';
import { Tooltip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LectureInfoTitle, LectureInfoTitleType, LectureInfoDivider } from '@/components/UI/atoms';
import { useStores } from '@/stores';
import { useReactiveVar } from '@apollo/client';
import { isString } from '@/common/utils/typeCheck';

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
      opacity: 0.6,
    },
    '&:hover, &[data-selected=true]': {
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
  id?: number;
  code: string;
  name: string;
  divisionNumber: number | string;
  professor: string;
  totalStudentNumber: number | string;
  department: string;
  lectureTimes: Array<TimeTypes> | string;
  room?: string;
  requiredGrade?: number | string;
  requiredMajor?: string;
  credit?: number;
  color?: string;
}

interface LectureInfoProps {
  isHeader?: boolean;
  infos: LectureInfos;
  onDoubleClick: (infos: LectureInfos) => void;
  onClick: (infos: LectureInfos) => void;
  isBasketList?: boolean;
}

const LECTURE_INFO_TOOLTIP_MESSAGE = {
  REMOVE_MESSAGE: '시간표에서 제거하기',
  ADD_MESSAGE: '시간표에 추가하기',
};

const LectureInfo = ({ isHeader = false, infos, onDoubleClick, onClick, isBasketList = false }: LectureInfoProps): JSX.Element => {
  const classes = useStyles();
  const subClass = isHeader ? classes.header : classes.item;

  const { lectureInfoStore } = useStores();

  const nowSelectedLectureInfo = isBasketList
    ? useReactiveVar(lectureInfoStore.state.basketSelectedLecture)
    : useReactiveVar(lectureInfoStore.state.selectedLecture);

  const checkSelectedLecture = (): boolean => {
    return nowSelectedLectureInfo?.code === infos.code && nowSelectedLectureInfo?.divisionNumber === infos.divisionNumber;
  };

  const convertNumberToTime = (time: number): string => {
    const hour = Math.floor((time % 1440) / 60)
      .toString()
      .padStart(2, '0');
    const minute = (time % 60).toString().padEnd(2, '0');

    return `${hour}:${minute}`;
  };

  const convertTimeToString = (times: TimeTypes): string => {
    const days = ['월', '화', '수', '목', '금', '토'];
    const startDay = days[Math.floor(times.start / 1440)];
    const startTime = convertNumberToTime(times.start);
    const endTime = convertNumberToTime(times.end);

    return `${startDay} ${startTime} - ${endTime}`;
  };

  const getLectureTimes = (times: Array<TimeTypes> | string): JSX.Element[] | string => {
    if (isString(times)) return times as string;
    if (!times) return [<></>];

    return (times as TimeTypes[]).map((time) => {
      return (
        <Typography key={time.start} variant="caption">
          {convertTimeToString(time)}
        </Typography>
      );
    });
  };

  return (
    <Tooltip
      title={isBasketList ? LECTURE_INFO_TOOLTIP_MESSAGE.REMOVE_MESSAGE : LECTURE_INFO_TOOLTIP_MESSAGE.ADD_MESSAGE}
      placement="left"
      arrow
      disableHoverListener={isHeader}>
      <div
        className={`${classes.root} ${subClass}`}
        data-selected={checkSelectedLecture()}
        onClick={() => onClick(infos)}
        onDoubleClick={() => onDoubleClick(infos)}>
        <LectureInfoTitle className={LectureInfoTitleType.code} isHeader={isHeader}>
          {infos.code}
        </LectureInfoTitle>
        <LectureInfoDivider />
        <LectureInfoTitle className={LectureInfoTitleType.name} isHeader={isHeader}>
          {infos.name}
        </LectureInfoTitle>
        <LectureInfoDivider />
        <LectureInfoTitle className={LectureInfoTitleType.class} isHeader={isHeader}>
          {infos.divisionNumber}
        </LectureInfoTitle>
        <LectureInfoDivider />
        <LectureInfoTitle className={LectureInfoTitleType.prof} isHeader={isHeader}>
          {infos.professor}
        </LectureInfoTitle>
        <LectureInfoDivider />
        <LectureInfoTitle className={LectureInfoTitleType.personnel} isHeader={isHeader}>
          {infos.totalStudentNumber}
        </LectureInfoTitle>
        <LectureInfoDivider />
        <LectureInfoTitle className={LectureInfoTitleType.grade} isHeader={isHeader}>
          {infos.requiredMajor}
        </LectureInfoTitle>
        <LectureInfoDivider />
        <LectureInfoTitle className={LectureInfoTitleType.dept} isHeader={isHeader}>
          {infos.department}
        </LectureInfoTitle>
        <LectureInfoDivider />
        <LectureInfoTitle className={LectureInfoTitleType.time} isHeader={isHeader}>
          {getLectureTimes(infos.lectureTimes)}
        </LectureInfoTitle>
      </div>
    </Tooltip>
  );
};

export { LectureInfo };
export type { LectureInfoProps, LectureInfos, TimeTypes };
