import React from 'react';
import { HeaderMenu } from '@/components/UI/atoms';
import { useHistory } from 'react-router-dom';
import { useApolloClient } from '@apollo/client';
import { MY_MEMBER_INFO } from '@/queries';
import { useStores } from '@/stores';

interface NavMenu {
  link: string;
  name: string;
}

const MAIN_PAGE_LINK = '/';

const NAV_MENUS = [
  { link: '/', name: '시간표짜기' },
  { link: '/review', name: '강의후기' },
];

const HeaderNavSection = (): JSX.Element => {
  const history = useHistory();
  const client = useApolloClient();
  const { modalStore, snackbarStore } = useStores();

  const checkAuthState = () => {
    const meberInfo = client.readQuery({ query: MY_MEMBER_INFO });

    return !!meberInfo;
  };

  const onHeaderMenuClickListener = (link: string) => {
    if (link !== MAIN_PAGE_LINK && !checkAuthState()) {
      snackbarStore.showNavFailedMsg();
      history.push(MAIN_PAGE_LINK);
      modalStore.openLoginModal();

      return;
    }
    history.push(link);
  };

  const gerHeaderMenus = (): JSX.Element[] => {
    return NAV_MENUS.map((navMenu: NavMenu) => (
      <HeaderMenu link={navMenu.link} onHeaderMenuClick={onHeaderMenuClickListener}>
        {navMenu.name}
      </HeaderMenu>
    ));
  };

  return <>{gerHeaderMenus()}</>;
};

export { HeaderNavSection };
