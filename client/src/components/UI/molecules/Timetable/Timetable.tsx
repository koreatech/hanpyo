import React from 'react';
import Box from '@material-ui/core/Box';
import { LectureGrid, LectureBox } from '@/components/UI/atoms';
import { makeStyles } from '@material-ui/core/styles';

interface TimetableProps {
  row: number;
  containedSat: boolean;
}

const useStyles = makeStyles((theme) => ({
  root: (props: TimetableProps) => ({
    display: 'grid',
    position: 'relative',
    gridTemplateRows: `repeat(${props.row + 1}, 1fr)`,
    gridTemplateColumns: `repeat(${props.containedSat ? 7 : 6}, 1fr)`,
    width: '30rem',
    height: '44rem',
    border: `1px solid ${theme.palette.grey[300]}`,
    borderTopLeftRadius: `1rem`,
    borderTopRightRadius: `1rem`,
  }),
  time: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.8rem',
    color: theme.palette.grey[600],
    borderTop: `1px solid ${theme.palette.grey[300]}`,
    borderRight: `1px solid ${theme.palette.grey[300]}`,
  },
  header: {
    display: 'flex',
    backgroundColor: '#fffaf3',
    boxSizing: 'border-box',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.grey[600],
  },
  headerFirst: {
    backgroundColor: '#fffaf3',
    borderTopLeftRadius: `1rem`,
  },
  headerEnd: {
    display: 'flex',
    backgroundColor: '#fffaf3',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: `1rem`,
    color: theme.palette.grey[600],
  },
}));

const Timetable = ({ row, containedSat }: TimetableProps): JSX.Element => {
  const classes = useStyles({ row, containedSat });
  const fillTableHeader = () => {
    const array = [];
    array.push(<Box className={classes.headerFirst} />);
    array.push(<Box className={classes.header}>Mon</Box>);
    array.push(<Box className={classes.header}>Tue</Box>);
    array.push(<Box className={classes.header}>Wed</Box>);
    array.push(<Box className={classes.header}>Thu</Box>);

    if (containedSat) {
      array.push(<Box className={classes.header}>Fri</Box>);
      array.push(<Box className={classes.headerEnd}>Sat</Box>);
    } else array.push(<Box className={classes.headerEnd}>Fri</Box>);
    return array;
  };
  const makeRow = (time: number) => {
    const column = containedSat ? 6 : 5;
    const array = [...Array(column)].map((n, index) => {
      return <LectureGrid />;
    });
    if (time === 0) {
      array.unshift(<Box className={classes.time}>{`0${time + 9}:00-${time + 10}:00`}</Box>);
    } else if (time === 9) {
      array.unshift(<Box className={classes.time}>이후</Box>);
    } else array.unshift(<Box className={classes.time}>{`${time + 9}:00-${time + 10}:00`}</Box>);
    return array;
  };
  const fillTable = () => {
    return [...Array(row)].map((n, index) => {
      return makeRow(index);
    });
  };
  return (
    <Box className={classes.root}>
      {fillTableHeader()}
      {fillTable()}
      <LectureBox starttime={480} endtime={600} />
      <LectureBox starttime={1440 + 480} endtime={1440 + 600} bgcolor="orange" />
    </Box>
  );
};

export { Timetable };
export type { TimetableProps };
