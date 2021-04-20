import { ModalStore, TimeTableStore, SnackbarStore, LectureInfoStore } from '@/stores';

class RootStore {
  modalStore: ModalStore;

  timeTableStore: TimeTableStore;

  snackbarStore: SnackbarStore;

  lectureInfoStore: LectureInfoStore;

  constructor() {
    this.modalStore = new ModalStore(this);
    this.timeTableStore = new TimeTableStore(this);
    this.snackbarStore = new SnackbarStore(this);
    this.lectureInfoStore = new LectureInfoStore(this);
  }
}

export default RootStore;
