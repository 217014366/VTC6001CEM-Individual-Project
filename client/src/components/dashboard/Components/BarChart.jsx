import React from "react";
import { Paper } from "@mui/material";
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
  Tooltip
} from "@devexpress/dx-react-chart-material-ui";

import { EventTracker } from "@devexpress/dx-react-chart";
import main from "../../data/main.json"

const data = [
  { district: "Central and Western", status: 0.513458333*100 },
  { district: "Wan Chai", status: main.features[1].properties.Overall*100 },
  { district: "Eastern", status: main.features[2].properties.Overall*100 },
  { district: "Southern", status: main.features[3].properties.Overall*100 },
  { district: "Yau Tsim Mong", status: main.features[4].properties.Overall*100 },
  { district: "Sham Shui Po", status: main.features[5].properties.Overall*100 },
  { district: "Kowloon City", status: main.features[6].properties.Overall*100 },
  { district: "Wong Tai Sin", status: main.features[7].properties.Overall*100 },
  { district: "Kwun Tong", status: main.features[8].properties.Overall*100 },
  { district: "Tsuen Wan", status: main.features[9].properties.Overall*100 },
  { district: "Tuen Mun", status: main.features[10].properties.Overall*100 },
  { district: "Yuen Long", status: main.features[11].properties.Overall*100 },
  { district: "North", status: main.features[12].properties.Overall*100 },
  { district: "Tai Po", status: main.features[13].properties.Overall*100 },
  { district: "Sai Kung", status: main.features[14].properties.Overall*100 },
  { district: "Sha Tin", status: main.features[15].properties.Overall*100 },
  { district: "Kwai Tsing", status: main.features[16].properties.Overall*100 },
  { district: "Islands", status: main.features[17].properties.Overall*100 },
  
];

function BarChart() {
  return (
    <Paper>
      <Chart data={data}>
        <ArgumentAxis />
        <ValueAxis />
        <BarSeries valueField="status" argumentField="district" />
        <EventTracker />
        <Tooltip />
      </Chart>
    </Paper>
  );
}

export { BarChart };
