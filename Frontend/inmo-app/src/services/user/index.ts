import {privateInstance} from '../axios';
import {CreateUser, userAttributesResponse} from '@/types/user';

export const getAllUsers = async () => {
  try {
    const response = await privateInstance.get('/usuarios');
    return response.data as userAttributesResponse[];
  } catch (error) {
    throw error;
  }
};

export const createUser = async (body: CreateUser) => {
  try {
    const response = await privateInstance.post('/usuarios', body);
    return response;
  } catch (error) {
    throw error;
  }
};
