import * as React from 'react';
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from '@mui/material';
import themeDark from '@/theme/themeDark';
import {ContractsResponseData} from '@/types/contracts';
import {useRouter} from 'next/router';

type TableAdminPanelProp = {
  contracts: ContractsResponseData[];
};

const StyledTableCell = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: themeDark.palette.secondary.main,
    color: 'white',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({theme}) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  ':hover': {
    backgroundColor: themeDark.palette.primary.main,
  },
}));

export const TableAdminPanel: React.FC<TableAdminPanelProp> = ({contracts}) => {
  const router = useRouter();

  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 700}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Id-Contrato</StyledTableCell>
            <StyledTableCell align="center">Fecha inicio</StyledTableCell>
            <StyledTableCell align="center">Duracion (meses)</StyledTableCell>
            <StyledTableCell align="center">Indexacion</StyledTableCell>
            <StyledTableCell align="center">Valor mensual</StyledTableCell>
            <StyledTableCell align="center">reportes</StyledTableCell>
            <StyledTableCell align="center">Ver Reportes</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contracts.map((contrato: ContractsResponseData) => (
            <StyledTableRow key={contrato.id_contrato}>
              <StyledTableCell component="th" align="center">
                {contrato.id_contrato}
              </StyledTableCell>
              <StyledTableCell component="th" align="center">
                {contrato.fecha_inicio}
              </StyledTableCell>
              <StyledTableCell align="center">
                {contrato.duracion_en_meses}
              </StyledTableCell>

              <StyledTableCell align="center">
                {contrato.margen_aumento_trimestral}
              </StyledTableCell>
              <StyledTableCell align="center">
                {contrato.total_mensual_pesos}
              </StyledTableCell>
              <StyledTableCell align="center">
                {contrato.quejas.length}
              </StyledTableCell>
              <StyledTableCell align="center">
                <Button
                  onClick={() => {
                    router.push('/admin/locatarios/quejas');
                  }}
                  sx={{borderRadius: '10%'}}
                >
                  <Box
                    sx={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: 'orange',
                      border: '3px solid black',
                    }}
                  ></Box>
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
