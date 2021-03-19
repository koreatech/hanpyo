import { ModalStore, TimeTableStore } from '@/stores';

class RootStore {
  modalStore: ModalStore;

  timeTableStore: TimeTableStore;

  constructor() {
    this.modalStore = new ModalStore(this);
    this.timeTableStore = new TimeTableStore(this);
  }
}

export default RootStore;
