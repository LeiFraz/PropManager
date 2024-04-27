import {
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
  Box,
} from '@mui/material';
import {useFormik} from 'formik';
import {CreateUser} from '@/types/user';
import {NewUserValidationSchema} from '@/utils/newUserUtils/validation';
import React from 'react';

type NewUSerFormProp = {
  onSubmit: (values: CreateUser) => void;
};

export const NewUserForm: React.FC<NewUSerFormProp> = ({onSubmit}) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      contrasenia: '',
      nombre: '',
      apellido: '',
      telefono: null,
      dni: null,
    },
    validationSchema: NewUserValidationSchema,
    onSubmit: values => {
      onSubmit(values);
    },
  });
  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{width: '80%'}}>
      <Typography
        sx={{marginBottom: '2%', borderBottom: '1px solid #000'}}
        variant="h6"
      >
        Crear un nuevo usuario
      </Typography>
      <FormControl fullWidth>
        <TextField
          id="nombreInput"
          label="Nombre"
          variant="outlined"
          margin="dense"
          name="nombre"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.nombre && Boolean(formik.errors.nombre)}
        />
        {formik.touched.nombre && Boolean(formik.errors.nombre) && (
          <Typography color="error" variant="body1">
            {formik.errors.nombre}
          </Typography>
        )}
        <TextField
          id="apellidoInput"
          label="Apellido"
          variant="outlined"
          margin="dense"
          name="apellido"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.apellido && Boolean(formik.errors.apellido)}
        />
        {formik.touched.apellido && Boolean(formik.errors.apellido) && (
          <Typography variant="body1" color="error">
            {formik.errors.apellido}
          </Typography>
        )}
        <TextField
          id="dni"
          label="DNI"
          variant="outlined"
          margin="dense"
          name="dni"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.dni && Boolean(formik.errors.dni)}
        />
        {formik.touched.dni && Boolean(formik.errors.dni) && (
          <Typography variant="body1" color="error">
            {formik.errors.dni}
          </Typography>
        )}
        <TextField
          id="telefono"
          label="Teléfono"
          variant="outlined"
          margin="dense"
          name="telefono"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.telefono && Boolean(formik.errors.telefono)}
        />
        {formik.touched.telefono && Boolean(formik.errors.telefono) && (
          <Typography variant="body1" color="error">
            {formik.errors.telefono}
          </Typography>
        )}
        <TextField
          id="nuevoUserInput"
          label="Nuevo usuario"
          variant="outlined"
          fullWidth
          margin="dense"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        {formik.touched.email && Boolean(formik.errors.email) && (
          <Typography variant="body1" color="error">
            {formik.errors.email}
          </Typography>
        )}
        <TextField
          id="nuevoPasswordInput"
          label="Nuevo password"
          variant="outlined"
          fullWidth
          margin="dense"
          name="contrasenia"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.contrasenia && Boolean(formik.errors.contrasenia)
          }
        />
        {formik.touched.contrasenia && Boolean(formik.errors.contrasenia) && (
          <Typography variant="body1" color="error">
            {formik.errors.contrasenia}
          </Typography>
        )}
      </FormControl>
      <Button
        type="submit"
        color="primary"
        variant="contained"
        fullWidth
        sx={{marginTop: '20px'}}
      >
        Agregar Usuario
      </Button>
    </Box>
  );
};
