import * as Yup from 'yup';

export const CreateServicesValidationSchema = Yup.object({
  id_contrato: Yup.number().required('Este campo es requerido'),
  tipo_servicio: Yup.string().required('Este campo es requerido'),
  total_mensual_pesos: Yup.number().required('Este campo es obligatorio'),
  fecha_emision: Yup.string().required('Este campo es obligatorio'),
  detalle: Yup.string().required('Este campo es obligatorio'),
  estado_pago: Yup.number().required('Este campo es obligatorio'),
});
