import * as Yup from 'yup';

export const NewReportValidationSchema = Yup.object({
  descripcion: Yup.string()
    .min(3, 'el minimo es de 3 caracteres')
    .max(300, 'el maximo son 300 caracteres')
    .required('Este campo es requerido'),
  tipo: Yup.string().required('Este campo es requerido'),
});
