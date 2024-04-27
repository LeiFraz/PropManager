import {reportsAttributes, reportsResponseAttributes} from '@/types/reports';
import {privateInstance} from '../axios';

export const sendAReport = async (body: reportsAttributes) => {
  try {
    const response = await privateInstance.post('/quejas', body);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getMyReports = async () => {
  try {
    const response = await privateInstance.get(`/quejas`);
    return response.data as reportsResponseAttributes[];
  } catch (error) {
    throw error;
  }
};

export const getAllReports = async () => {
  try {
    const response = await privateInstance.get(`/quejas`);
    return response.data as reportsResponseAttributes[];
  } catch (error) {
    throw error;
  }
};

export const getReportsById = async (id: string) => {
  try {
    const response = await privateInstance.get(`/usuarios/${id}/quejas`);
    return response.data as reportsResponseAttributes[];
  } catch (error) {
    throw error;
  }
};

export const changeReportStatus = async (id: number, estado: string) => {
  try {
    const response = await privateInstance.put(`/quejas/${id}`, estado);
    return response;
  } catch (error) {
    throw error;
  }
};
