import { Grid } from "@mui/material";
import { PieChartComponent } from "./Components/PieChart";
import { BarChart } from "./Components/BarChart";
import React from "react";
import { CardBar } from "./Components/CardBar";
import { CardSummary } from "./Components/CardSummary";

const Dashboard = () => {
  return (
    <Grid>
      <Grid container spacing={3}>
        <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
          <CardSummary
            title="Hong Kong Population"
            value={7324600}
            footer={<div> as at 2021 </div>}
          />
        </Grid>
        <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
          <CardSummary
            title="Male"
            value={3339800}
            footer={<div> as at 2021 </div>}
          />
        </Grid>
        <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
          <CardSummary
            title="Female"
            value={3984800}
            footer={<div> as at 2021  </div>}
          />
        </Grid>
        <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
          <CardSummary
            title="Population Density"
            value={6810}
            footer={<div> Population Density<br/>
            Persons per sq. km </div>}
          />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <CardBar title="Livability" chart={<BarChart />} />
        </Grid>
        {/* <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
          <CardBar title="Stat" chart={<PieChartComponent />} />
        </Grid> */}
      </Grid>
    </Grid>
  );
}

export default Dashboard ;
