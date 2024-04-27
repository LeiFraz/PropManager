import {Select, MenuItem, Box, InputLabel, Typography} from '@mui/material';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {CommonButton} from '../CommonButton/CommonButton';
import {changeReportStatus} from '@/services/reports';

type changeReportStatusProps = {
  onSubmit: (id_queja: number, status: string) => void;
  id_queja: number;
};

const validationSchema = Yup.object({
  estado: Yup.string().required('Requerido'),
});

export const ChangeReportStatusForm: React.FC<changeReportStatusProps> = ({
  onSubmit,
  id_queja,
}) => {
  const formik = useFormik({
    initialValues: {
      id_queja: id_queja,
      estado: '',
    },
    validationSchema,
    // @ts-ignore
    onSubmit: values => {
        // @ts-ignore
      onSubmit(id_queja, values);
    },
  });

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
      component="form"
      onSubmit={formik.handleSubmit}
    >
      <InputLabel>Estado</InputLabel>
      <Select
        fullWidth
        name="estado"
        value={formik.values.estado}
        onChange={e => {
          formik.handleChange(e);
          formik.setFieldValue('estado', e.target.value);
        }}
        onBlur={formik.handleBlur}
      >
        <MenuItem value="Pendiente">Pendiente</MenuItem>
        <MenuItem value="Atendido">Atendido</MenuItem>
        <MenuItem value="Completado">Completado</MenuItem>
      </Select>
      <CommonButton
        text="Actualizar Estado"
        buttonSize="fullWidth"
        variant="contained"
        type="submit"
      />
    </Box>
  );
};
