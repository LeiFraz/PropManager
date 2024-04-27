import React from 'react';
import {NewUserForm} from '@/components/Form/NewUserForm';
import {createUser} from '@/services/user';
import {useMainLoaderStore, useSnackbarStore} from '@/store';
import {ContentContainer} from '@/components';
import {MainAppLayout} from '@/layouts';

const CrearUsuario: React.FC = () => {
  const {setSnackbar} = useSnackbarStore(state => state);
  const {setMainLoader} = useMainLoaderStore(state => state);
  return (
    <MainAppLayout>
      <ContentContainer sx={{marginTop: '2%', marginBottom: '5%'}}>
        <NewUserForm
          onSubmit={async values => {
            try {
              setMainLoader(true);
              const response = await createUser(values);
              if (response) {
                setSnackbar({
                  text: 'Usuario creado con exito',
                  severity: 'success',
                  isOpen: true,
                });
              } else {
                setSnackbar({
                  text: 'Error al crear el usuario',
                  severity: 'error',
                  isOpen: true,
                });
              }
            } catch (error) {
              console.error('Error al crear el usuario', error);
            } finally {
              setMainLoader(false);
            }
          }}
        />
      </ContentContainer>
    </MainAppLayout>
  );
};

export default CrearUsuario;
