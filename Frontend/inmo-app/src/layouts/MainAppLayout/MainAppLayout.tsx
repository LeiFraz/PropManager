import {ReactNode} from 'react';
import {Footer, Header, AdminHeader} from '@/components';
import {styled, Box} from '@mui/material';
import {useSession} from 'next-auth/react';
import jwt from 'jsonwebtoken';

type MainAppLayoutProps = {
  title?: string;
  children: ReactNode;
};

const MainContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'flex-start',
});

export const MainAppLayout: React.FC<MainAppLayoutProps> = ({
  title,
  children,
}) => {
  const {data: session} = useSession();

  let userRol = '';
  if (session) {
    const decodedToken = jwt.decode(session.usuario.info.token);
    // @ts-ignore
    userRol = decodedToken?.rol || '';
  }

  return (
    <>
      {userRol === 'a' ? (
        <AdminHeader auth={!!session} />
      ) : (
        <Header auth={!!session} title={title} />
      )}

      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
};
