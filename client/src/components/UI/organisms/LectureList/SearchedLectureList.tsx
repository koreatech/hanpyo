import React from 'react';
import { SnackbarType } from '@/components/UI/atoms';
import { LectureInfos, LectureListContent } from '@/components/UI/molecules';
import { useStores } from '@/stores';
import { isString } from '@/common/utils/typeCheck';
import { useQuery, gql } from '@apollo/client';

const LECTURE_INFOS = gql`
  query GetLectureInfos {
    lectureInfos {
      id
      code
      name
      department
      room
      professor
      credit
      requiredGrade
      requiredMajor
      divisionNumber
      totalStudentNumber
      lectureTimes {
        start
        end
      }
    }
  }
`;

const SearchedLectureList = () => {
  const { timeTableStore, snackbarStore, lectureInfoStore } = useStores();

  const onLectureSearchDoubleClickListener = (lectureInfos: LectureInfos) => {
    if (isString(lectureInfos.lectureTimes)) return;

    timeTableStore.addLectureToTable(lectureInfos);
    snackbarStore.setSnackbarType(SnackbarType.ADD_SUCCESS);
    snackbarStore.setSnackbarState(true);
  };

  const onLectureSearchClickListener = (lectureInfos: LectureInfos) => {
    if (isString(lectureInfos.lectureTimes)) return;

    lectureInfoStore.state.selectedLecture(lectureInfos);
  };

  const { loading, error, data } = useQuery(LECTURE_INFOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data.lectureInfos.slice(0, 20));

  return (
    <LectureListContent
      onClick={onLectureSearchClickListener}
      onDoubleClick={onLectureSearchDoubleClickListener}
      lectureInfos={data.lectureInfos.slice(500, 600)}
    />
  );
};

export { SearchedLectureList };
