import {Grid, Typography} from '@mui/material';
import Link from 'next/link';

const LINKS = [
  {
    title: 'Nosotros',
    path: 'https://www.nocountry.tech/',
  },
  {
    title: 'Contactanos',
    path: 'https://www.linkedin.com/company/nocountrytalent/?originalSubdomain=ar',
  },
  {
    title: 'Github',
    path: 'https://github.com/No-Country/c17-127-m-react',
  },
];

export const SectionInfo = () => {
  return (
    <Grid item xs={12} md={4} textAlign="center">
      <Typography variant="h6" align="center" gutterBottom>
        Información adicional
      </Typography>
      {LINKS.map(item => (
        <Typography key={item.title} variant="body2">
          <Link
            style={{textDecoration: 'none'}}
            href={item.path}
            target="blank"
            color="#fff"
          >
            {item.title}
          </Link>
        </Typography>
      ))}
    </Grid>
  );
};
