import {useSession} from 'next-auth/react';
import jwt from 'jsonwebtoken';
import {removeToken, setToken} from '@/services/axios';

type SessionLoaderProps = {
  children: React.ReactNode;
};

export const SessionLoader: React.FC<SessionLoaderProps> = ({children}) => {
  const {data: session, status} = useSession();

  if (status === 'authenticated') {
    setToken(session.usuario.info.token);
    const decodedtoken = jwt.decode(session.usuario.info.token);
  }

  if (status === 'unauthenticated') {
    removeToken();
  }

  return <>{children}</>;
};
