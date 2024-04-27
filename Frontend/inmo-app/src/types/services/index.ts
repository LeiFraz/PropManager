type createServiceCredentials = {
  id_contrato: number | null;
  tipo_servicio: string;
  total_mensual_pesos: number | null;
  fecha_emision: string;
  detalle: string | null;
  estado_pago: -1 | 0 | 1 | number;
};

export type {createServiceCredentials};
