/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LectureInfo, LectureInfos } from '@/components/UI/molecules';

interface LectureListContentProps {
  isBasket?: boolean;
  lectureInfos: LectureInfos[] | null;
  onDoubleClick: (lectureInfos: LectureInfos) => void;
  onClick: (lectureInfos: LectureInfos) => void;
}

interface CSSProps {
  isBasket?: boolean;
}

const useStyles = makeStyles((theme) => ({
  rootWrapper: {
    width: '43rem',
    height: (props: CSSProps) => (props.isBasket ? '12rem' : '19rem'),
    margin: '1.2rem 0 0 0',
    padding: '0 0.2rem 0.4rem 0.2rem',
    boxSizing: 'border-box',
    border: `1px solid ${theme.palette.grey[400]}`,
    borderRadius: '0.7rem',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    alignItems: 'center',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '0.25rem',
    width: '100%',
    alignItems: 'center',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: '0.3rem',
      display: 'block',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.grey[300],
      borderRadius: '0.7rem',
    },
  },
  empty: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: (props: CSSProps) => (props.isBasket ? '10rem' : '17rem'),
  },
}));

const headerInfos = {
  code: '코드',
  name: '강의명',
  divisionNumber: '분반',
  professor: '교수님',
  requiredMajor: '대상',
  totalStudentNumber: '정원',
  department: '개설학부',
  room: '강의실',
  credit: '학점',
  lectureTimes: '시간',
};

const LectureListContent = ({ isBasket = false, lectureInfos, onDoubleClick, onClick }: LectureListContentProps): JSX.Element => {
  const classes = useStyles({ isBasket });

  const getLectureInfos = (lectureInfoDatas: Array<LectureInfos> | null): JSX.Element[] => {
    if (!lectureInfoDatas) {
      if (isBasket) return [<div className={classes.empty}>추가된 과목이 없습니다.</div>];
      return [<div className={classes.empty}>검색을 통해 강의를 찾아보세요!</div>];
    }
    if (lectureInfoDatas.length === 0) {
      if (isBasket) return [<div className={classes.empty}>추가된 과목이 없습니다.</div>];
      return [<div className={classes.empty}>설정된 조건에 맞는 데이터가 없습니다.</div>];
    }

    return lectureInfoDatas.map((lectureInfoData: LectureInfos) => {
      return (
        <LectureInfo
          key={`${lectureInfoData.code}${lectureInfoData.divisionNumber}`}
          infos={lectureInfoData}
          onDoubleClick={onDoubleClick}
          onClick={onClick}
          isBasketList={isBasket}
        />
      );
    });
  };

  return (
    <div className={classes.rootWrapper}>
      <div className={classes.root}>
        <LectureInfo isHeader infos={headerInfos} onDoubleClick={() => {}} onClick={() => {}} />
        <div className={classes.body}>{getLectureInfos(lectureInfos)}</div>
      </div>
    </div>
  );
};

export { LectureListContent };
export type { LectureListContentProps };
