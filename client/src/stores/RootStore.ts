import { ModalStore, TimeTableStore, SnackbarStore } from '@/stores';

class RootStore {
  modalStore: ModalStore;

  timeTableStore: TimeTableStore;

  snackbarStore: SnackbarStore;

  constructor() {
    this.modalStore = new ModalStore(this);
    this.timeTableStore = new TimeTableStore(this);
    this.snackbarStore = new SnackbarStore(this);
  }
}

export default RootStore;
