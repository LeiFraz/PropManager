import {publicInstance} from '@/services/axios';
import {LogInCredentials} from '@/types/auth';
import {signOut} from 'next-auth/react';

export const logIn = async (credentials: LogInCredentials) => {
  try {
    const response = await publicInstance.post('/auth', credentials);
    return response;
  } catch (error) {
    throw error;
  }
};

export const logOut = () => {
  signOut();
};
