import React from 'react';
import {Box, Grid, styled} from '@mui/material';
import {themeDark} from '@/theme';

type ContentContainerHeaderProps = {
  children: React.ReactNode;
  sx?: Object;
};

const StyledNav = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: '100%',
});

export const ContainerHeader: React.FC<ContentContainerHeaderProps> = ({
  children,
  sx,
}) => {
  return <StyledNav sx={sx}>{children}</StyledNav>;
};
