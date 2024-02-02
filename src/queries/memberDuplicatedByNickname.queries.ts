import { gql } from '@apollo/client';

export const MEMBER_DUPLICATED_BY_NICKNAME = gql`
  query GetMemberDuplicatedByNickname($nickname: String!) {
    memberDuplicatedByNickname(nickname: $nickname)
  }
`;
