import React, { Component, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography, Container, Divider } from "@mui/material";
import Button from "@mui/material/Button";
import ReactScoreIndicator from "react-score-indicator";
import data from "../data/main.json";
import Tabs from "./Tabs.js";

function valuetext(value) {
  return `${value}`;
}
const testing = [
  {
    features: [
      {
        type: "Feature",
        properties: {
          地區號碼: "A",
          District: "Central and Western",
          地區: "中西區",
          Pop_Den: "0.422",
          Education: "0.316",
          Environment: "0.737666667",
          Health: "0.843",
          Housing: "0.158",
          Recreation: "0.947",
          Technology: "0.21",
          Transport: "0.474",
          Overall: "0.513458333",
        },
      },
      {
        type: "Feature",
        properties: {
          地區號碼: "B",
          District: "Wan Chai",
          地區: "灣仔",
          Pop_Den: "0.474",
          Education: "0.843",
          Environment: "0.790166667",
          Health: "0.948",
          Housing: "0.106",
          Recreation: "0.736",
          Technology: "0.105",
          Transport: "0.948",
          Overall: "0.618770833",
        },
      },
    ],
  },
];
const importances = [
  {
    value: 1,
    scaledValue: 1,
    label: "Not Important",
  },
  {
    value: 2,
    scaledValue: 2,
    label: "Slightly Important",
  },
  {
    value: 3,
    scaledValue: 3,
    label: "Moderate",
  },
  {
    value: 4,
    scaledValue: 4,
    label: "Important",
  },
  {
    value: 5,
    scaledValue: 5,
    label: "Very Important",
  },
];

// const Score = () => {
export default class Score extends Component {
  state = {
    score: 50,
    lineGap: 5,
    lineWidth: 5,
    fadedOpacity: 40,
  };
  onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value,

    });
  };

  render() {
    const { score1, score2, score3, score4, score5, score6, score7, score8, sum=score1+score2+score3+score4+score5+score6+score7+score8, lineGap, lineWidth, fadedOpacity } = this.state;
    return (
      <div>
        <Tabs/>
      </div>
    );
  }
}
// export default Score;
