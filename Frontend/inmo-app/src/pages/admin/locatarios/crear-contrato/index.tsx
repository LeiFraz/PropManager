import React, {useEffect, useState, useMemo, useCallback} from 'react';
import {ContentContainer, NewContractForm} from '@/components';
import {MainAppLayout} from '@/layouts';
import {useSnackbarStore, useMainLoaderStore} from '@/store';
import {createContract} from '@/services/rent';

const CrearContrato: React.FC = () => {
  const {setSnackbar} = useSnackbarStore(state => state);
  const {setMainLoader} = useMainLoaderStore(state => state);

  return (
    <MainAppLayout>
      <ContentContainer sx={{marginTop: '2%', marginBottom: '5%'}}>
        <NewContractForm
          onSubmit={async values => {
            try {
              setMainLoader(true);
              const response = await createContract(values);
              if (response) {
                setSnackbar({
                  text: 'Contrato creado exitosamente',
                  severity: 'success',
                  isOpen: true,
                });
              } else {
                setSnackbar({
                  text: 'Error al crear el contrato',
                  severity: 'error',
                  isOpen: true,
                });
              }
            } catch (error) {
              console.error('Error al crear el contrato', error);
            } finally {
              setMainLoader(false);
            }
          }}
        />
      </ContentContainer>
    </MainAppLayout>
  );
};

export default CrearContrato;
