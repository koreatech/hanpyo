import React from 'react';
import { Dialog, makeStyles } from '@material-ui/core';

interface ModalPopupAreaProps {
  modalOpen: boolean;
  onModalClose: () => void;
  children: React.ReactChild;
}

const useStyles = makeStyles({
  root: {
    '& .MuiPaper-rounded': {
      borderRadius: 16,
    },
  },
});

const ModalPopupArea = ({ modalOpen, onModalClose, children }: ModalPopupAreaProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Dialog className={classes.root} open={modalOpen} onClose={onModalClose} aria-labelledby="form-dialog-title">
      {children}
    </Dialog>
  );
};

export { ModalPopupArea };
export type { ModalPopupAreaProps };
