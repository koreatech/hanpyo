import { gql } from '@apollo/client';

export const SIGN_UP = gql`
  mutation SignUp($email: String!, $password: String!, $name: String!, $nickname: String!, $grade: Int!, $major: String!) {
    signUp(input: { email: $email, password: $password, name: $name, nickname: $nickname, grade: $grade, major: $major }) {
      id
      email
      name
      nickname
      grade
      major
      role
    }
  }
`;
