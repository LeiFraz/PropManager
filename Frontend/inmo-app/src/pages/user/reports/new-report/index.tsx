import {MainAppLayout} from '@/layouts';
import {ContentContainer, NewReportForm} from '@/components';
import {useSnackbarStore, useMainLoaderStore} from '@/store';
import {useSession} from 'next-auth/react';
import jwt from 'jsonwebtoken';
import {sendAReport} from '@/services/reports';

const AddReportPage = () => {
  const {setSnackbar} = useSnackbarStore(state => state);
  const {setMainLoader} = useMainLoaderStore(state => state);
  const {data: session} = useSession();
  // @ts-ignore
  const decodedToken = jwt.decode(session?.usuario.info.token);
  const userId = decodedToken?._id;

  if (userId === undefined) {
    return <div>Cargando...</div>;
  }

  return (
    <MainAppLayout title="Nuevo Reporte">
      <ContentContainer
        sx={{marginBottom: {xs: '5%', md: '20%', lg: '15%'}, marginTop: '1%'}}
      >
        <NewReportForm
          id_usuario={userId}
          onSubmit={async values => {
            try {
              setMainLoader(true);
              const response = await sendAReport(values);
              if (response) {
                setSnackbar({
                  text: 'Reporte enviado con éxito',
                  severity: 'success',
                  isOpen: true,
                });
              } else {
                setSnackbar({
                  text: 'Error al enviar el reporte',
                  severity: 'error',
                  isOpen: true,
                });
              }
            } catch (error) {
              console.error('Error al enviar el reporte:', error);
              setSnackbar({
                text: 'Por favor intenta de nuevo',
                severity: 'error',
                isOpen: true,
              });
            } finally {
              setMainLoader(false);
            }
          }}
        />
      </ContentContainer>
    </MainAppLayout>
  );
};

export default AddReportPage;
