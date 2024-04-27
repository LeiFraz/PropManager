import {Typography} from '@mui/material';
import {useSession} from 'next-auth/react';
import React from 'react';

type UserGreetingsProps = {
  sx?: Object;
};

export const UserGreetings: React.FC<UserGreetingsProps> = ({sx}) => {
  const {data: session} = useSession();
  const auth = !!session;
  const userMail = session?.usuario.info.usuario;
  return auth ? (
    <Typography
      sx={sx}
      variant="body2"
    >{`¡Bienvenido ${userMail}!`}</Typography>
  ) : (
    ''
  );
};
