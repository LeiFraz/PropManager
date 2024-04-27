import {themeDark} from '@/theme';
import {Navbar} from '@/components';
import {Box, Typography, styled} from '@mui/material';
import React from 'react';

type HeaderProps = {
  title?: string;
  auth: boolean;
};

const HeaderContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  alignItems: 'center',
  backgroundColor: `${themeDark.palette.primary.main}`,
  maxWidth: '100vw',
  height: '170px',
  [themeDark.breakpoints.up('sm')]: {
    height: '200px',
  },
  borderRadius: '0 0 50% 50%',
});

export const Header: React.FC<HeaderProps> = ({title, auth}) => {
  return (
    <HeaderContainer>
      <Navbar auth={auth} />
      <Typography variant="h1">{title}</Typography>
    </HeaderContainer>
  );
};
