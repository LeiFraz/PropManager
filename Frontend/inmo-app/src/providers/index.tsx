'use client';
import * as React from 'react';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {Session} from 'next-auth';
import {SessionProvider} from 'next-auth/react';
import {useMainLoaderStore, useSnackbarStore} from '@/store';
import {SnackbarAlert, MainLoader, SessionLoader} from '@/components';
import NextNProgress from 'nextjs-progressbar';
import {themeDark} from '@/theme';

const queryClient = new QueryClient();

interface ProvidersProps extends React.PropsWithChildren<unknown> {
  session: Session;
}

export const Providers: React.FC<ProvidersProps> = ({children, session}) => {
  const {snackbar} = useSnackbarStore(state => state);
  const {mainLoader} = useMainLoaderStore(state => state);
  return (
    <SessionProvider session={session}>
      <NextNProgress color={themeDark.palette.primary.main} />
      <SessionLoader>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={themeDark}>
            <CssBaseline />
            {children}
            <MainLoader isOpen={mainLoader ? mainLoader : false} />
            <SnackbarAlert {...snackbar} />
            <ReactQueryDevtools initialIsOpen={false} />
          </ThemeProvider>
        </QueryClientProvider>
      </SessionLoader>
    </SessionProvider>
  );
};
