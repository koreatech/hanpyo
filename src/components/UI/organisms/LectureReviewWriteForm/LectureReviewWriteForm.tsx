import React from 'react';
import { TextField } from '@material-ui/core';
import { Button, ButtonType, SelectMenu, LectureReviewRating } from '@/components/UI/atoms';
import { LectureReviewHashTags } from '@/components/UI/molecules';
import { makeStyles } from '@material-ui/core/styles';
import { useSelectMenu } from '@/common/hooks';

interface SelectMenuState {
  semester: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',

    '& > *': {
      marginBottom: '0.9375rem',
      '&:last-child': {
        marginBottom: 0,
      },
    },
  },
  flexArea: {
    display: 'flex',
  },
  textInputArea: {
    '& > *': {
      marginRight: '0.625rem',
      '&:last-child': {
        marginBottom: 0,
      },
    },
  },
  textInput: {
    '& > .MuiOutlinedInput-root': {
      borderRadius: '1.875rem',
    },
  },
  textArea: {
    width: '38.5625rem',
    height: '13.75rem',
    padding: '0.625rem',
    borderColor: theme.palette.grey[400],
    borderRadius: '0.25rem',
    resize: 'none',
    outlineWidth: '0.25rem',
    outlineColor: theme.palette.primary.main,

    '&:hover': {
      borderColor: 'black',
    },
  },
  selectArea: {
    width: '12.5rem',
    marginRight: '0.625rem',
  },
  ratingArea: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.grey[600],
  },
  tagArea: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0.625rem',

    '& > p': {
      marginBottom: '0.3125rem',
      color: theme.palette.grey[600],
      fontSize: '0.8125rem',
    },
  },
  btnArea: {
    justifyContent: 'center',

    '& > *': {
      marginRight: '1.25rem',
      '&:last-child': {
        marginBottom: 0,
      },
    },
  },
}));

const INIT_SELECT_STATE = { semester: '' };

const MOCK_MENUS = [
  { id: 0, title: '1학기', value: 1 },
  { id: 1, title: '2학기', value: 2 },
];
const MOCK_TAGS = ['테스트', '스토리북', '진혀쿠'];

const BUTTON_STYLE_PROPS = { width: 160, height: 36.3, borderRadius: 16, fontSize: 16 };

const LectureReviewWriteForm = (): JSX.Element => {
  const classes = useStyles();
  const [selectState, onSelectMenuClick] = useSelectMenu<SelectMenuState>(INIT_SELECT_STATE);
  const { semester } = selectState;

  return (
    <div className={classes.root}>
      <div className={`${classes.flexArea} ${classes.textInputArea}`}>
        <TextField
          className={classes.textInput}
          type="text"
          label="강의명"
          variant="outlined"
          helperText="강의명을 입력하세요."
          required
          fullWidth
          margin="dense"
          autoFocus
          autoComplete="off"
        />
        <TextField
          className={classes.textInput}
          type="text"
          label="교수명"
          variant="outlined"
          helperText="교수명을 입력하세요."
          required
          fullWidth
          margin="dense"
          autoComplete="off"
        />
      </div>
      <div className={classes.flexArea}>
        <div className={classes.selectArea}>
          <SelectMenu
            value={semester}
            type="semester"
            menuLabel="수강학기 선택"
            menus={MOCK_MENUS}
            dropMenuWidth={200}
            onMenuClick={onSelectMenuClick}
          />
        </div>
        <div className={classes.ratingArea}>
          <span>평점 : </span>
          <LectureReviewRating rating={3.5} />
        </div>
      </div>
      <div>
        <textarea className={classes.textArea} placeholder="강의 평가를 작성해주세요." required />
      </div>
      <div className={classes.tagArea}>
        <p>태그를 최소 2개 선택해주세요.</p>
        <LectureReviewHashTags tags={MOCK_TAGS} />
      </div>
      <div className={`${classes.flexArea} ${classes.btnArea}`}>
        <Button
          btnType={ButtonType.primary}
          style={BUTTON_STYLE_PROPS}
          color="secondary"
          onClick={() => {
            alert('구현예정입니다!');
          }}>
          취 소
        </Button>
        <Button
          btnType={ButtonType.primary}
          style={BUTTON_STYLE_PROPS}
          onClick={() => {
            alert('구현예정입니다!');
          }}>
          저 장
        </Button>
      </div>
    </div>
  );
};

export { LectureReviewWriteForm };
