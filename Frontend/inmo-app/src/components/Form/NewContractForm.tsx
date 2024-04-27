import React, {useState, useEffect} from 'react';
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
import {CreateContractCredentials} from '@/types/contracts';
import {userAttributesResponse} from '@/types/user';
import {NewContractValidationSchema} from '@/utils/CreateContractUtils';
import {useFormik} from 'formik';
import {CommonButton} from '../CommonButton/CommonButton';
import {getAllUsers} from '@/services/user';
import {useSession} from 'next-auth/react';

type FormProps = {
  onSubmit: (values: CreateContractCredentials) => void;
};

const initialValues: CreateContractCredentials = {
  id_inmobiliaria: 1,
  id_usuario: null,
  codigo_catastral_prop: '',
  fecha_inicio: '',
  duracion_en_meses: null,
  contrato_digital: null,
  total_mensual_pesos: null,
  margen_aumento_trimestral: null,
};

export const NewContractForm: React.FC<FormProps> = ({onSubmit}) => {
  const {data: session} = useSession();
  const [loading, setLoading] = useState(true);
  const [userList, setUserList] = useState<userAttributesResponse[]>([]);

  const formik = useFormik({
    initialValues,
    validationSchema: NewContractValidationSchema,
    onSubmit: (values, {resetForm}) => {
      onSubmit(values);
      resetForm();
    },
  });

  useEffect(() => {
    const obtenerTodosLosUsuarios = async () => {
      try {
        const response = await getAllUsers();
        // @ts-ignore
        setUserList(response);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los usuarios', error);
        setLoading(false);
      }
    };

    obtenerTodosLosUsuarios();
  }, [session]);

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <Typography
        sx={{marginBottom: '2%', borderBottom: '1px solid #000'}}
        variant="h6"
      >
        Crea un nuevo contrato:
      </Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel>Id Inquilino</InputLabel>
        <Select
          label="ID Inquilino"
          name="id_usuario"
          value={formik.values.id_usuario}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{width: '100%', padding: '8px', resize: 'vertical'}}
          error={
            formik.touched.id_usuario && Boolean(formik.touched.id_usuario)
          }
        >
          {userList.map(user => (
            <MenuItem key={user.id_usuario} value={user.id_usuario}>
              {user.id_usuario}
            </MenuItem>
          ))}
        </Select>
        {formik.touched.id_usuario && Boolean(formik.touched.id_usuario) && (
          <Typography variant="body1" color="error">
            {formik.errors.id_usuario}
          </Typography>
        )}
      </FormControl>

      <FormControl fullWidth margin="normal">
        <TextField
          label="ID Inmobiliaria"
          name="id_inmobiliaria"
          type="number"
          value={formik.values.id_inmobiliaria}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{width: '100%', padding: '8px', resize: 'vertical'}}
          error={
            formik.touched.id_inmobiliaria &&
            Boolean(formik.touched.id_inmobiliaria)
          }
        />
        {formik.touched.id_inmobiliaria &&
          Boolean(formik.touched.id_inmobiliaria) && (
            <Typography variant="body1" color="error">
              {formik.errors.id_inmobiliaria}
            </Typography>
          )}
      </FormControl>

      <FormControl fullWidth margin="normal">
        <TextField
          label="Codigo Catastral"
          name="codigo_catastral_prop"
          value={formik.values.codigo_catastral_prop}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{width: '100%', padding: '8px', resize: 'vertical'}}
          error={
            formik.touched.codigo_catastral_prop &&
            Boolean(formik.touched.codigo_catastral_prop)
          }
        />
        {formik.touched.codigo_catastral_prop &&
          Boolean(formik.touched.codigo_catastral_prop) && (
            <Typography variant="body1" color="error">
              {formik.errors.codigo_catastral_prop}
            </Typography>
          )}
      </FormControl>

      <Grid item xs={12}>
        <InputLabel>Fecha de inicio</InputLabel>
        <TextField
          fullWidth
          name="fecha_inicio"
          type="date"
          value={formik.values.fecha_inicio}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.fecha_inicio && Boolean(formik.touched.fecha_inicio)
          }
        />
        {formik.touched.fecha_inicio &&
          Boolean(formik.touched.fecha_inicio) && (
            <Typography variant="body1" color="error">
              {formik.errors.fecha_inicio}
            </Typography>
          )}
      </Grid>

      <FormControl fullWidth margin="normal">
        <TextField
          label="Meses de duración"
          name="duracion_en_meses"
          type="number"
          value={formik.values.duracion_en_meses}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{width: '100%', padding: '8px', resize: 'vertical'}}
          error={
            formik.touched.duracion_en_meses &&
            Boolean(formik.touched.duracion_en_meses)
          }
        />
        {formik.touched.duracion_en_meses &&
          Boolean(formik.touched.duracion_en_meses) && (
            <Typography variant="body1" color="error">
              {formik.errors.duracion_en_meses}
            </Typography>
          )}
      </FormControl>

      <FormControl fullWidth margin="normal">
        <TextField
          label="Valor Mensual"
          name="total_mensual_pesos"
          type="number"
          value={formik.values.total_mensual_pesos}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{width: '100%', padding: '8px', resize: 'vertical'}}
          error={
            formik.touched.total_mensual_pesos &&
            Boolean(formik.touched.total_mensual_pesos)
          }
        />
        {formik.touched.total_mensual_pesos &&
          Boolean(formik.touched.total_mensual_pesos) && (
            <Typography variant="body1" color="error">
              {formik.errors.total_mensual_pesos}
            </Typography>
          )}
      </FormControl>

      <FormControl fullWidth margin="normal">
        <TextField
          label="Margen de aumento trimestral"
          name="margen_aumento_trimestral"
          type="number"
          value={formik.values.margen_aumento_trimestral}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{width: '100%', padding: '8px', resize: 'vertical'}}
          error={
            formik.touched.margen_aumento_trimestral &&
            Boolean(formik.touched.margen_aumento_trimestral)
          }
        />
        {formik.touched.margen_aumento_trimestral &&
          Boolean(formik.touched.margen_aumento_trimestral) && (
            <Typography variant="body1" color="error">
              {formik.errors.margen_aumento_trimestral}
            </Typography>
          )}
      </FormControl>

      <CommonButton
        text="Crear contrato"
        buttonSize="fullWidth"
        variant="contained"
        type="submit"
      />
    </Box>
  );
};
