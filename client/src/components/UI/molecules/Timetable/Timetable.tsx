/* eslint-disable no-continue */
import React from 'react';
import Box from '@material-ui/core/Box';
import { LectureGrid } from '@/components/UI/atoms';
import { LectureBoxContainer } from '@/components/UI/molecules';
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
    '&:first-of-type': {
      borderTopLeftRadius: `1rem`,
    },
    '&:nth-of-type(6)': {
      borderTopRightRadius: `1rem`,
    },
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

const days = [
  { id: 1, name: 'Mon' },
  { id: 2, name: 'Tue' },
  { id: 3, name: 'Wed' },
  { id: 4, name: 'Thu' },
  { id: 5, name: 'Fri' },
  { id: 6, name: 'Sat' },
];

interface dayType {
  id: number;
  name: string;
}

const Timetable = ({ row, containedSat }: TimetableProps): JSX.Element => {
  const classes = useStyles({ row, containedSat });

  const fillTableHeader = () => {
    // return days.reduce<JSX.Element | Element | Element[]>(
    //   (acc: JSX.Element | Element | Element[], day: dayType) => {
    //     if (!containedSat && day.name === 'Sat') {
    //       return acc;
    //     }
    //     return (
    //       <Box key={day.id} className={classes.header}>
    //         {day.name}
    //       </Box>
    //     );
    //   },
    //   [<Box key={0} className={classes.header} />],
    // );
    const array = [<Box key={0} className={classes.header} />];
    for (let i = 0; i < days.length; i += 1) {
      const day = days[i];
      if (i === 5) {
        if (!containedSat) continue;
      }
      array.push(
        <Box key={day.id} className={classes.header}>
          {day.name}
        </Box>,
      );
    }
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
      <LectureBoxContainer />
    </Box>
  );
};

export { Timetable };
export type { TimetableProps };
