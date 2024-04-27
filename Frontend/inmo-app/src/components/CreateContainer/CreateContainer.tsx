import React from 'react';
import {Box, styled} from '@mui/material';
import {themeDark} from '@/theme';

type CreateContainerProps = {
  children: React.ReactNode;
  sx?: Object;
};

const StyledContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '500px',
  background: 'white',
  minHeight: '90%',
  borderRadius: '5px',
  boxShadow:
    '2px 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.9)',
  [themeDark.breakpoints.up('md')]: {
    width: '50%',
    minHeight: '50%',
    margin: '2%',
  },
});

export const CreateContainer: React.FC<CreateContainerProps> = ({
  children,
  sx,
}) => {
  return <StyledContainer sx={sx}>{children}</StyledContainer>;
};
