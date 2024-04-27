import React from 'react';
import {Box, Container, Grid, styled} from '@mui/material';
import {SectionInfo, SectionLogo, SectionDevs} from './_components';
import {themeDark} from '@/theme';

const FooterContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: [themeDark.palette.primary.main],
  color: '#fff',
});

export const Footer = (sx: any) => {
  return (
    <FooterContainer component="footer" sx={sx}>
      <Container sx={{margin: 0, flexGrow: 1, minWidth: '100%', padding: '0'}}>
        <Grid container spacing={2}>
          <SectionLogo />
          <SectionDevs />
          <SectionInfo />
        </Grid>
      </Container>
    </FooterContainer>
  );
};
