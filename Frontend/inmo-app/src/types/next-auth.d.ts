import 'next-auth';

declare module 'next-auth' {
  interface Session {
    bienvenido: string;
    usuario: {
      info: {
        usuario: string;
        token: string;
      };
    };
  }
}
