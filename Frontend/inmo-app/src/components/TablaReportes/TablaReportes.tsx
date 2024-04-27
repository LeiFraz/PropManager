import * as React from 'react';
import themeDark from '@/theme/themeDark';
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
import {reportsResponseAttributes} from '@/types/reports';

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

type TablareportsProps = {
  reports: reportsResponseAttributes[];
};

export const TablaReportes: React.FC<reportsResponseAttributes> = ({
  // @ts-ignore
  reports,
}) => {
  if (!reports) {
    return <div>...cargando</div>;
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 700}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Id Reporte</StyledTableCell>
            <StyledTableCell align="center">Tipo</StyledTableCell>
            <StyledTableCell align="center">Detalle</StyledTableCell>
            <StyledTableCell align="center">Estado</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reports.map((report: reportsResponseAttributes) => (
            <StyledTableRow key={''}>
              <StyledTableCell component="th" align="center">
                {}
              </StyledTableCell>
              <StyledTableCell component="th" align="center">
                {report.tipo}
              </StyledTableCell>
              <StyledTableCell align="center">
                {report.descripcion}
              </StyledTableCell>

              <StyledTableCell align="center">{report.estado}</StyledTableCell>
              <StyledTableCell align="center">
                <Button sx={{borderRadius: '10%'}}>
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
