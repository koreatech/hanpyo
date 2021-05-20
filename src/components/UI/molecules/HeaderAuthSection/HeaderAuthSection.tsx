import React from 'react';
import { MY_MEMBER_INFO } from '@/queries';
import { useQuery } from '@apollo/client';
import { GetMyMemberInfo } from '@/api';
import { UserProfile, HeaderLoginMenu } from '@/components/UI/molecules';

const HeaderAuthSection = (): JSX.Element => {
  const { loading, error, data } = useQuery<GetMyMemberInfo>(MY_MEMBER_INFO);

  if (loading || error) return <HeaderLoginMenu />;

  const { myMemberInfo } = data as GetMyMemberInfo;

  return <UserProfile nickname={myMemberInfo.nickname ?? ''} major={myMemberInfo.major ?? ''} />;
};

export { HeaderAuthSection };
