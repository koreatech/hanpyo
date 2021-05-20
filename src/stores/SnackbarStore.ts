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

  showTabAddMsg(): void {
    this.setSnackbarType(SnackbarType.ADD_SUCCESS);
    this.setSnackbarState(true);
  }

  showTabDeleteMsg(): void {
    this.setSnackbarType(SnackbarType.DELETE_SUCCESS);
    this.setSnackbarState(true);
  }

  showSignUpSuccessMsg(): void {
    this.setSnackbarType(SnackbarType.SIGNUP_SUCCESS);
    this.setSnackbarState(true);
  }

  showSignUpFailedMsg(): void {
    this.setSnackbarType(SnackbarType.SIGNUP_FAILED);
    this.setSnackbarState(true);
  }

  showLoginSuccessMsg(): void {
    this.setSnackbarType(SnackbarType.LOGIN_SUCCESS);
    this.setSnackbarState(true);
  }

  showLoginFailedMsg(): void {
    this.setSnackbarType(SnackbarType.LOGIN_FAILED);
    this.setSnackbarState(true);
  }

  showNavFailedMsg(): void {
    this.setSnackbarType(SnackbarType.NAV_FAILED);
    this.setSnackbarState(true);
  }
}

export default SnackbarStore;
