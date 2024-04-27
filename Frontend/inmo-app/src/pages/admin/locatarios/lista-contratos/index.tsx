import React, {useEffect, useState} from 'react';
import {MainAppLayout} from '@/layouts';
import {Box, Typography, styled} from '@mui/material';
import {TableAdminPanel} from '@/components';
import {themeDark} from '@/theme';
import {ContractsResponseData} from '@/types/contracts';
import {getAllRent} from '@/services/rent';
import {useSession} from 'next-auth/react';

const StyledContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'white',
  padding: '20px',
  width: '100vw',
  minHeight: '90%',
  borderRadius: '5px',
  boxShadow:
    '2px 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.9)',
  [themeDark.breakpoints.up('sm')]: {
    width: '80%',
    minHeight: '50%',
  },
});

const LIstaDeContratos = () => {
  const {data: session} = useSession();
  const [loading, setLoading] = useState(true);
  const [contracts, setContracts] = useState<ContractsResponseData[]>([]);

  useEffect(() => {
    const obtenerTodosLosUsuarios = async () => {
      try {
        const response = await getAllRent();
        // @ts-ignore
        if (response) {
          setContracts(response);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error al obtener los contratos', error);
        setLoading(false);
      }
    };

    obtenerTodosLosUsuarios();
  }, [session]);

  return (
    <MainAppLayout>
      <StyledContainer sx={{marginTop: '8%', marginBottom: '20%'}}>
        <Typography variant="h5">Listado de Contratos</Typography>
        <TableAdminPanel contracts={contracts} />
      </StyledContainer>
    </MainAppLayout>
  );
};

export default LIstaDeContratos;
