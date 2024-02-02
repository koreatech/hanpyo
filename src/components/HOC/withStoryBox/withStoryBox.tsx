import React from 'react';
import { Box } from '@material-ui/core';

const withStoryBox = (args: <T>() => T, width = 'auto', height = 'auto') => (StoryComponent: React.FC): React.FC => {
  return (): JSX.Element => {
    return (
      <Box width={width} height={height}>
        <StoryComponent {...args} />
      </Box>
    );
  };
};

export default withStoryBox;
