import {privateInstance} from '../axios';
import {createServiceCredentials} from '@/types/services';

const createService = async (body: createServiceCredentials) => {
  try {
    const response = privateInstance.post('/servicios', body);
    return response;
  } catch (error) {
    throw error;
  }
};

const updateService = async (id: number, body: createServiceCredentials) => {
  try {
    const response = privateInstance.put(`/servicios/${id}`, body);
    return response;
  } catch (error) {
    throw error;
  }
};

const deleteService = async (id: number, body: createServiceCredentials) => {
  try {
    const response = privateInstance.put(`servicios/${id}`, body);
    return response;
  } catch (error) {
    throw error;
  }
};




export {createService, updateService, deleteService};
