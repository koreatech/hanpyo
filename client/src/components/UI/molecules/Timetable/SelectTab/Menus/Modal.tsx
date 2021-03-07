/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState, useRef, useEffect } from 'react';
import { useReactiveVar } from '@apollo/client';
import { modalState, modalInfo } from '@/stores/timetable';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Modal, TextField, Button } from '@material-ui/core';
import { Typography, TypographyType } from '@/components/UI/atoms';
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
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      height: '8rem',
      backgroundColor: 'white',
      padding: theme.spacing(4, 7, 4),
    },
    button: {
      width: '25%',
      marginLeft: 'auto',
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
            <Typography size="S" typoType={TypographyType.grey5}>
              {modalInfo().title}
            </Typography>
            {modalInfo().isInputRequired && <TextField label={modalInfo().placeHolder} variant="outlined" onChange={onChange} />}
            <Button className={classes.button} variant="contained" color="primary" onClick={() => modalInfo().onSubmit(input)}>
              {modalInfo().buttonTitle}
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export { TimetableMenuModal };
