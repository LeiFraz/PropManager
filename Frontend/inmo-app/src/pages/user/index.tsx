import {useEffect, useState} from 'react';
import {MainAppLayout} from '@/layouts/MainAppLayout/MainAppLayout';
import InfoContainer from './_components/InfoContainer';
import {useSession} from 'next-auth/react';
import jwt from 'jsonwebtoken';
import {GetMyRent} from '@/services/rent';

const UserHome = () => {
  const {data: session} = useSession();
  const [userId, setUserId] = useState(null);
  const [contrato, setContrato] = useState(null);

  useEffect(() => {
    const obtenerInformacionContrato = async (userId: number) => {
      try {
        const response = await GetMyRent(userId);
        // @ts-ignore
        setContrato(response);
      } catch (error) {
        console.error('Error al obtener la información del contrato:', error);
      }
    };

    if (session?.usuario?.info?.token) {
      const token = session.usuario.info.token;
      const decodedToken = jwt.decode(token);
      // @ts-ignore
      if (decodedToken && decodedToken._id) {
        // @ts-ignore
        setUserId(decodedToken._id);
        // @ts-ignore
        obtenerInformacionContrato(decodedToken._id);
      }
    }
  }, [session]);

  return (
    <MainAppLayout title="Tu Alquiler">
      {/* @ts-ignore */}
      <InfoContainer contrato={contrato} />
    </MainAppLayout>
  );
};

export default UserHome;
