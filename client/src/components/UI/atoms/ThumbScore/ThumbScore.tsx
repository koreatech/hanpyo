import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ThumbUp from '@material-ui/icons/ThumbUpTwoTone';
import ThumbDown from '@material-ui/icons/ThumbDownTwoTone';

interface ThumbProps {
  thumbDown?: boolean;
  score: number;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  detail: boolean;
}

interface CSSProps {
  thumbDown?: boolean;
}

const useStyles = makeStyles((theme) => ({
  root: ({ thumbDown }: CSSProps) => ({
    display: 'flex',
    borderRadius: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.2rem',
    '&:hover': {
      backgroundColor: thumbDown ? '#FFD8D8' : '#D9E5FF',
      cursor: 'pointer',
    },
  }),
  down: {
    color: '#F15F5F',
  },
  up: {
    color: '#6799FF',
  },
  marginRight: {
    marginRight: '0.2rem',
  },
}));

const Thumb = ({ thumbDown = false, score, onClick, detail }: ThumbProps): JSX.Element => {
  const classes = useStyles({ thumbDown });
  return (
    <div className={classes.root} onClick={onClick}>
      {thumbDown ? (
        <ThumbDown fontSize={detail ? 'large' : 'small'} className={`${classes.down} ${classes.marginRight}`} />
      ) : (
        <ThumbUp fontSize={detail ? 'large' : 'small'} className={`${classes.up} ${classes.marginRight}`} />
      )}
      <Typography className={thumbDown ? classes.down : classes.up} variant={detail ? 'h6' : 'subtitle2'}>
        {score}
      </Typography>
    </div>
  );
};

export { Thumb };
export type { ThumbProps };
