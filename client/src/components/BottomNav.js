import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from '@mui/material';
import { AddLocationAlt, Bed, LocationOn } from '@mui/icons-material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CalculateIcon from '@mui/icons-material/Calculate';
import DataArrayIcon from '@mui/icons-material/DataArray';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useEffect, useRef, useState } from 'react';
import Demo from './dashboard/Dashboard.jsx';
import Score from './score/Score';
import Map from './map/Map';
import Data from './data/Data'
import ChoroplethMap from './map/ChoroplethMap.jsx';

const BottomNav = () => {
  const [value, setValue] = useState(0);
  const ref = useRef();
  useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  }, [value]);
  return (
    <Box ref={ref}>
      {
        {
          0: <ChoroplethMap />,
          1: <Demo />,
          2: <Score />,
          3: <Data />,
        }[value]
      }
      <Paper
        elevation={5}
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 2 }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
        >
          <BottomNavigationAction label="Map" icon={<LocationOn />} />
          {/* <BottomNavigationAction label="Rooms" icon={<Bed />} />
          <BottomNavigationAction label="Add" icon={<AddLocationAlt />} /> */}
          <BottomNavigationAction label="Dashboard" icon={<DashboardIcon />} />
          <BottomNavigationAction label="Score" icon={<CalculateIcon />} />
          <BottomNavigationAction label="Data" icon={<DataArrayIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default BottomNav;
