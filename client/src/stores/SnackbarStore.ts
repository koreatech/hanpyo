import { makeVar, ReactiveVar } from '@apollo/client';
import { RootStore } from '@/stores';
import { SnackbarType } from '@/components/UI/atoms';

interface SnackbarStoreState {
  snackbarState: ReactiveVar<boolean>;
  snackbarType: ReactiveVar<SnackbarType>;
}

class SnackbarStore {
  rootStore: RootStore;

  state: SnackbarStoreState;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.state = {
      snackbarState: makeVar<boolean>(false),
      snackbarType: makeVar<SnackbarType>(SnackbarType.ADD_SUCCESS),
    };
  }

  setSnackbarState(newSnackbarState: boolean): void {
    const { snackbarState } = this.state;

    if (snackbarState() === newSnackbarState) return;

    snackbarState(newSnackbarState);
  }

  setSnackbarType(newSnackbarType: SnackbarType): void {
    const { snackbarType } = this.state;

    if (snackbarType() === newSnackbarType) return;

    snackbarType(newSnackbarType);
  }
}

export default SnackbarStore;
