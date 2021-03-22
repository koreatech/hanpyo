/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useReactiveVar } from '@apollo/client';
import { useStores } from '@/stores';

enum SnackbarType {
  ADD_SUCCESS = 'ADD_SUCCESS',
  DELETE_SUCCESS = 'DELETE_SUCCESS',
}

const SNACKBAR_MESSAGE = {
  [SnackbarType.ADD_SUCCESS]: '시간표가 추가되었습니다.',
  [SnackbarType.DELETE_SUCCESS]: '시간표가 삭제되었습니다.',
};

const AlertSnackbar = (): JSX.Element => {
  const { snackbarStore } = useStores();
  const open = useReactiveVar(snackbarStore.state.snackbarState);
  const type = useReactiveVar(snackbarStore.state.snackbarType);
  const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    snackbarStore.setSnackbarState(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={1500}
        onClose={handleClose}
        message={SNACKBAR_MESSAGE[type]}
        action={
          <div>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </div>
        }
      />
    </div>
  );
};

export { AlertSnackbar, SnackbarType };
