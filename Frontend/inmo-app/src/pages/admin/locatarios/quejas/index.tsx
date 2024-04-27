import {MainAppLayout} from '@/layouts';
import {ReportAdminCard} from '@/components';
import {getAllReports} from '@/services/reports';
import {useEffect, useState} from 'react';

const UserReports = () => {
  const [reports, setReports] = useState([]);

  const obtenerReportes = async () => {
    try {
      const response = await getAllReports();
      response.sort((a, b) => b.id_queja - a.id_queja);
      //   @ts-ignore
      setReports(response);
      console.log(response);
    } catch (error) {
      console.error('Error al obtener los reportes');
    }
  };

  useEffect(() => {
    obtenerReportes();
  }, []);
  return (
    <MainAppLayout>
      {reports.length > 0
        ? reports.map((reporte: Object) => (
            <ReportAdminCard
              // @ts-ignore
              key={reporte}
              // @ts-ignore
              id_queja={reporte.id_queja}
              // @ts-ignore
              tipo={reporte.tipo}
              // @ts-ignore
              estado={reporte.estado}
              // @ts-ignore
              descripcion={reporte.descripcion}
            />
          ))
        : ''}
    </MainAppLayout>
  );
};

export default UserReports;
