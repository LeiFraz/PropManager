import {themeDark} from '@/theme';
import {Skeleton, styled} from '@mui/material';
import React from 'react';

const StyledSkeletonScreen = styled(Skeleton)({
  width: '90%',
  color: 'white',
  borderRadius: '7px',
  [themeDark.breakpoints.up('sm')]: {
    width: '30%',
  },
});

type SkeletonScreenProps = {
  sx?: Object;
};

export const SkeletonScreen: React.FC<SkeletonScreenProps> = ({sx}) => {
  return (
    <StyledSkeletonScreen sx={sx} animation="wave" variant="rectangular" />
  );
};
