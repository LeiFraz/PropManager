import React from 'react';
import {Box, Grid, Switch} from '@mui/material';
import {ContainerLogin, ContentContainer} from '@/components';
import styles from '@/styles/signIn.module.css';
import {themeDark} from '@/theme';
import {useMainLoaderStore, useSnackbarStore} from '@/store';
import {LogInCredentials} from '@/types/auth';
import {AuthenticationError} from '@/types/errors';
import {useRouter} from 'next/router';
import {signIn} from 'next-auth/react';
import {LogInForm} from '../../../components/Form/LogInForm';

export const SignIn = () => {
  const router = useRouter();
  const {setMainLoader} = useMainLoaderStore(state => state);
  const {setSnackbar} = useSnackbarStore(state => state);

  const handleSubmit = async (values: LogInCredentials) => {
    const credentials: LogInCredentials = {
      email: values.email,
      contrasenia: values.contrasenia,
    };

    try {
      setMainLoader(true);
      const response = await signIn('credentials', {
        ...credentials,
        redirect: false,
      });
      if (response?.ok) {
        setSnackbar({
          text: 'Bienvenido',
          severity: 'success',
          isOpen: true,
        });
        router.push('/');
      } else if (response?.error) {
        setSnackbar({
          text: response.error,
          severity: 'error',
          isOpen: true,
        });
      }
    } catch (error: AuthenticationError) {
      setSnackbar({
        text: error.message || 'Error desconocido',
        severity: 'error',
        isOpen: true,
      });
    } finally {
      setMainLoader(false);
    }
  };
  const label = {inputProps: {'aria-label': 'Switch demo'}};
  return (
    <ContainerLogin>
      <Grid
        item
        sx={{
          display: {xs: 'none', md: 'flex'},
          height: '33.25rem',
          width: '58rem',
          position: 'relative',
          alignItems: 'flex-start',
        }}
      >
        <Box
          sx={{width: '300px', height: '300px'}}
          className={styles.imgLado}
        ></Box>
        <Box className={styles.imgLado2}></Box>
        <Box className={styles.imgLado3}></Box>
        <Box className={styles.imgLado4}></Box>
      </Grid>

      <ContentContainer
        sx={{
          height: '90vh',
          maxWidth: '600px',
          minHeight: '800px',
          marginTop: '0',
          top: '0',
          borderRadius: '0px 0px 50px 50px',
          backgroundColor: '#032248',
          [themeDark.breakpoints.down('md')]: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: '10px',
            marginTop: '25px',
            [themeDark.breakpoints.down('md')]: {display: 'none'},
          }}
        ></Box>
        <Grid
          item
          xs={12}
          sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
        >
          <Box className={styles.boxImg}></Box>
          <h1 className={styles.titulo}>Bienvenidos</h1>
        </Grid>

        <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
          <LogInForm onSubmit={handleSubmit} />
        </Grid>
      </ContentContainer>
    </ContainerLogin>
  );
};

export default SignIn;
