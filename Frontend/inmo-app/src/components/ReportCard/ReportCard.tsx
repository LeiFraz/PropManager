import {ContentContainer, StatusIndicator} from '@/components';
import {Typography, Box, styled, IconButton} from '@mui/material';
import {useState} from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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

export const ReportCard: React.FC<ReportCardProps> = ({
  id_queja,
  tipo,
  estado,
  descripcion,
}) => {
  const [showDetails, setShowDetails] = useState(true);
  const handleClick = () => {
    setShowDetails(!showDetails);
  };
  return (
    <ContentContainer key={id_queja} sx={{padding: '10px', margin: '2%'}}>
      <CommonContainer>
        <Typography variant="body1">Tipo:</Typography>
        <Typography variant="body1">{tipo}</Typography>
      </CommonContainer>
      <CommonContainer>
        <Typography variant="body1">Estado:</Typography>
        <StatusIndicator status={estado} />
      </CommonContainer>
      <CommonContainer>
        <Typography variant="body1">Detalles:</Typography>
        <IconButton onClick={handleClick}>
          <KeyboardArrowDownIcon sx={{padding: 0}} />
        </IconButton>
      </CommonContainer>
      {showDetails && (
        <Typography sx={{fontWeight: 500}} variant="body1">
          {descripcion}
        </Typography>
      )}
    </ContentContainer>
  );
};
