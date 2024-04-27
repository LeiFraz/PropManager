import * as Yup from 'yup';

export const NewContractValidationSchema = Yup.object({
  id_usuario: Yup.number().required('Este campo es requerido'),
  codigo_catastral_prop: Yup.string().required('Este campo es requerido'),
  fecha_inicio: Yup.string().required('Este campo es requerido'),
  duracion_en_meses: Yup.number().required('Este campo es requerido'),
  total_mensual_pesos: Yup.number().required('Este campo es requerido'),
  margen_aumento_trimestral: Yup.number().required('Este campo es requerido'),
});
