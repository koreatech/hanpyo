/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLectureInfos
// ====================================================

export interface GetLectureInfos_lectureInfos_lectureTimes {
  __typename: "LectureTime";
  start: number;
  end: number;
}

export interface GetLectureInfos_lectureInfos {
  __typename: "Lecture";
  id: string;
  code: string;
  name: string;
  department: string;
  room: string | null;
  professor: string | null;
  credit: number;
  requiredGrade: number | null;
  requiredMajor: string | null;
  divisionNumber: number;
  totalStudentNumber: number;
  lectureTimes: (GetLectureInfos_lectureInfos_lectureTimes | null)[] | null;
}

export interface GetLectureInfos {
  lectureInfos: (GetLectureInfos_lectureInfos | null)[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMyMemberInfo
// ====================================================

export interface GetMyMemberInfo_myMemberInfo {
  __typename: "Member";
  nickname: string | null;
  major: string | null;
}

export interface GetMyMemberInfo {
  myMemberInfo: GetMyMemberInfo_myMemberInfo;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SignUp
// ====================================================

export interface SignUp_signUp {
  __typename: "Member";
  id: string | null;
  email: string | null;
  name: string | null;
  nickname: string | null;
  grade: number | null;
  major: string | null;
  role: string | null;
}

export interface SignUp {
  signUp: SignUp_signUp;
}

export interface SignUpVariables {
  email: string;
  password: string;
  name: string;
  nickname: string;
  grade: number;
  major: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
