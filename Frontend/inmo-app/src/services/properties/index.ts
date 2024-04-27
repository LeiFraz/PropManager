import {propertiesResponseData} from '@/types/properties';
import {privateInstance} from '../axios';

export const getProperty = async () => {
  try {
    const response = await privateInstance.get('/propiedades');
    return response;
  } catch (error) {
    throw error;
  }
};

export const createProperty = async (body: propertiesResponseData) => {
  try {
    const response = await privateInstance.post('/propiedades', body);
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateProperty = async (
  codigo: string,
  body: propertiesResponseData,
) => {
  try {
    const response = await privateInstance.put(`/propiedades/${codigo}`, body);
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteProperty = async (codigo: string) => {
  try {
    const response = await privateInstance.delete(`/propiedades/${codigo}`);
    return response;
  } catch (error) {
    throw error;
  }
};
