import { gql } from '@apollo/client';

export const MY_MEMBER_INFO = gql`
  query GetMyMemberInfo {
    myMemberInfo {
      nickname
      major
    }
  }
`;
