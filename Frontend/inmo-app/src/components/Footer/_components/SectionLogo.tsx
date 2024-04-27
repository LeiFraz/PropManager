import {Grid, Typography} from '@mui/material';
import Image from 'next/image';
import logo from '/public/img/logo.png';

export const SectionLogo = () => {
  return (
    <Grid
      item
      xs={12}
      md={4}
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      sx={{width: '100%'}}
    >
      <Image
        priority
        style={{width: '90px', height: '90px'}}
        alt="Logo"
        src={logo}
      />
      <Typography sx={{fontWeight: '600', color: 'white'}} variant="h3">
        No Country
      </Typography>
    </Grid>
  );
};
