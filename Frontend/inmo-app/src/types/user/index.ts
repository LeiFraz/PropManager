import {reportsResponseAttributes} from '../reports';

type User = {
  id_usuario: number;
  email: string;
  contrasenia: string;
  rol: string;
};

type CreateUser = {
  email: string;
  contrasenia: string;
  nombre: string;
  apellido: string;
  dni: number | null;
  telefono: number | null;
};

type userAttributesResponse = {
  id_usuario: number;
  email: string;
  dni: number;
  nombre: string;
  apellido: string;
  telefono: number;
  quejas?: reportsResponseAttributes[];
};

export type {User, CreateUser, userAttributesResponse};
