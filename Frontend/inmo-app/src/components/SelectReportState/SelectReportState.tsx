import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import * as React from 'react';

interface Props {
  onSelectChange: (selectedValue: string) => void;
}

export const SelectReportState: React.FC<Props> = ({onSelectChange}) => {
  const [open, setOpen] = React.useState(false);
  const [estado, setEstado] = React.useState<string>('');

  const handleChange = (event: SelectChangeEvent<typeof estado>) => {
    setEstado(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent, reason?: string) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  const handleConfirm = () => {
    onSelectChange(estado);
    setOpen(false);
  };
  return (
    <div>
      <Button onClick={handleClickOpen}>Cambiar el estado</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Cambiar el estado</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{display: 'flex', flexWrap: 'wrap'}}>
            <FormControl sx={{m: 1, minWidth: 120}}>
              <InputLabel htmlFor="estado">Estado</InputLabel>
              <Select
                native
                value={estado}
                onChange={handleChange}
                input={<OutlinedInput label="estado" id="estado" />}
              >
                <option aria-label="None" value="" />
                <option value="Pendiente">Pendiente</option>
                <option value="Atendido">Atendido</option>
                <option value="Completado">Completado</option>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleConfirm}>Cambiar estado</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
