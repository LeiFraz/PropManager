import React from 'react';
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import {CommonButton} from '@/components';
import {useFormik} from 'formik';
import {NewReportValidationSchema} from '@/utils/newReportUtils/_utils';
import {reportsAttributes} from '@/types/reports';

type FormProps = {
  id_usuario: number;
  onSubmit: (values: reportsAttributes) => void;
};

export const NewReportForm: React.FC<FormProps> = ({id_usuario, onSubmit}) => {
  const formik = useFormik({
    initialValues: {
      id_usuario: id_usuario,
      id_contrato: id_usuario,
      descripcion: '',
      tipo: '',
      estado: 'Pendiente',
    },
    validationSchema: NewReportValidationSchema,
    onSubmit: (values, {resetForm}) => {
      onSubmit(values);
      resetForm();
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{width: '80%'}}>
      <Grid item xs={12}>
        <InputLabel id="tipo-label">Tipo</InputLabel>
        <Select
          fullWidth
          placeholder="Tipo"
          labelId="tipo-label"
          name="tipo"
          value={formik.values.tipo}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.tipo && Boolean(formik.errors.tipo)}
        >
          <MenuItem value="Reparacion">Reparación</MenuItem>
          <MenuItem value="Queja">Queja</MenuItem>
        </Select>
        {formik.touched.tipo && formik.errors.tipo && (
          <Typography color="error">{formik.errors.tipo}</Typography>
        )}
      </Grid>

      <FormControl fullWidth margin="normal">
        <TextField
          label="Descripción"
          name="descripcion"
          value={formik.values.descripcion}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          multiline
          rows={4}
          style={{width: '100%', padding: '8px', resize: 'vertical'}}
          error={
            formik.touched.descripcion && Boolean(formik.errors.descripcion)
          }
        />
        {formik.touched.descripcion && formik.errors.descripcion && (
          <Typography variant="body2" color="error">
            {formik.errors.descripcion}
          </Typography>
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
