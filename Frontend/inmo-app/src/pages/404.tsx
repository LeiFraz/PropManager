import {MainAppLayout} from '@/layouts';
import {ContentContainer, CommonButton} from '@/components';
import {styled, Box, Typography} from '@mui/material';
import {useRouter} from 'next/router';
import Image from 'next/image';
import logo from '/public/img/logo.png';
import {themeDark} from '@/theme';

const CommonContainer = styled(Box)({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  gap: '10px',
  alignItems: 'center',
});

const StyledImage = styled(Image)({
  maxWidth: '100%',
  height: '80%',
  borderRadius: '15px',
  boxShadow:
    '2px 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.9)',
  [themeDark.breakpoints.up('md')]: {
    width: '50%',
    height: '30%',
  },
});
const Error404: React.FC = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  };
  return (
    <MainAppLayout title="Error 404">
      <ContentContainer sx={{margin: '5%'}}>
        <CommonContainer>
          <StyledImage alt="casa" src={logo} />
          <Typography sx={{color: '#3d3d3d'}} variant="h3">
            Lo sentimos
          </Typography>
          <Typography sx={{color: '#3d3d3d'}} variant="body1">
            No pudimos encontrar lo que buscas
          </Typography>
          <CommonButton
            text="Regresar"
            variant="contained"
            buttonSize="small"
            color="error"
            clickHandler={handleClick}
          />
        </CommonContainer>
      </ContentContainer>
    </MainAppLayout>
  );
};

export default Error404;
