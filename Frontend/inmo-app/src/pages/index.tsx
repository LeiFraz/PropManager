import UserHome from '@/pages/user/index';
import AdminHome from '@/pages/admin/index';
import {useState} from 'react';
import Head from 'next/head';
import {useSession} from 'next-auth/react';
import jwt from 'jsonwebtoken';
import logo from '/public/img/logo.png';

export default function Home() {
  const {data: session} = useSession();
  // @ts-ignore
  const decodedToken = jwt.decode(session?.usuario?.info?.token);
  const role = decodedToken?.rol;
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <>
      <Head>
        <title>PropManager</title>
        <meta name="description" content="PropManager" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {role === 'a' && <AdminHome />}
      {role === 'b' && <UserHome />}
    </>
  );
}
