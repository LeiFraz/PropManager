import {privateInstance} from '../axios';
import {
  ContractsResponseData,
  CreateContractCredentials,
} from '@/types/contracts';

export const GetMyRent = async (id: number) => {
  try {
    const response = await privateInstance.get(`/contratos/${id}`);
    return response.data as ContractsResponseData;
  } catch (error) {
    throw error;
  }
};

export const getAllRent = async () => {
  try {
    const response = await privateInstance.get('/contratos');
    return response.data as ContractsResponseData[];
  } catch (error) {
    throw error;
  }
};

export const createContract = async (body: CreateContractCredentials) => {
  try {
    const response = await privateInstance.post('/contratos', body);
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteContract = async (id: number) => {
  try {
    const response = await privateInstance.delete(`/contratos/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};
