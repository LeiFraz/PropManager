import * as Yup from 'yup';

export const NewPropertyValidationSchema = Yup.object({
  codigo_catastral: Yup.string()
    .min(3, 'el minimo es de 3 caracteres')
    .max(300, 'el maximo son 300 caracteres')
    .required('Este campo es requerido'),
  direc_calle: Yup.string()
    .min(3, 'el minimo es de 3 caracteres')
    .max(300, 'el maximo son 300 caracteres')
    .required('Este campo es requerido'),
  direc_numero: Yup.number().required('Este campo es requerido'),
  direc_piso: Yup.number().required('Este campo es requerido'),
  direc_puerta: Yup.string().required('Este campo es requerido'),
  dni_propietario: Yup.number().required('Este campo es requerido'),
});
