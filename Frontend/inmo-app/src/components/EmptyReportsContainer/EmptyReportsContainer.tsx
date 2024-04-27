import {ContentContainer} from '../ContentContainer/ContentContainer';
import {Typography, Box, styled} from '@mui/material';
import ReportOffIcon from '@mui/icons-material/ReportOff';
import {CommonButton} from '../CommonButton/CommonButton';
import {useRouter} from 'next/router';

const CommonContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
  padding: '10%',
});

export const EmptyReportsContainer = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/user/reports/new-report');
  };
  return (
    <ContentContainer
      sx={{marginTop: '2%', marginBottom: {xs: '15%', md: '20%', lg: '20%'}}}
    >
      <CommonContainer>
        <ReportOffIcon sx={{width: '50px', height: '50px'}} />
        <Typography sx={{color: '#000'}} variant="body2">
          No hay reportes por el momento
        </Typography>
        <CommonButton
          text="Nuevo Reporte"
          variant="contained"
          buttonSize="small"
          color="error"
          clickHandler={handleClick}
        />
      </CommonContainer>
    </ContentContainer>
  );
};
