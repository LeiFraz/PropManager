type reportsResponseAttributes = {
  id_queja: number;
  id_usuario: number;
  id_contrato: number;
  descripcion: string;
  estado: string;
  tipo: string;
};

type reportsAttributes = {
  id_usuario: number;
  id_contrato: number;
  descripcion: string;
  tipo: string;
  estado: string;
};

export type {reportsResponseAttributes, reportsAttributes};
