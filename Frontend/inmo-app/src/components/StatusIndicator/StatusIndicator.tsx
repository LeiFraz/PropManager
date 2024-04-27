import React from 'react';
import {Box, Typography} from '@mui/material';
import {themeDark} from '@/theme';

type StatusIndicatorProps = {
  status: 'reported' | 'processing' | 'resolved' | string;
};

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({status}) => {
  const statusColors = {
    Pendiente: '#FF0000',
    Atendido: '#FFA500',
    Completado: '#008000',
  };
  // @ts-ignore
  const color = statusColors[status];

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5',
        width: '50%',
        height: 20,
        [themeDark.breakpoints.up('sm')]: {
          width: '20%',
        },
        borderRadius: '15px',
        backgroundColor: color,
      }}
    >
      <Typography sx={{color: 'white'}} variant="body1">
        {status}
      </Typography>
    </Box>
  );
};
