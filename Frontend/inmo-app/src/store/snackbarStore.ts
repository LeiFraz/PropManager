import {AlertColor} from '@mui/material';
import {create} from 'zustand';

type SnackbarAlertProps = {
  isOpen: boolean;
  text: string | undefined;
  severity: AlertColor | undefined;
};

interface SnackbarStoreState {
  snackbar: SnackbarAlertProps;
  setSnackbar: (value: SnackbarAlertProps) => void;
}

export const useSnackbarStore = create<SnackbarStoreState>()(set => ({
  snackbar: {
    text: '',
    severity: undefined,
    isOpen: false,
  },
  setSnackbar: ({text, severity, isOpen}) =>
    set(() => ({
      snackbar: {
        text: text,
        severity: severity,
        isOpen: isOpen,
      },
    })),
}));
