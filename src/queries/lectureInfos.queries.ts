import { gql } from '@apollo/client';

export const LECTURE_INFOS = gql`
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
