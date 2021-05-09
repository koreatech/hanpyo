import { makeVar, ReactiveVar } from '@apollo/client';
import { RootStore } from '@/stores';
import { MyPageMenuType } from '@/components/UI/atoms';

interface MyPageStoreState {
  menuType: ReactiveVar<MyPageMenuType>;
}

class MyPageStore {
  rootStore: RootStore;

  state: MyPageStoreState;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.state = {
      menuType: makeVar<MyPageMenuType>(MyPageMenuType.MEMBER_INFO),
    };
  }
}

export default MyPageStore;
