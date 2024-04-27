import React, {useState} from 'react';
import {ContentContainer, SkeletonScreen} from '@/components';
import {styled, Box, Typography, IconButton} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {themeDark} from '@/theme';
import {ContractsResponseData} from '@/types/contracts';

type InfoContainerProps = {
  contrato: ContractsResponseData;
};

const CommonContainer = styled(Box)({
  display: 'flex',
  minWidth: '100%',
  flexDirection: 'column',
  marginBottom: '20px',
  justifyContent: 'space-between',
  borderBottom: '2px solid #000',
});

const SectionContainer = styled(Box)({
  display: 'flex',
  minWidth: '100%',
  justifyContent: 'space-between',
});

const InfoContainer: React.FC<InfoContainerProps> = ({contrato}) => {
  const [showDetails, setShowDetails] = useState(true);
  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  if (!contrato) {
    return (
      <>
        <Typography variant="body2">
          ...Cargando detalles de tu alquiler
        </Typography>
        <SkeletonScreen
          sx={{
            height: '400px',
            marginTop: {xs: '2%', md: '4%', lg: '1%'},
            marginBottom: {xs: '9%', md: '15%', lg: '10%'},
          }}
        />
      </>
    );
  }
  // @ts-ignore
  const fechaInicio = new Date(contrato.contrato.fecha_inicio);
  // @ts-ignore
  const duracionMeses = contrato.contrato.duracion_en_meses;
  const fechaFinal = new Date(
    fechaInicio.getFullYear(),
    fechaInicio.getMonth() + duracionMeses,
    fechaInicio.getDate(),
  );
  const fechaActual = new Date();
  const mesesTranscurridos =
    (fechaActual.getFullYear() - fechaInicio.getFullYear()) * 12 +
    (fechaActual.getMonth() - fechaInicio.getMonth());
  const mesesRestantes = duracionMeses - mesesTranscurridos;
  // @ts-ignore
  const valorAlquiler = contrato.contrato.total_mensual_pesos;
  // @ts-ignore
  const servicios = contrato.contrato.servicios;
  const totalServicios = servicios.reduce(
    // @ts-ignore
    (total, servicio) => total + servicio.total_mensual_pesos,
    0,
  );
  const TOTALMENSUALALQUILER = valorAlquiler + totalServicios;

  return (
    <ContentContainer
      sx={{
        marginTop: {xs: '2%', md: '4%', lg: '1%'},
        marginBottom: {xs: '9%', md: '15%', lg: '10%'},
        display: 'block',
        minHeight: '50%',
      }}
    >
      <CommonContainer>
        <SectionContainer>
          <Typography sx={{fontWeight: '500'}} variant="body1">
            Fecha inicio:
          </Typography>
          <Typography variant="body1">
            {fechaInicio.toLocaleString()}
          </Typography>
        </SectionContainer>

        <SectionContainer>
          <Typography sx={{fontWeight: '500'}} variant="body1">
            Fecha final:
          </Typography>
          <Typography variant="body1">{fechaFinal.toLocaleString()}</Typography>
        </SectionContainer>

        <SectionContainer>
          <Typography sx={{fontWeight: '500'}} variant="body1">
            Meses Restantes:
          </Typography>
          <Typography variant="body1">{mesesRestantes}</Typography>
        </SectionContainer>
      </CommonContainer>
      <CommonContainer>
        <SectionContainer>
          <Typography variant="body1">Valor alquiler:</Typography>
          <Typography variant="body1">
            $ {valorAlquiler.toLocaleString()}
          </Typography>
        </SectionContainer>

        <SectionContainer>
          <Typography variant="body1">Expensas:</Typography>
          <Typography variant="body1">$ 0</Typography>
        </SectionContainer>
      </CommonContainer>

      <CommonContainer>
        <SectionContainer>
          <Typography variant="body1">Servicios:</Typography>
          <Typography variant="body1">
            $ {totalServicios.toLocaleString()}
          </Typography>
        </SectionContainer>
        <SectionContainer>
          <Typography sx={{fontWeight: 600}} variant="body1">
            Detalles:
          </Typography>
          <IconButton sx={{padding: 0}} onClick={handleClick}>
            <KeyboardArrowDownIcon />
          </IconButton>
        </SectionContainer>
        {showDetails &&
        // @ts-ignore
          servicios.map((servicio, index) => (
            <SectionContainer key={index}>
              <Typography variant="body1">{servicio.tipo_servicio}:</Typography>
              <Typography variant="body1">
                $ {servicio.total_mensual_pesos}
              </Typography>
            </SectionContainer>
          ))}
      </CommonContainer>

      <SectionContainer
        sx={{backgroundColor: themeDark.palette.primary.main, padding: 1}}
      >
        <Typography variant="body2">Total</Typography>
        <Typography variant="body2">
          $ {TOTALMENSUALALQUILER.toLocaleString()}
        </Typography>
      </SectionContainer>
    </ContentContainer>
  );
};

export default InfoContainer;
