import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useReactiveVar } from '@apollo/client';
import { useStores } from '@/stores';

enum SnackbarType {
  ADD_SUCCESS = 'ADD_SUCCESS',
  DELETE_SUCCESS = 'DELETE_SUCCESS',
  SIGNUP_SUCCESS = 'SIGNUP_SUCCESS',
  SIGNUP_FAILED = 'SIGNUP_FAILED',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILED = 'LOGIN_FAILED',
}

const SNACKBAR_MESSAGE = {
  [SnackbarType.ADD_SUCCESS]: '시간표가 추가되었습니다.',
  [SnackbarType.DELETE_SUCCESS]: '시간표가 삭제되었습니다.',
  [SnackbarType.SIGNUP_SUCCESS]: '정상적으로 회원가입되었습니다.',
  [SnackbarType.SIGNUP_FAILED]: '회원가입이 실패하였습니다. 다시 시도해주세요.',
  [SnackbarType.LOGIN_SUCCESS]: '정상적으로 로그인되었습니다.',
  [SnackbarType.LOGIN_FAILED]: '로그인이 실패하였습니다. 다시 시도해주세요.',
};

const AlertSnackbar = (): JSX.Element => {
  const { snackbarStore } = useStores();
  const snackbarState = useReactiveVar(snackbarStore.state.snackbarState);
  const snackbarType = useReactiveVar(snackbarStore.state.snackbarType);

  const onSnackbarCloseListener = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
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
        open={snackbarState}
        autoHideDuration={1500}
        onClose={onSnackbarCloseListener}
        message={SNACKBAR_MESSAGE[snackbarType]}
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={onSnackbarCloseListener}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </div>
  );
};

export { AlertSnackbar, SnackbarType };