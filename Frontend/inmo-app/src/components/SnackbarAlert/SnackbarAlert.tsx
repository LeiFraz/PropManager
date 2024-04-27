import * as React from 'react';
import {Snackbar} from '@mui/material';
import MuiAlert, {AlertColor, AlertProps} from '@mui/material/Alert';
import {useSnackbarStore} from '@/store';

type SnackbarAlertProps = {
  isOpen: boolean;
  text: string | undefined;
  severity: AlertColor | undefined;
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  },
);

export const SnackbarAlert: React.FC<SnackbarAlertProps> = ({
  isOpen = false,
  text,
}) => {
  const {snackbar, setSnackbar} = useSnackbarStore(state => state);
  const handleClose = (_event?: React.SyntheticEvent | Event) => {
    setSnackbar({
      ...snackbar,
      isOpen: false,
    });
  };

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={200}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <Alert onClose={handleClose} severity={snackbar?.severity}>
        {text}
      </Alert>
    </Snackbar>
  );
};
