/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react';
import { useReactiveVar } from '@apollo/client';
import { modalState, modalInfo } from '@/stores/timetable';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Modal, TextField, Button } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

const TimetableMenuModal = (): JSX.Element => {
  const classes = useStyles();
  const [input, setInput] = useState();
  const nowModalState = useReactiveVar(modalState);
  const closeModal = () => {
    modalState(false);
  };
  const onChange = (e: any) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={nowModalState}
        onClose={() => closeModal()}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={nowModalState}>
          <div className={classes.paper}>
            {modalInfo().isInputRequired && <TextField label={modalInfo().placeHolder} variant="outlined" onChange={onChange} />}
            <Button color="primary" onClick={() => modalInfo().onSubmit(input)}>
              {modalInfo().buttonTitle}
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export { TimetableMenuModal };
