import {reportsResponseAttributes} from '../reports';

type ContractsResponseData = {
  id_contrato: number;
  id_inmobiliaria: number;
  codigo_catastral_prop: string;
  fecha_inicio: string;
  duracion_en_meses: number;
  contrato_digital: null;
  total_mensual_pesos: number;
  estado_contrato: Boolean;
  margen_aumento_trimestral: number;
  info_propiedad: {
    codigo_catastral: string;
    direc_calle: string;
    direc_numero: number;
    direc_piso: number;
    direc_puerta: string;
    dni_propietario: number;
  };
  servicios: [
    {
      id_serv_mensual: number;
      id_contrato: number;
      tipo_servicio: string;
      total_mensual_pesos: number;
      detalle: string;
      fecha_emision: string;
      estado_pago: number;
    },
  ];
  quejas: reportsResponseAttributes[];
};

type CreateContractCredentials = {
  id_usuario: number | null;
  id_inmobiliaria: number | null;
  codigo_catastral_prop: string;
  fecha_inicio: string;
  duracion_en_meses: number | null;
  contrato_digital: null;
  total_mensual_pesos: number | null;
  margen_aumento_trimestral: number | null;
};

export type {ContractsResponseData, CreateContractCredentials};
