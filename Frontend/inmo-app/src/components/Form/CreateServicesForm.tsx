import React, {useEffect, useState} from 'react';
import {
  TextField,
  Grid,
  Box,
  Typography,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import {CommonButton} from '@/components';
import {useFormik} from 'formik';
import {CreateServicesValidationSchema} from '@/utils/CreateServicesUtils/validations';
import {createServiceCredentials} from '@/types/services';
import {getAllRent} from '@/services/rent';
import {useSession} from 'next-auth/react';
import {ContractsResponseData} from '@/types/contracts';

type CreateServicesFormProp = {
  onSubmit: (value: createServiceCredentials) => void;
};

export const CreateServicesForm: React.FC<CreateServicesFormProp> = ({
  onSubmit,
}) => {
  const {data: session} = useSession();
  const [loading, setLoading] = useState(true);
  const [contracts, setContracts] = useState<ContractsResponseData[]>([]);

  const formik = useFormik({
    initialValues: {
      id_contrato: null,
      tipo_servicio: '',
      total_mensual_pesos: null,
      fecha_emision: '',
      detalle: '',
      estado_pago: -1,
    },
    validationSchema: CreateServicesValidationSchema,
    onSubmit: (values, {resetForm}) => {
      onSubmit(values);
      resetForm();
    },
  });

  useEffect(() => {
    const obtenerTodosLosUsuarios = async () => {
      try {
        const response = await getAllRent();
        // @ts-ignore
        setContracts(response);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los contratos', error);
        setLoading(false);
      }
    };

    obtenerTodosLosUsuarios();
  }, [session]);

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <Typography sx={{marginBottom: '2%'}} variant="h6">
        Asignar nuevo servicio
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <InputLabel>ID Contrato</InputLabel>
          <Select
            fullWidth
            name="id_contrato"
            type="number"
            value={formik.values.id_contrato}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.id_contrato && Boolean(formik.touched.id_contrato)
            }
          >
            {contracts.map(contract => (
              // @ts-ignore
              <MenuItem key={contract.id_contrato} value={contract.id_contrato}>
                {/* @ts-ignore */}
                {contract.id_contrato}
              </MenuItem>
            ))}
          </Select>
          {formik.touched.id_contrato &&
            Boolean(formik.touched.id_contrato) && (
              <Typography variant="body1" color="error">
                {formik.errors.id_contrato}
              </Typography>
            )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Tipo de Servicio"
            name="tipo_servicio"
            value={formik.values.tipo_servicio}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.tipo_servicio &&
              Boolean(formik.touched.tipo_servicio)
            }
          />
          {formik.touched.tipo_servicio &&
            Boolean(formik.touched.tipo_servicio) && (
              <Typography variant="body1" color="error">
                {formik.errors.tipo_servicio}
              </Typography>
            )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Total Mensual"
            name="total_mensual_pesos"
            type="number"
            value={formik.values.total_mensual_pesos}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Fecha de emisión</InputLabel>
          <TextField
            fullWidth
            name="fecha_emision"
            type="date"
            value={formik.values.fecha_emision}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.fecha_emision &&
              Boolean(formik.touched.fecha_emision)
            }
          />
          {formik.touched.fecha_emision &&
            Boolean(formik.touched.fecha_emision) && (
              <Typography variant="body1" color="error">
                {formik.errors.fecha_emision}
              </Typography>
            )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Detalle"
            name="detalle"
            value={formik.values.detalle}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.detalle && Boolean(formik.touched.detalle)}
          />
          {formik.touched.detalle && Boolean(formik.touched.detalle) && (
            <Typography variant="body1" color="error">
              {formik.errors.detalle}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <Select
            fullWidth
            label="Estado de Pago"
            name="estado_pago"
            type="number"
            value={formik.values.estado_pago}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.estado_pago && Boolean(formik.touched.estado_pago)
            }
          >
            <MenuItem value={-1}>Factura impaga/con mucho retrazo</MenuItem>
            <MenuItem value={0}>Factura en situación normal</MenuItem>
            <MenuItem value={1}>Factura próxima a vencer</MenuItem>
            <MenuItem value={2}>Factura pagada</MenuItem>
          </Select>
          {formik.touched.estado_pago &&
            Boolean(formik.touched.estado_pago) && (
              <Typography variant="body1" color="error">
                {formik.errors.estado_pago}
              </Typography>
            )}
        </Grid>
        <Grid item xs={12}>
          <CommonButton
            text="Asignar Servicio"
            buttonSize="fullWidth"
            variant="contained"
            color="primary"
            type="submit"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
