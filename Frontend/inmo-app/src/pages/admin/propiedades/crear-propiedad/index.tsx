import React from 'react';
import {ContentContainer, NewPropertyForm} from '@/components';
import {createProperty} from '@/services/properties';
import {useMainLoaderStore, useSnackbarStore} from '@/store';
import {MainAppLayout} from '@/layouts';

export const PropiedadesPage: React.FC = () => {
  const {setSnackbar} = useSnackbarStore(state => state);
  const {setMainLoader} = useMainLoaderStore(state => state);
  return (
    <MainAppLayout>
      <ContentContainer
        sx={{width: '500px', marginTop: '2%', marginBottom: '5%'}}
      >
        <NewPropertyForm
          onSubmit={async values => {
            try {
              setMainLoader(true);
              const response = await createProperty(values);
              if (response) {
                setSnackbar({
                  text: 'Propiedad creada exitosamente',
                  severity: 'success',
                  isOpen: true,
                });
              } else {
                setSnackbar({
                  text: 'Error al crear la propiedad',
                  severity: 'error',
                  isOpen: true,
                });
              }
            } catch (error) {
              console.error('Error al crear la propiedad', error);
            } finally {
              setMainLoader(false);
            }
          }}
        />
      </ContentContainer>
    </MainAppLayout>
  );
};

export default PropiedadesPage;
