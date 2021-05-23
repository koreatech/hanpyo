import React from 'react';
import { LectureGrid } from '@/components/UI/atoms';
import { LectureBoxContainer } from '@/components/UI/molecules';
import { makeStyles } from '@material-ui/core/styles';
import { useStores } from '@/stores';
import { range } from '@/common/utils';

interface TimetableProps {
  row: number;
  containedSat: boolean;
}

const useStyles = makeStyles((theme) => ({
  root: ({ row, containedSat }: TimetableProps) => ({
    display: 'grid',
    position: 'relative',
    gridTemplateRows: `repeat(${row + 1}, 1fr)`,
    gridTemplateColumns: `repeat(${containedSat ? 7 : 6}, 1fr)`,
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

const Timetable = ({ row, containedSat }: TimetableProps): JSX.Element => {
  const classes = useStyles({ row, containedSat });
  const { lectureInfoStore } = useStores();

  const getTableHeaders = (): JSX.Element[] => {
    const headers = days.reduce<JSX.Element[]>(
      (acc, day, idx) => {
        if (idx === 5 && !containedSat) return acc;

        return acc.concat(
          <div key={day.id} className={classes.header}>
            {day.name}
          </div>,
        );
      },
      [<div key={0} className={classes.header} />],
    );

    return headers;
  };

  const getTimeGridInRow = (time: number): JSX.Element => {
    if (time === 0) return <div key={0} className={classes.time}>{`0${time + 9}:00-${time + 10}:00`}</div>;

    if (time === 9)
      return (
        <div key={0} className={classes.time}>
          이후
        </div>
      );

    return <div key={0} className={classes.time}>{`${time + 9}:00-${time + 10}:00`}</div>;
  };

  const makeRowGrid = (time: number) => {
    const columnCount = containedSat ? 6 : 5;
    const rowGrid = [getTimeGridInRow(time)];

    Array.from(range(1, columnCount)).forEach((key) => rowGrid.push(<LectureGrid key={key} />));
    return rowGrid;
  };

  const getTableGrid = () => {
    return [...Array(row)].map((_, idx) => makeRowGrid(idx));
  };

  const onMouseEnterListener = () => {
    lectureInfoStore.setSelectedLecture(null);
  };

  return (
    <div className={classes.root} onMouseEnter={onMouseEnterListener}>
      {getTableHeaders()}
      {getTableGrid()}
      <LectureBoxContainer />
    </div>
  );
};

export { Timetable };
export type { TimetableProps };
