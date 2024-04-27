import React from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import {CommonButton} from '@/components';
import {useFormik} from 'formik';
import {NewPropertyValidationSchema} from '@/utils/newPropertyUtils/validation';
import {propertiesResponseData} from '@/types/properties';

type FormProps = {
  onSubmit: (values: propertiesResponseData) => void;
};

export const NewPropertyForm: React.FC<FormProps> = ({onSubmit}) => {
  const formik = useFormik({
    initialValues: {
      codigo_catastral: '',
      direc_calle: '',
      direc_numero: null,
      direc_piso: null,
      direc_puerta: '',
      dni_propietario: null,
    },
    validationSchema: NewPropertyValidationSchema,
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
        Añade una nueva propiedad:
      </Typography>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Codigo Catastral"
          name="codigo_catastral"
          value={formik.values.codigo_catastral}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{width: '100%', padding: '8px', resize: 'vertical'}}
        />
        {formik.touched.codigo_catastral && formik.errors.codigo_catastral && (
          <Typography color="error">
            {formik.errors.codigo_catastral}
          </Typography>
        )}
      </FormControl>

      <FormControl fullWidth margin="normal">
        <TextField
          label="Calle"
          name="direc_calle"
          value={formik.values.direc_calle}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{width: '100%', padding: '8px', resize: 'vertical'}}
          error={
            formik.touched.direc_calle && Boolean(formik.errors.direc_calle)
          }
        />
        {formik.touched.direc_calle && formik.errors.direc_calle && (
          <Typography color="error">{formik.errors.direc_calle}</Typography>
        )}
      </FormControl>

      <FormControl fullWidth margin="normal">
        <TextField
          label="Numero"
          name="direc_numero"
          type="number"
          value={formik.values.direc_numero}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{width: '100%', padding: '8px', resize: 'vertical'}}
        />

        {formik.touched.direc_numero && formik.errors.direc_numero && (
          <Typography color="error">{formik.errors.direc_numero}</Typography>
        )}
      </FormControl>

      <FormControl fullWidth margin="normal">
        <TextField
          label="Piso"
          name="direc_piso"
          type="number"
          value={formik.values.direc_piso}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{width: '100%', padding: '8px', resize: 'vertical'}}
        />
        {formik.touched.direc_piso && formik.errors.direc_piso && (
          <Typography color="error">{formik.errors.direc_piso}</Typography>
        )}
      </FormControl>

      <FormControl fullWidth margin="normal">
        <TextField
          label="Puerta"
          name="direc_puerta"
          value={formik.values.direc_puerta}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{width: '100%', padding: '8px', resize: 'vertical'}}
        />
        {formik.touched.direc_puerta && formik.errors.direc_puerta && (
          <Typography color="error">{formik.errors.direc_puerta}</Typography>
        )}
      </FormControl>

      <FormControl fullWidth margin="normal">
        <TextField
          label="DNI Propietario"
          name="dni_propietario"
          type="number"
          value={formik.values.dni_propietario}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{width: '100%', padding: '8px', resize: 'vertical'}}
        />
        {formik.touched.dni_propietario && formik.errors.dni_propietario && (
          <Typography color="error">{formik.errors.dni_propietario}</Typography>
        )}
      </FormControl>

      <CommonButton
        text="Enviar"
        type="submit"
        variant="contained"
        color="primary"
        buttonSize="fullWidth"
        sx={{marginTop: '5%'}}
      />
    </Box>
  );
};
