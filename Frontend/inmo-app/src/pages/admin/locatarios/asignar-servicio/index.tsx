import React from 'react';
import {ContentContainer, CreateServicesForm} from '@/components';
import {createService} from '@/services/services';
import {useMainLoaderStore, useSnackbarStore} from '@/store';
import {MainAppLayout} from '@/layouts';

const AsignarServicio: React.FC = () => {
  const {setSnackbar} = useSnackbarStore(state => state);
  const {setMainLoader} = useMainLoaderStore(state => state);

  return (
    <MainAppLayout>
      <ContentContainer sx={{marginTop: '2%', marginBottom: '5%'}}>
        <CreateServicesForm
          onSubmit={async values => {
            try {
              setMainLoader(true);
              const response = await createService(values);
              if (response) {
                setSnackbar({
                  text: 'Servicio asignado con exito!',
                  severity: 'success',
                  isOpen: true,
                });
              } else {
                setSnackbar({
                  text: 'No se pudo asignar el servicio',
                  severity: 'error',
                  isOpen: true,
                });
              }
            } catch (error) {
              console.error('No se pudo asignar el servicio', error);
            } finally {
              setMainLoader(false);
            }
          }}
        />
      </ContentContainer>
    </MainAppLayout>
  );
};

export default AsignarServicio;
