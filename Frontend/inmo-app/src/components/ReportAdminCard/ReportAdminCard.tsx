import {
  ChangeReportStatusForm,
  ContentContainer,
  StatusIndicator,
} from '@/components';
import {Typography, Box, styled, IconButton} from '@mui/material';
import {useState} from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useMainLoaderStore, useSnackbarStore} from '@/store';
import {changeReportStatus} from '@/services/reports';

type ReportCardProps = {
  id_queja?: number;
  tipo: string;
  estado: string;
  descripcion: string;
};

const CommonContainer = styled(Box)({
  display: 'flex',
  minWidth: '100%',
  justifyContent: 'space-between',
});

export const ReportAdminCard: React.FC<ReportCardProps> = ({
  id_queja,
  tipo,
  estado,
  descripcion,
}) => {
  const {setMainLoader} = useMainLoaderStore(state => state);
  const {setSnackbar} = useSnackbarStore(state => state);
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = async (id_queja: number, estado: string) => {
    try {
      setMainLoader(true);
      const response = await changeReportStatus(id_queja, estado);
      if (response) {
        console.log(response);
        setSnackbar({
          text: 'Estado cambiado con exito',
          severity: 'success',
          isOpen: true,
        });
      } else {
        setSnackbar({
          text: 'Error al actualizar estado',
          severity: 'error',
          isOpen: true,
        });
      }
    } catch (error) {
      console.error('Error al actualizar estado', error);
    } finally {
      setMainLoader(false);
    }
  };

  return (
    <ContentContainer key={id_queja} sx={{padding: '10px', margin: '2%'}}>
      <CommonContainer>
        <Typography variant="body1">Tipo:</Typography>
        <Typography variant="body1">{tipo}</Typography>
      </CommonContainer>
      <CommonContainer>
        <Typography variant="body1">Detalles:</Typography>
        <Typography sx={{fontWeight: 500}} variant="body1">
          {descripcion}
        </Typography>
      </CommonContainer>
      <CommonContainer>
        <Typography variant="body1">Estado:</Typography>
        <StatusIndicator status={estado} />
      </CommonContainer>
      <CommonContainer>
        <Typography variant="body1">Actualizar Estado:</Typography>
        <IconButton onClick={() => setIsActive(!isActive)}>
          <KeyboardArrowDownIcon />
        </IconButton>
      </CommonContainer>
      {isActive && (
        // @ts-ignore
        <ChangeReportStatusForm id_queja={id_queja} onSubmit={handleSubmit} />
      )}
    </ContentContainer>
  );
};
