import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  dataset: string,
  department: string,
  hyperlink: string,
) {
  return { dataset, department, hyperlink };
}

const rows = [
  // createData('Frozen yoghurt', 159, 6.0),
  // createData('Ice cream sandwich', 237, 9.0),
  // createData('Eclair', 262, 16.0, 24, 6.0),
  // createData('Cupcake', 305, 3.7, 67, 4.3),
  // createData('Gingerbread', 356, 16.0, 49, 3.9),
  
createData('18 district boundary','HAD','https://data.gov.hk/en-data/dataset/hk-had-json1-hong-kong-administrative-boundaries'),
createData('Wi-Fi.HK Locations','OGCIO*',' https://geodata.gov.hk/gs/view-dataset?uuid=bbea81e1-135b-49b1-9067-8c99f56fa985&sidx=0'),
createData('Clinics / Health Centres','DH*','https://geodata.gov.hk/gs/view-dataset?uuid=fe3738e1-c632-4724-9568-ffd41e435c02&sidx=0'),
createData('General Outpatient Clinics','HA*','https://geodata.gov.hk/gs/view-dataset?uuid=2852ec0f-719f-494e-9772-e53af3a2f5bb&sidx=0'),
createData('Children Play Rooms','LCSD*','https://geodata.gov.hk/gs/view-dataset?uuid=41b1ee77-984d-4651-8876-0084ecf372df&sidx=0'),
createData('Sports Centres','LCSD*','https://geodata.gov.hk/gs/view-dataset?uuid=d1a2e8e0-8636-41e9-b664-0e64b86860a2&sidx=0'),
createData('Aided Primary Schools','EdB*','https://geodata.gov.hk/gs/view-dataset?uuid=41f53d43-7d82-4e44-9a9e-d4e9d1c4781c&sidx=0'),
createData('Aided Secondary Schools','EdB*','https://geodata.gov.hk/gs/view-dataset?uuid=b545518d-efe1-446d-8525-530b23047aba&sidx=0'),
createData('Direct Subsidy Scheme Primary Schools','EdB*','https://geodata.gov.hk/gs/view-dataset?uuid=5ea5b3c6-ef95-44cc-a9fc-43f2d69e56f1&sidx=0'),
createData('Direct Subsidy Scheme Secondary Schools','EdB*','https://geodata.gov.hk/gs/view-dataset?uuid=e4d0a272-720c-4f58-9632-85e7e840a0fb&sidx=0'),
createData('Government Primary Schools','EdB*','https://geodata.gov.hk/gs/view-dataset?uuid=e55b1a7d-e52e-4f1a-903f-ab2edb93ebbb&sidx=0'),
createData('Government Secondary Schools','EdB*','https://geodata.gov.hk/gs/view-dataset?uuid=c669790c-a633-4bc4-88a1-3d29e146b792&sidx=0'),
createData('Study Room','EdB*','https://geodata.gov.hk/gs/view-dataset?uuid=8617662e-02a7-40ba-bb85-5c5ca17a3950&sidx=0'),
createData('Air Quality Health Index','EPD','https://www.aqhi.gov.hk/tc/annual-aqi/latest-annual-aqi.html'),
createData('Water Pollution','WSD','https://www.wsd.gov.hk/tc/core-businesses/water-quality/action-plan-for-enhancing-of-drinking-water-safety/drinking-water-standards-enhanced-water-quality/annual-water-quality-statistics/water-quality-statistics-in-18dsd/index.html'),
createData('Housing Price','Centaline','http://hkdata.centanet.com/BigData/%E9%A6%99%E6%B8%AF?field=WP&sort=asc'),

];

export default function Data() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dataset</TableCell>
            <TableCell align="center">Department</TableCell>
            <TableCell align="left">Hyperlink</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.dataset}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.dataset}
              </TableCell>
              <TableCell align="center">{row.department}</TableCell>
              <TableCell align="left">{row.hyperlink}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}