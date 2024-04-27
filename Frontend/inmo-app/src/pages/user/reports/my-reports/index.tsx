import {MainAppLayout} from '@/layouts';
import {ReportCard} from '@/components';
import {getMyReports} from '@/services/reports';
import {useEffect, useState} from 'react';
import {EmptyReportsContainer} from '@/components';

const MyReportsPage = () => {
  const [reports, setReports] = useState([]);

  const obtenerMisQuejas = async () => {
    try {
      const response = await getMyReports();
      // Ordenar los reportes por ID de forma descendente
      response.sort((a, b) => b.id_queja - a.id_queja);
      // @ts-ignore
      setReports(response);
    } catch (error) {
      console.error('Error al obtener los reportes');
    }
  };

  useEffect(() => {
    obtenerMisQuejas();
  }, []);

  return (
    <MainAppLayout title="Tus Reportes">
      {reports.length > 0 ? (
        reports.map((reporte: Object) => (
          <ReportCard
            // @ts-ignore
            key={reporte.id_queja}
            // @ts-ignore
            tipo={reporte.tipo}
            // @ts-ignore
            estado={reporte.estado}
            // @ts-ignore
            descripcion={reporte.descripcion}
          />
        ))
      ) : (
        <EmptyReportsContainer />
      )}
    </MainAppLayout>
  );
};

export default MyReportsPage;
