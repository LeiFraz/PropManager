import React from 'react';
import {Box, styled} from '@mui/material';
import {themeDark} from '@/theme';

type ContainerLoginProps = {
  children: React.ReactNode;
  sx?: Object;
};

const StyledLoginContainer = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  minHeight: '95%',
  paddingTop: '10px',
  [themeDark.breakpoints.up('md')]: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '0px',
  },
});

export const ContainerLogin: React.FC<ContainerLoginProps> = ({
  children,
  sx,
}) => {
  return <StyledLoginContainer sx={sx}>{children}</StyledLoginContainer>;
};
