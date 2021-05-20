import { gql } from '@apollo/client';

export const MEMBER_DUPLICATED_BY_EMAIL = gql`
  query GetMemberDuplicatedByEmail($email: String!) {
    memberDuplicatedByEmail(email: $email)
  }
`;
