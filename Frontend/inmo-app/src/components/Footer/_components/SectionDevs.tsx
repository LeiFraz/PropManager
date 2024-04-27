import {Box, Typography, Grid, IconButton} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const DEVELOPERS = [
  {
    name: 'Bruno Diaz',
    role: 'Frontend',
    linkedin: 'https://www.linkedin.com/in/brunoleandrodiaz',
  },
  {
    name: 'Leonardo Paz',
    role: 'Backend',
    linkedin: 'http://www.linkedin.com/in/leonardofpaz',
  },
  {
    name: 'Leopoldo Villa',
    role: 'Backend',
    linkedin: 'https://www.linkedin.com/in/leopoldo-villa/',
  },
  {
    name: 'Nicolas Iacono',
    role: 'Frontend',
    linkedin: 'https://www.linkedin.com/in/nicolas-iacono-trofa/',
  },
];

export const SectionDevs = () => {
  return (
    <Grid sx={{mb: '20px'}} item xs={12} md={4}>
      <Typography sx={{mb: '20px'}} variant="h6" align="center" gutterBottom>
        Desarrolladores
      </Typography>
      <Grid container spacing={2}>
        <Grid sx={{padding: '0 !important'}} item xs={6}>
          <Typography textAlign="center" variant="body2" gutterBottom>
            <strong>Frontend:</strong>
          </Typography>
          {DEVELOPERS.filter(dev => dev.role === 'Frontend').map(
            (developer, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '1px solid #fff',
                  borderRight: '1px solid #fff',
                  margin: 0,
                  padding: 0,
                }}
              >
                <IconButton
                  href={developer.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{color: '#fff'}}
                >
                  <LinkedInIcon />
                  <Typography variant="body2">
                    <strong>{developer.name}</strong>
                  </Typography>
                </IconButton>
              </Box>
            ),
          )}
        </Grid>
        <Grid sx={{padding: '0 !important'}} item xs={6}>
          <Typography textAlign="center" variant="body2" gutterBottom>
            <strong>Backend:</strong>
          </Typography>
          {DEVELOPERS.filter(dev => dev.role === 'Backend').map(
            (developer, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '1px solid #fff',
                  margin: 0,
                  padding: 0,
                }}
              >
                <IconButton
                  href={developer.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{color: '#fff'}}
                >
                  <LinkedInIcon />
                  <Typography variant="body2">
                    <strong>{developer.name}</strong>
                  </Typography>
                </IconButton>
              </Box>
            ),
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
