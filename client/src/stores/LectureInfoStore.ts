import { makeVar, ReactiveVar } from '@apollo/client';
import { RootStore } from '@/stores';
import { LectureInfos } from '@/components/UI/molecules';

interface LectureInfoStoreState {
  lectures: ReactiveVar<LectureInfos[]>;
  selectedLecture: ReactiveVar<LectureInfos | null>;
  basketSelectedLecture: ReactiveVar<LectureInfos | null>;
}

class LectureInfoStore {
  rootStore: RootStore;

  state: LectureInfoStoreState;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.state = {
      lectures: makeVar<LectureInfos[]>(testData),
      selectedLecture: makeVar<LectureInfos | null>(null),
      basketSelectedLecture: makeVar<LectureInfos | null>(null),
    };
  }

  getSameLectures(): LectureInfos[] {
    const { lectures, selectedLecture } = this.state;
    if (selectedLecture() === null) return [];
    return lectures().filter((lecture) => lecture.code === selectedLecture()?.code);
  }
}

const testData = [
  {
    code: '111111',
    name: '리눅스의 기초',
    divisionNumber: '01',
    professor: '도눅스',
    requiredGrade: 3,
    totalStudentNumber: 25,
    department: '디자인건축공학부',
    lectureTimes: [
      { start: 3690, end: 3720 },
      { start: 540, end: 600 },
    ],
  },
  {
    code: '111111',
    name: '리눅스의 기초',
    divisionNumber: '01',
    professor: '도눅스',
    requiredGrade: 3,
    totalStudentNumber: 25,
    department: '디자인건축공학부',
    lectureTimes: [
      { start: 3690, end: 3720 },
      { start: 540, end: 600 },
    ],
  },
  {
    code: '111111',
    name: '리눅스의 기초',
    divisionNumber: '01',
    professor: '도눅스',
    requiredGrade: 3,
    totalStudentNumber: 25,
    department: '디자인건축공학부',
    lectureTimes: [
      { start: 3690, end: 3720 },
      { start: 540, end: 600 },
    ],
  },
  {
    code: '111111',
    name: '리눅스의 기초',
    divisionNumber: '01',
    professor: '도눅스',
    requiredGrade: 3,
    totalStudentNumber: 25,
    department: '디자인건축공학부',
    lectureTimes: [
      { start: 3690, end: 3720 },
      { start: 540, end: 600 },
    ],
  },
  {
    code: '111111',
    name: '리눅스의 기초',
    divisionNumber: '01',
    professor: '도눅스',
    requiredGrade: 3,
    totalStudentNumber: 25,
    department: '디자인건축공학부',
    lectureTimes: [
      { start: 3690, end: 3720 },
      { start: 540, end: 600 },
    ],
  },
  {
    code: '111111',
    name: '리눅스의 기초',
    divisionNumber: '01',
    professor: '도눅스',
    requiredGrade: 3,
    totalStudentNumber: 25,
    department: '디자인건축공학부',
    lectureTimes: [
      { start: 3690, end: 3720 },
      { start: 540, end: 600 },
    ],
  },
  {
    code: '111111',
    name: '리눅스의 기초',
    divisionNumber: '01',
    professor: '도눅스',
    requiredGrade: 3,
    totalStudentNumber: 25,
    department: '디자인건축공학부',
    lectureTimes: [
      { start: 3690, end: 3720 },
      { start: 540, end: 600 },
    ],
  },
  {
    code: '111111',
    name: '리눅스의 기초',
    divisionNumber: '01',
    professor: '도눅스',
    requiredGrade: 3,
    totalStudentNumber: 25,
    department: '디자인건축공학부',
    lectureTimes: [
      { start: 3690, end: 3720 },
      { start: 540, end: 600 },
    ],
  },
  {
    code: '111111',
    name: '리눅스의 기초',
    divisionNumber: '01',
    professor: '도눅스',
    requiredGrade: 3,
    totalStudentNumber: 25,
    department: '디자인건축공학부',
    lectureTimes: [
      { start: 3690, end: 3720 },
      { start: 540, end: 600 },
    ],
  },
  {
    code: '111111',
    name: '리눅스의 기초',
    divisionNumber: '01',
    professor: '도눅스',
    requiredGrade: 3,
    totalStudentNumber: 25,
    department: '디자인건축공학부',
    lectureTimes: [
      { start: 3690, end: 3720 },
      { start: 540, end: 600 },
    ],
  },
  {
    code: '111111',
    name: '리눅스의 기초',
    divisionNumber: '01',
    professor: '도눅스',
    requiredGrade: 3,
    totalStudentNumber: 25,
    department: '디자인건축공학부',
    lectureTimes: [
      { start: 3690, end: 3720 },
      { start: 540, end: 600 },
    ],
  },
  {
    code: '111111',
    name: '리눅스의 기초',
    divisionNumber: '01',
    professor: '도눅스',
    requiredGrade: 3,
    totalStudentNumber: 25,
    department: '디자인건축공학부',
    lectureTimes: [
      { start: 3690, end: 3720 },
      { start: 540, end: 600 },
    ],
  },
];

export default LectureInfoStore;
