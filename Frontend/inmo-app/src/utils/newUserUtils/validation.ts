import * as Yup from 'yup';

export const NewUserValidationSchema = Yup.object({
  email: Yup.string()
    .email('Usa un correo valido')
    .required('Este campo es requerido'),
  contrasenia: Yup.string()
    .required('Este campo es requerido')
    .min(8, 'La contraseña debe tener al menos 8 caracteres'),
  nombre: Yup.string().required('Este campo es requerido'),
  dni: Yup.number()
    .required('Este campo es requerido')
    .min(8, 'Inserte un dni valido'),
  telefono: Yup.number()
    .required('Este campo es requerido')
    .min(10, 'Minimo 10 caracteres'),
  apellido: Yup.string().required('Este campo es requerido'),
});
