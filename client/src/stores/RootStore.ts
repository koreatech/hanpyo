import { ModalStore, TimeTableStore, SnackbarStore, LectureInfoStore, LectureReviewStore } from '@/stores';

class RootStore {
  modalStore: ModalStore;

  timeTableStore: TimeTableStore;

  snackbarStore: SnackbarStore;

  lectureInfoStore: LectureInfoStore;

  lectureReviewStore: LectureReviewStore;

  constructor() {
    this.modalStore = new ModalStore(this);
    this.timeTableStore = new TimeTableStore(this);
    this.snackbarStore = new SnackbarStore(this);
    this.lectureInfoStore = new LectureInfoStore(this);
    this.lectureReviewStore = new LectureReviewStore(this);
  }
}

export default RootStore;
