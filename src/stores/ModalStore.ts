import { makeVar, ReactiveVar } from '@apollo/client';
import { RootStore } from '@/stores';
import { ModalType, modalTypes } from '@/components/UI/organisms';

interface ModalStoreState {
  modalState: ReactiveVar<boolean>;
  modalType: ReactiveVar<ModalType>;
}

class ModalStore {
  rootStore: RootStore;

  state: ModalStoreState;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.state = {
      modalState: makeVar<boolean>(false),
      modalType: makeVar<ModalType>(modalTypes.TAB_ADD_MODAL),
    };
  }

  changeModalState(newModalType: ModalType, newModalState: boolean): void {
    this.setModalType(newModalType);
    this.setModalState(newModalState);
  }

  setModalType(newModalType: ModalType): void {
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
