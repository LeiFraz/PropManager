import React from 'react';
import {Box, styled} from '@mui/material';
import {themeDark} from '@/theme';

type ContentContainerProps = {
  children: React.ReactNode;
  sx?: Object;
};

const StyledContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'white',
  padding: '20px',
  width: '90%',
  minHeight: '90%',
  borderRadius: '5px',
  boxShadow:
    '2px 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.9)',
  [themeDark.breakpoints.up('sm')]: {
    width: '50%',
    minHeight: '50%',
  },
});

export const ContentContainer: React.FC<ContentContainerProps> = ({
  children,
  sx,
}) => {
  return <StyledContainer sx={sx}>{children}</StyledContainer>;
};
