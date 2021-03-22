import { makeVar, ReactiveVar } from '@apollo/client';
import { RootStore } from '@/stores';
import { TimeTableModalType } from '@/components/UI/molecules';

interface ModalStoreState {
  modalState: ReactiveVar<boolean>;
  modalType: ReactiveVar<TimeTableModalType>;
}

class ModalStore {
  rootStore: RootStore;

  state: ModalStoreState;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.state = {
      modalState: makeVar<boolean>(false),
      modalType: makeVar<TimeTableModalType>(TimeTableModalType.TAB_ADD_MODAL),
    };
  }

  changeModalState(newModalType: TimeTableModalType, newModalState: boolean): void {
    this.setModalType(newModalType);
    this.setModalState(newModalState);
  }

  setModalType(newModalType: TimeTableModalType): void {
    const { modalType } = this.state;

    if (modalType() === newModalType) return;

    modalType(newModalType);
  }

  setModalState(newModalState: boolean): void {
    const { modalState } = this.state;

    if (modalState() === newModalState) return;

    modalState(newModalState);
  }
}

export default ModalStore;
