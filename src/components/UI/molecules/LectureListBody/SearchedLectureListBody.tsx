import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LectureInfos } from '@/components/UI/molecules';
import { useStores } from '@/stores';
import { useQuery, gql } from '@apollo/client';

const LECTURE_INFOS = gql`
  query GetLectureInfos {
    lectureInfos {
      name
      department
    }
  }
`;

interface SearchedLectureListBodyProps {
  isBasketList?: boolean;
  getLectureInfos: (infos: Array<LectureInfos>) => JSX.Element[];
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '0.25rem',
    width: '100%',
    alignItems: 'center',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: '0.3rem',
      display: 'block',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.grey[300],
      borderRadius: '0.7rem',
    },
  },
}));

const SearchedLectureListBody = ({ isBasketList = false, getLectureInfos }: SearchedLectureListBodyProps): JSX.Element => {
  const classes = useStyles({ isBasketList });
  const { lectureInfoStore } = useStores();
  const lecturesData = lectureInfoStore.state.lectures();

  const { loading, error, data } = useQuery(LECTURE_INFOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  return <div className={classes.root}>{getLectureInfos(lecturesData)}</div>;
};

export { SearchedLectureListBody };