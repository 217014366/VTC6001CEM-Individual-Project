import "./App.css";
import React, { Component, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography, Container, Divider } from "@mui/material";
import Button from "@mui/material/Button";
import ReactScoreIndicator from "react-score-indicator";
import data from "../data/main.json";

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

export default class Tabs extends Component {
  state = {
    score: 50,
    lineGap: 5,
    lineWidth: 5,
    fadedOpacity: 40,
    toggleState: 1,
  };
  onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      score1,
      score2,
      score3,
      score4,
      score5,
      score6,
      score7,
      score8,
      sum = score1 +
        score2 +
        score3 +
        score4 +
        score5 +
        score6 +
        score7 +
        score8,
      lineGap,
      lineWidth,
      fadedOpacity,
      toggleState,
    } = this.state;

    // const toggleTab = (index) => {
    //   setToggleState(index);
    // };

    return (
      <div className="container">
        <br />
        <Slider
          className="sample"
          aria-label="Score"
          defaultValue={3}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={1}
          marks={importances}
          min={1}
          max={5}
          disabled={true}
        />
        <br />
        <div className="bloc-tabs">
          <button
            className={
              this.state.toggleState === 1 ? "tabs active-tabs" : "tabs"
            }
            onClick={() => this.setState({ toggleState: 1 })}
          >
            Central
            <br />
            and
            <br />
            Western
          </button>
          <button
            className={
              this.state.toggleState === 2 ? "tabs active-tabs" : "tabs"
            }
            onClick={() => this.setState({ toggleState: 2 })}
          >
            Wan
            <br />
            Chai
          </button>
          <button
            className={
              this.state.toggleState === 3 ? "tabs active-tabs" : "tabs"
            }
            onClick={() => this.setState({ toggleState: 3 })}
          >
            Eastern
          </button>
          <button
            className={
              this.state.toggleState === 4 ? "tabs active-tabs" : "tabs"
            }
            onClick={() => this.setState({ toggleState: 4 })}
          >
            Southern
          </button>
          <button
            className={
              this.state.toggleState === 5 ? "tabs active-tabs" : "tabs"
            }
            onClick={() => this.setState({ toggleState: 5 })}
          >
            Yau Tsim Mong
          </button>
          <button
            className={
              this.state.toggleState === 6 ? "tabs active-tabs" : "tabs"
            }
            onClick={() => this.setState({ toggleState: 6 })}
          >
            Sham<br/>Shui Po
          </button>
          <button
            className={
              this.state.toggleState === 7 ? "tabs active-tabs" : "tabs"
            }
            onClick={() => this.setState({ toggleState: 7 })}
          >
            Kowloon
            <br />
            City
          </button>
          <button
            className={
              this.state.toggleState === 8 ? "tabs active-tabs" : "tabs"
            }
            onClick={() => this.setState({ toggleState: 8 })}
          >
            Wong Tai Sin
          </button>
          <button
            className={
              this.state.toggleState === 9 ? "tabs active-tabs" : "tabs"
            }
            onClick={() => this.setState({ toggleState: 9 })}
          >
            Kwun
            <br />
            Tong
          </button>
          <button
            className={
              this.state.toggleState === 10 ? "tabs active-tabs" : "tabs"
            }
            onClick={() => this.setState({ toggleState: 10 })}
          >
            Tsuen
            <br />
            Wan
          </button>
          <button
            className={
              this.state.toggleState === 11 ? "tabs active-tabs" : "tabs"
            }
            onClick={() => this.setState({ toggleState: 11 })}
          >
            Tuen Mun
          </button>
          <button
            className={
              this.state.toggleState === 12 ? "tabs active-tabs" : "tabs"
            }
            onClick={() => this.setState({ toggleState: 12 })}
          >
            Yuen
            <br />
            Long
          </button>
          <button
            className={
              this.state.toggleState === 13 ? "tabs active-tabs" : "tabs"
            }
            onClick={() => this.setState({ toggleState: 13 })}
          >
            North
          </button>
          <button
            className={
              this.state.toggleState === 14 ? "tabs active-tabs" : "tabs"
            }
            onClick={() => this.setState({ toggleState: 14 })}
          >
            Tai Po
          </button>
          <button
            className={
              this.state.toggleState === 15 ? "tabs active-tabs" : "tabs"
            }
            onClick={() => this.setState({ toggleState: 15 })}
          >
            Sai Kung
          </button>
          <button
            className={
              this.state.toggleState === 16 ? "tabs active-tabs" : "tabs"
            }
            onClick={() => this.setState({ toggleState: 16 })}
          >
            Sha Tin
          </button>
          <button
            className={
              this.state.toggleState === 17 ? "tabs active-tabs" : "tabs"
            }
            onClick={() => this.setState({ toggleState: 17 })}
          >
            Kwai
            <br />
            Tsing
          </button>
          <button
            className={
              this.state.toggleState === 18 ? "tabs active-tabs" : "tabs"
            }
            onClick={() => this.setState({ toggleState: 18 })}
          >
            Islands
          </button>
          <button
            className={
              this.state.toggleState === 19 ? "tabs active-tabs" : "tabs"
            }
            onClick={() => this.setState({ toggleState: 19 })}
          >
            Overall
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              this.state.toggleState === 1
                ? "content  active-content"
                : "content"
            }
          >
            <h2>Central and Western</h2>
            <hr />
            <Container
              sx={{ my: 2 }}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Population Density
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score1"
                  onChange={this.onChange}
                  value={score1}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[0].properties.Pop_Den * 100 * score1) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Housing
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score2"
                  onChange={this.onChange}
                  value={score2}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[0].properties.Housing * 100 * score2) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Education
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score3"
                  onChange={this.onChange}
                  value={score3}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[0].properties.Education * 100 * score3) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Technology
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score4"
                  onChange={this.onChange}
                  value={score4}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[0].properties.Technology * 100 * score4) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Environment
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score5"
                  onChange={this.onChange}
                  value={score5}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[0].properties.Environment *
                        100 *
                        score5) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Recreation
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score6"
                  onChange={this.onChange}
                  value={score6}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[0].properties.Recreation * 100 * score6) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Health
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score7"
                  onChange={this.onChange}
                  value={score7}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[0].properties.Health * 100 * score7) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Transport
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score8"
                  onChange={this.onChange}
                  value={score8}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[0].properties.Transport * 100 * score8) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
            </Container>
            <Typography id="input-slider" className="centered" variant="h4">
              Overall
            </Typography>
            <Container
              sx={{ my: 1 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[0].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[0].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[0].properties.Education * 100 * score3) /
                        sum +
                      (data.features[0].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[0].properties.Environment * 100 * score5) /
                        sum +
                      (data.features[0].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[0].properties.Health * 100 * score7) /
                        sum +
                      (data.features[0].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              />
            </Container>
          </div>

          <div
            className={
              this.state.toggleState === 2
                ? "content  active-content"
                : "content"
            }
          >
            <h2>Wan Chai</h2>
            <hr />
            <Container
              sx={{ my: 2 }}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Population Density
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score1"
                  onChange={this.onChange}
                  value={score1}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[1].properties.Pop_Den * 100 * score1) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Housing
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score2"
                  onChange={this.onChange}
                  value={score2}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[1].properties.Housing * 100 * score2) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Education
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score3"
                  onChange={this.onChange}
                  value={score3}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[1].properties.Education * 100 * score3) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Technology
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score4"
                  onChange={this.onChange}
                  value={score4}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[1].properties.Technology * 100 * score4) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Environment
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score5"
                  onChange={this.onChange}
                  value={score5}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[1].properties.Environment *
                        100 *
                        score5) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Recreation
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score6"
                  onChange={this.onChange}
                  value={score6}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[1].properties.Recreation * 100 * score6) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Health
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score7"
                  onChange={this.onChange}
                  value={score7}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[1].properties.Health * 100 * score7) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Transport
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score8"
                  onChange={this.onChange}
                  value={score8}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[1].properties.Transport * 100 * score8) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
            </Container>
            <Typography id="input-slider" className="centered" variant="h4">
              Overall
            </Typography>
            <Container
              sx={{ my: 1 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[1].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[1].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[1].properties.Education * 100 * score3) /
                        sum +
                      (data.features[1].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[1].properties.Environment * 100 * score5) /
                        sum +
                      (data.features[1].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[1].properties.Health * 100 * score7) /
                        sum +
                      (data.features[1].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              />
            </Container>
          </div>

          <div
            className={
              this.state.toggleState === 3
                ? "content  active-content"
                : "content"
            }
          >
            <h2>Eastern</h2>
            <hr />
            <Container
              sx={{ my: 2 }}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Population Density
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score1"
                  onChange={this.onChange}
                  value={score1}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[2].properties.Pop_Den * 100 * score1) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Housing
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score2"
                  onChange={this.onChange}
                  value={score2}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[2].properties.Housing * 100 * score2) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Education
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score3"
                  onChange={this.onChange}
                  value={score3}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[2].properties.Education * 100 * score3) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Technology
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score4"
                  onChange={this.onChange}
                  value={score4}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[2].properties.Technology * 100 * score4) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Environment
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score5"
                  onChange={this.onChange}
                  value={score5}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[2].properties.Environment *
                        100 *
                        score5) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Recreation
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score6"
                  onChange={this.onChange}
                  value={score6}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[2].properties.Recreation * 100 * score6) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Health
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score7"
                  onChange={this.onChange}
                  value={score7}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[2].properties.Health * 100 * score7) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Transport
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score8"
                  onChange={this.onChange}
                  value={score8}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[2].properties.Transport * 100 * score8) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
            </Container>
            <Typography id="input-slider" className="centered" variant="h4">
              Overall
            </Typography>
            <Container
              sx={{ my: 1 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[2].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[2].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[2].properties.Education * 100 * score3) /
                        sum +
                      (data.features[2].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[2].properties.Environment * 100 * score5) /
                        sum +
                      (data.features[2].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[2].properties.Health * 100 * score7) /
                        sum +
                      (data.features[2].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              />
            </Container>
          </div>

          <div
            className={
              this.state.toggleState === 4
                ? "content  active-content"
                : "content"
            }
          >
            <h2>Southern</h2>
            <hr />
            <Container
              sx={{ my: 2 }}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Population Density
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score1"
                  onChange={this.onChange}
                  value={score1}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[3].properties.Pop_Den * 100 * score1) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Housing
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score2"
                  onChange={this.onChange}
                  value={score2}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[3].properties.Housing * 100 * score2) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Education
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score3"
                  onChange={this.onChange}
                  value={score3}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[3].properties.Education * 100 * score3) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Technology
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score4"
                  onChange={this.onChange}
                  value={score4}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[3].properties.Technology * 100 * score4) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Environment
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score5"
                  onChange={this.onChange}
                  value={score5}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[3].properties.Environment *
                        100 *
                        score5) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Recreation
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score6"
                  onChange={this.onChange}
                  value={score6}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[3].properties.Recreation * 100 * score6) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Health
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score7"
                  onChange={this.onChange}
                  value={score7}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[3].properties.Health * 100 * score7) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Transport
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score8"
                  onChange={this.onChange}
                  value={score8}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[3].properties.Transport * 100 * score8) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
            </Container>
            <Typography id="input-slider" className="centered" variant="h4">
              Overall
            </Typography>
            <Container
              sx={{ my: 1 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[3].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[3].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[3].properties.Education * 100 * score3) /
                        sum +
                      (data.features[3].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[3].properties.Environment * 100 * score5) /
                        sum +
                      (data.features[3].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[3].properties.Health * 100 * score7) /
                        sum +
                      (data.features[3].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              />
            </Container>
          </div>

          <div
            className={
              this.state.toggleState === 5
                ? "content  active-content"
                : "content"
            }
          >
            <h2>Yau Tsim Mong</h2>
            <hr />
            <Container
              sx={{ my: 2 }}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Population Density
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score1"
                  onChange={this.onChange}
                  value={score1}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[4].properties.Pop_Den * 100 * score1) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Housing
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score2"
                  onChange={this.onChange}
                  value={score2}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[4].properties.Housing * 100 * score2) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Education
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score3"
                  onChange={this.onChange}
                  value={score3}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[4].properties.Education * 100 * score3) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Technology
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score4"
                  onChange={this.onChange}
                  value={score4}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[4].properties.Technology * 100 * score4) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Environment
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score5"
                  onChange={this.onChange}
                  value={score5}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[4].properties.Environment *
                        100 *
                        score5) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Recreation
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score6"
                  onChange={this.onChange}
                  value={score6}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[4].properties.Recreation * 100 * score6) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Health
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score7"
                  onChange={this.onChange}
                  value={score7}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[4].properties.Health * 100 * score7) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Transport
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score8"
                  onChange={this.onChange}
                  value={score8}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[4].properties.Transport * 100 * score8) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
            </Container>
            <Typography id="input-slider" className="centered" variant="h4">
              Overall
            </Typography>
            <Container
              sx={{ my: 1 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[4].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[4].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[4].properties.Education * 100 * score3) /
                        sum +
                      (data.features[4].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[4].properties.Environment * 100 * score5) /
                        sum +
                      (data.features[4].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[4].properties.Health * 100 * score7) /
                        sum +
                      (data.features[4].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              />
            </Container>
          </div>

          <div
            className={
              this.state.toggleState === 6
                ? "content  active-content"
                : "content"
            }
          >
            <h2>Sham Shui Po</h2>
            <hr />
            <Container
              sx={{ my: 2 }}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Population Density
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score1"
                  onChange={this.onChange}
                  value={score1}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[5].properties.Pop_Den * 100 * score1) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Housing
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score2"
                  onChange={this.onChange}
                  value={score2}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[5].properties.Housing * 100 * score2) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Education
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score3"
                  onChange={this.onChange}
                  value={score3}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[5].properties.Education * 100 * score3) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Technology
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score4"
                  onChange={this.onChange}
                  value={score4}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[5].properties.Technology * 100 * score4) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Environment
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score5"
                  onChange={this.onChange}
                  value={score5}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[5].properties.Environment *
                        100 *
                        score5) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Recreation
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score6"
                  onChange={this.onChange}
                  value={score6}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[5].properties.Recreation * 100 * score6) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Health
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score7"
                  onChange={this.onChange}
                  value={score7}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[5].properties.Health * 100 * score7) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Transport
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score8"
                  onChange={this.onChange}
                  value={score8}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[5].properties.Transport * 100 * score8) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
            </Container>
            <Typography id="input-slider" className="centered" variant="h4">
              Overall
            </Typography>
            <Container
              sx={{ my: 1 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[5].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[5].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[5].properties.Education * 100 * score3) /
                        sum +
                      (data.features[5].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[5].properties.Environment * 100 * score5) /
                        sum +
                      (data.features[5].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[5].properties.Health * 100 * score7) /
                        sum +
                      (data.features[5].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              />
            </Container>
          </div>

          <div
            className={
              this.state.toggleState === 7
                ? "content  active-content"
                : "content"
            }
          >
            <h2>Kowloon City</h2>
            <hr />
            <Container
              sx={{ my: 2 }}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Population Density
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score1"
                  onChange={this.onChange}
                  value={score1}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[6].properties.Pop_Den * 100 * score1) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Housing
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score2"
                  onChange={this.onChange}
                  value={score2}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[6].properties.Housing * 100 * score2) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Education
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score3"
                  onChange={this.onChange}
                  value={score3}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[6].properties.Education * 100 * score3) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Technology
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score4"
                  onChange={this.onChange}
                  value={score4}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[6].properties.Technology * 100 * score4) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Environment
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score5"
                  onChange={this.onChange}
                  value={score5}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[6].properties.Environment *
                        100 *
                        score5) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Recreation
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score6"
                  onChange={this.onChange}
                  value={score6}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[6].properties.Recreation * 100 * score6) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Health
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score7"
                  onChange={this.onChange}
                  value={score7}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[6].properties.Health * 100 * score7) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Transport
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score8"
                  onChange={this.onChange}
                  value={score8}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[6].properties.Transport * 100 * score8) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
            </Container>
            <Typography id="input-slider" className="centered" variant="h4">
              Overall
            </Typography>
            <Container
              sx={{ my: 1 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[6].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[6].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[6].properties.Education * 100 * score3) /
                        sum +
                      (data.features[6].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[6].properties.Environment * 100 * score5) /
                        sum +
                      (data.features[6].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[6].properties.Health * 100 * score7) /
                        sum +
                      (data.features[6].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              />
            </Container>
          </div>

          <div
            className={
              this.state.toggleState === 8
                ? "content  active-content"
                : "content"
            }
          >
            <h2>Wong Tai Sin</h2>
            <hr />
            <Container
              sx={{ my: 2 }}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Population Density
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score1"
                  onChange={this.onChange}
                  value={score1}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[7].properties.Pop_Den * 100 * score1) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Housing
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score2"
                  onChange={this.onChange}
                  value={score2}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[7].properties.Housing * 100 * score2) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Education
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score3"
                  onChange={this.onChange}
                  value={score3}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[7].properties.Education * 100 * score3) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Technology
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score4"
                  onChange={this.onChange}
                  value={score4}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[7].properties.Technology * 100 * score4) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Environment
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score5"
                  onChange={this.onChange}
                  value={score5}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[7].properties.Environment *
                        100 *
                        score5) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Recreation
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score6"
                  onChange={this.onChange}
                  value={score6}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[7].properties.Recreation * 100 * score6) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Health
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score7"
                  onChange={this.onChange}
                  value={score7}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[7].properties.Health * 100 * score7) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Transport
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score8"
                  onChange={this.onChange}
                  value={score8}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[7].properties.Transport * 100 * score8) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
            </Container>
            <Typography id="input-slider" className="centered" variant="h4">
              Overall
            </Typography>
            <Container
              sx={{ my: 1 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[7].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[7].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[7].properties.Education * 100 * score3) /
                        sum +
                      (data.features[7].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[7].properties.Environment * 100 * score5) /
                        sum +
                      (data.features[7].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[7].properties.Health * 100 * score7) /
                        sum +
                      (data.features[7].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              />
            </Container>
          </div>

          <div
            className={
              this.state.toggleState === 9
                ? "content  active-content"
                : "content"
            }
          >
            <h2>Kwun Tong</h2>
            <hr />
            <Container
              sx={{ my: 2 }}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Population Density
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score1"
                  onChange={this.onChange}
                  value={score1}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[8].properties.Pop_Den * 100 * score1) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Housing
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score2"
                  onChange={this.onChange}
                  value={score2}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[8].properties.Housing * 100 * score2) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Education
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score3"
                  onChange={this.onChange}
                  value={score3}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[8].properties.Education * 100 * score3) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Technology
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score4"
                  onChange={this.onChange}
                  value={score4}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[8].properties.Technology * 100 * score4) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Environment
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score5"
                  onChange={this.onChange}
                  value={score5}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[8].properties.Environment *
                        100 *
                        score5) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Recreation
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score6"
                  onChange={this.onChange}
                  value={score6}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[8].properties.Recreation * 100 * score6) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Health
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score7"
                  onChange={this.onChange}
                  value={score7}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[8].properties.Health * 100 * score7) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Transport
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score8"
                  onChange={this.onChange}
                  value={score8}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[8].properties.Transport * 100 * score8) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
            </Container>
            <Typography id="input-slider" className="centered" variant="h4">
              Overall
            </Typography>
            <Container
              sx={{ my: 1 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[8].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[8].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[8].properties.Education * 100 * score3) /
                        sum +
                      (data.features[8].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[8].properties.Environment * 100 * score5) /
                        sum +
                      (data.features[8].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[8].properties.Health * 100 * score7) /
                        sum +
                      (data.features[8].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              />
            </Container>
          </div>

          <div
            className={
              this.state.toggleState === 10
                ? "content  active-content"
                : "content"
            }
          >
            <h2>Tsuen Wan</h2>
            <hr />
            <Container
              sx={{ my: 2 }}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Population Density
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score1"
                  onChange={this.onChange}
                  value={score1}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[9].properties.Pop_Den * 100 * score1) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Housing
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score2"
                  onChange={this.onChange}
                  value={score2}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[9].properties.Housing * 100 * score2) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Education
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score3"
                  onChange={this.onChange}
                  value={score3}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[9].properties.Education * 100 * score3) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Technology
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score4"
                  onChange={this.onChange}
                  value={score4}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[9].properties.Technology * 100 * score4) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Environment
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score5"
                  onChange={this.onChange}
                  value={score5}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[9].properties.Environment *
                        100 *
                        score5) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Recreation
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score6"
                  onChange={this.onChange}
                  value={score6}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[9].properties.Recreation * 100 * score6) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Health
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score7"
                  onChange={this.onChange}
                  value={score7}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[9].properties.Health * 100 * score7) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Transport
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score8"
                  onChange={this.onChange}
                  value={score8}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[9].properties.Transport * 100 * score8) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
            </Container>
            <Typography id="input-slider" className="centered" variant="h4">
              Overall
            </Typography>
            <Container
              sx={{ my: 1 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[9].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[9].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[9].properties.Education * 100 * score3) /
                        sum +
                      (data.features[9].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[9].properties.Environment * 100 * score5) /
                        sum +
                      (data.features[9].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[9].properties.Health * 100 * score7) /
                        sum +
                      (data.features[9].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              />
            </Container>
          </div>

          <div
            className={
              this.state.toggleState === 11
                ? "content  active-content"
                : "content"
            }
          >
            <h2>Tuen Mun</h2>
            <hr />
            <Container
              sx={{ my: 2 }}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Population Density
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score1"
                  onChange={this.onChange}
                  value={score1}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[10].properties.Pop_Den * 100 * score1) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Housing
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score2"
                  onChange={this.onChange}
                  value={score2}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[10].properties.Housing * 100 * score2) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Education
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score3"
                  onChange={this.onChange}
                  value={score3}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[10].properties.Education * 100 * score3) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Technology
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score4"
                  onChange={this.onChange}
                  value={score4}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[10].properties.Technology *
                        100 *
                        score4) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Environment
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score5"
                  onChange={this.onChange}
                  value={score5}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[10].properties.Environment *
                        100 *
                        score5) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Recreation
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score6"
                  onChange={this.onChange}
                  value={score6}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[10].properties.Recreation *
                        100 *
                        score6) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Health
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score7"
                  onChange={this.onChange}
                  value={score7}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[10].properties.Health * 100 * score7) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Transport
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score8"
                  onChange={this.onChange}
                  value={score8}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[10].properties.Transport * 100 * score8) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
            </Container>
            <Typography id="input-slider" className="centered" variant="h4">
              Overall
            </Typography>
            <Container
              sx={{ my: 1 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[10].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[10].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[10].properties.Education * 100 * score3) /
                        sum +
                      (data.features[10].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[10].properties.Environment *
                        100 *
                        score5) /
                        sum +
                      (data.features[10].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[10].properties.Health * 100 * score7) /
                        sum +
                      (data.features[10].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              />
            </Container>
          </div>

          <div
            className={
              this.state.toggleState === 12
                ? "content  active-content"
                : "content"
            }
          >
            <h2>Yuen Long</h2>
            <hr />
            <Container
              sx={{ my: 2 }}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Population Density
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score1"
                  onChange={this.onChange}
                  value={score1}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[11].properties.Pop_Den * 100 * score1) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Housing
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score2"
                  onChange={this.onChange}
                  value={score2}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[11].properties.Housing * 100 * score2) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Education
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score3"
                  onChange={this.onChange}
                  value={score3}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[11].properties.Education * 100 * score3) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Technology
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score4"
                  onChange={this.onChange}
                  value={score4}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[11].properties.Technology *
                        100 *
                        score4) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Environment
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score5"
                  onChange={this.onChange}
                  value={score5}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[11].properties.Environment *
                        100 *
                        score5) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Recreation
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score6"
                  onChange={this.onChange}
                  value={score6}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[11].properties.Recreation *
                        100 *
                        score6) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Health
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score7"
                  onChange={this.onChange}
                  value={score7}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[11].properties.Health * 100 * score7) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Transport
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score8"
                  onChange={this.onChange}
                  value={score8}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[11].properties.Transport * 100 * score8) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
            </Container>
            <Typography id="input-slider" className="centered" variant="h4">
              Overall
            </Typography>
            <Container
              sx={{ my: 1 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[11].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[11].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[11].properties.Education * 100 * score3) /
                        sum +
                      (data.features[11].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[11].properties.Environment *
                        100 *
                        score5) /
                        sum +
                      (data.features[11].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[11].properties.Health * 100 * score7) /
                        sum +
                      (data.features[11].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              />
            </Container>
          </div>

          <div
            className={
              this.state.toggleState === 13
                ? "content  active-content"
                : "content"
            }
          >
            <h2>North</h2>
            <hr />
            <Container
              sx={{ my: 2 }}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Population Density
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score1"
                  onChange={this.onChange}
                  value={score1}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[12].properties.Pop_Den * 100 * score1) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Housing
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score2"
                  onChange={this.onChange}
                  value={score2}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[12].properties.Housing * 100 * score2) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Education
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score3"
                  onChange={this.onChange}
                  value={score3}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[12].properties.Education * 100 * score3) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Technology
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score4"
                  onChange={this.onChange}
                  value={score4}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[12].properties.Technology *
                        100 *
                        score4) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Environment
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score5"
                  onChange={this.onChange}
                  value={score5}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[12].properties.Environment *
                        100 *
                        score5) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Recreation
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score6"
                  onChange={this.onChange}
                  value={score6}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[12].properties.Recreation *
                        100 *
                        score6) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Health
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score7"
                  onChange={this.onChange}
                  value={score7}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[12].properties.Health * 100 * score7) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Transport
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score8"
                  onChange={this.onChange}
                  value={score8}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[12].properties.Transport * 100 * score8) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
            </Container>
            <Typography id="input-slider" className="centered" variant="h4">
              Overall
            </Typography>
            <Container
              sx={{ my: 1 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[12].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[12].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[12].properties.Education * 100 * score3) /
                        sum +
                      (data.features[12].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[12].properties.Environment *
                        100 *
                        score5) /
                        sum +
                      (data.features[12].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[12].properties.Health * 100 * score7) /
                        sum +
                      (data.features[12].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              />
            </Container>
          </div>

          <div
            className={
              this.state.toggleState === 14
                ? "content  active-content"
                : "content"
            }
          >
            <h2>Tai Po</h2>
            <hr />
            <Container
              sx={{ my: 2 }}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Population Density
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score1"
                  onChange={this.onChange}
                  value={score1}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[13].properties.Pop_Den * 100 * score1) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Housing
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score2"
                  onChange={this.onChange}
                  value={score2}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[13].properties.Housing * 100 * score2) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Education
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score3"
                  onChange={this.onChange}
                  value={score3}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[13].properties.Education * 100 * score3) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Technology
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score4"
                  onChange={this.onChange}
                  value={score4}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[13].properties.Technology *
                        100 *
                        score4) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Environment
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score5"
                  onChange={this.onChange}
                  value={score5}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[13].properties.Environment *
                        100 *
                        score5) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Recreation
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score6"
                  onChange={this.onChange}
                  value={score6}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[13].properties.Recreation *
                        100 *
                        score6) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Health
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score7"
                  onChange={this.onChange}
                  value={score7}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[13].properties.Health * 100 * score7) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Transport
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score8"
                  onChange={this.onChange}
                  value={score8}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[13].properties.Transport * 100 * score8) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
            </Container>
            <Typography id="input-slider" className="centered" variant="h4">
              Overall
            </Typography>
            <Container
              sx={{ my: 1 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[13].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[13].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[13].properties.Education * 100 * score3) /
                        sum +
                      (data.features[13].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[13].properties.Environment *
                        100 *
                        score5) /
                        sum +
                      (data.features[13].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[13].properties.Health * 100 * score7) /
                        sum +
                      (data.features[13].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              />
            </Container>
          </div>

          <div
            className={
              this.state.toggleState === 15
                ? "content  active-content"
                : "content"
            }
          >
            <h2>Sai Kung</h2>
            <hr />
            <Container
              sx={{ my: 2 }}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Population Density
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score1"
                  onChange={this.onChange}
                  value={score1}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[14].properties.Pop_Den * 100 * score1) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Housing
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score2"
                  onChange={this.onChange}
                  value={score2}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[14].properties.Housing * 100 * score2) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Education
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score3"
                  onChange={this.onChange}
                  value={score3}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[14].properties.Education * 100 * score3) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Technology
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score4"
                  onChange={this.onChange}
                  value={score4}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[14].properties.Technology *
                        100 *
                        score4) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Environment
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score5"
                  onChange={this.onChange}
                  value={score5}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[14].properties.Environment *
                        100 *
                        score5) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Recreation
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score6"
                  onChange={this.onChange}
                  value={score6}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[14].properties.Recreation *
                        100 *
                        score6) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Health
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score7"
                  onChange={this.onChange}
                  value={score7}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[14].properties.Health * 100 * score7) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Transport
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score8"
                  onChange={this.onChange}
                  value={score8}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[14].properties.Transport * 100 * score8) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
            </Container>
            <Typography id="input-slider" className="centered" variant="h4">
              Overall
            </Typography>
            <Container
              sx={{ my: 1 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[14].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[14].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[14].properties.Education * 100 * score3) /
                        sum +
                      (data.features[14].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[14].properties.Environment *
                        100 *
                        score5) /
                        sum +
                      (data.features[14].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[14].properties.Health * 100 * score7) /
                        sum +
                      (data.features[14].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              />
            </Container>
          </div>

          <div
            className={
              this.state.toggleState === 16
                ? "content  active-content"
                : "content"
            }
          >
            <h2>Sha Tin</h2>
            <hr />
            <Container
              sx={{ my: 2 }}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Population Density
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score1"
                  onChange={this.onChange}
                  value={score1}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[15].properties.Pop_Den * 100 * score1) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Housing
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score2"
                  onChange={this.onChange}
                  value={score2}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[15].properties.Housing * 100 * score2) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Education
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score3"
                  onChange={this.onChange}
                  value={score3}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[15].properties.Education * 100 * score3) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Technology
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score4"
                  onChange={this.onChange}
                  value={score4}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[15].properties.Technology *
                        100 *
                        score4) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Environment
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score5"
                  onChange={this.onChange}
                  value={score5}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[15].properties.Environment *
                        100 *
                        score5) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Recreation
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score6"
                  onChange={this.onChange}
                  value={score6}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[15].properties.Recreation *
                        100 *
                        score6) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Health
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score7"
                  onChange={this.onChange}
                  value={score7}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[15].properties.Health * 100 * score7) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Transport
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score8"
                  onChange={this.onChange}
                  value={score8}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[15].properties.Transport * 100 * score8) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
            </Container>
            <Typography id="input-slider" className="centered" variant="h4">
              Overall
            </Typography>
            <Container
              sx={{ my: 1 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[15].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[15].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[15].properties.Education * 100 * score3) /
                        sum +
                      (data.features[15].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[15].properties.Environment *
                        100 *
                        score5) /
                        sum +
                      (data.features[15].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[15].properties.Health * 100 * score7) /
                        sum +
                      (data.features[15].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              />
            </Container>
          </div>

          <div
            className={
              this.state.toggleState === 17
                ? "content  active-content"
                : "content"
            }
          >
            <h2>Kwai Tsing</h2>
            <hr />
            <Container
              sx={{ my: 2 }}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Population Density
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score1"
                  onChange={this.onChange}
                  value={score1}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[16].properties.Pop_Den * 100 * score1) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Housing
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score2"
                  onChange={this.onChange}
                  value={score2}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[16].properties.Housing * 100 * score2) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Education
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score3"
                  onChange={this.onChange}
                  value={score3}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[16].properties.Education * 100 * score3) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Technology
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score4"
                  onChange={this.onChange}
                  value={score4}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[16].properties.Technology *
                        100 *
                        score4) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Environment
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score5"
                  onChange={this.onChange}
                  value={score5}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[16].properties.Environment *
                        100 *
                        score5) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Recreation
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score6"
                  onChange={this.onChange}
                  value={score6}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[16].properties.Recreation *
                        100 *
                        score6) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Health
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score7"
                  onChange={this.onChange}
                  value={score7}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[16].properties.Health * 100 * score7) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Transport
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score8"
                  onChange={this.onChange}
                  value={score8}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[16].properties.Transport * 100 * score8) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
            </Container>
            <Typography id="input-slider" className="centered" variant="h4">
              Overall
            </Typography>
            <Container
              sx={{ my: 1 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[16].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[16].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[16].properties.Education * 100 * score3) /
                        sum +
                      (data.features[16].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[16].properties.Environment *
                        100 *
                        score5) /
                        sum +
                      (data.features[16].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[16].properties.Health * 100 * score7) /
                        sum +
                      (data.features[16].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              />
            </Container>
          </div>

          <div
            className={
              this.state.toggleState === 18
                ? "content  active-content"
                : "content"
            }
          >
            <h2>Islands</h2>
            <hr />
            <Container
              sx={{ my: 2 }}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Population Density
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score1"
                  onChange={this.onChange}
                  value={score1}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[17].properties.Pop_Den * 100 * score1) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Housing
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score2"
                  onChange={this.onChange}
                  value={score2}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[17].properties.Housing * 100 * score2) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Education
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score3"
                  onChange={this.onChange}
                  value={score3}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[17].properties.Education * 100 * score3) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Technology
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score4"
                  onChange={this.onChange}
                  value={score4}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[17].properties.Technology *
                        100 *
                        score4) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Environment
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score5"
                  onChange={this.onChange}
                  value={score5}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[17].properties.Environment *
                        100 *
                        score5) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Recreation
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score6"
                  onChange={this.onChange}
                  value={score6}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[17].properties.Recreation *
                        100 *
                        score6) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Health
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score7"
                  onChange={this.onChange}
                  value={score7}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[17].properties.Health * 100 * score7) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Transport
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score8"
                  onChange={this.onChange}
                  value={score8}
                />
                <br />
                <br />
                <ReactScoreIndicator
                  width={160}
                  value={
                    Math.round(
                      ((data.features[17].properties.Transport * 100 * score8) /
                        sum) *
                        10
                    ) / 10
                  }
                  maxValue={12.5}
                />
              </Box>
            </Container>
            <Typography id="input-slider" className="centered" variant="h4">
              Overall
            </Typography>
            <Container
              sx={{ my: 1 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[17].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[17].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[17].properties.Education * 100 * score3) /
                        sum +
                      (data.features[17].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[17].properties.Environment *
                        100 *
                        score5) /
                        sum +
                      (data.features[17].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[17].properties.Health * 100 * score7) /
                        sum +
                      (data.features[17].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              />
            </Container>
          </div>

          <div
            className={
              this.state.toggleState === 19
                ? "content  active-content"
                : "content"
            }
          >
            <h2>Overall</h2>
            <hr />
            <Container
              sx={{ my: 2 }}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Population Density
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score1"
                  onChange={this.onChange}
                  value={score1}
                />
                <br />
                <br />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Housing
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score2"
                  onChange={this.onChange}
                  value={score2}
                />
                <br />
                <br />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Education
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score3"
                  onChange={this.onChange}
                  value={score3}
                />
                <br />
                <br />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Technology
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score4"
                  onChange={this.onChange}
                  value={score4}
                />
                <br />
                <br />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Environment
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score5"
                  onChange={this.onChange}
                  value={score5}
                />
                <br />
                <br />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Recreation
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score6"
                  onChange={this.onChange}
                  value={score6}
                />
                <br />
                <br />
              </Box>
              <Box sx={{ width: 200 }}>
                <Typography id="input-slider" gutterBottom>
                  Health
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score7"
                  onChange={this.onChange}
                  value={score7}
                />
                <br />
                <br />
                <br />
                <Typography id="input-slider" gutterBottom>
                  Transport
                </Typography>
                <Slider
                  aria-label="Score"
                  defaultValue={3}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={1}
                  // marks={importances}
                  min={1}
                  max={5}
                  name="score8"
                  onChange={this.onChange}
                  value={score8}
                />
                <br />
                <br />
              </Box>
            </Container>
            <Typography id="input-slider" className="centered" variant="h4">
              Overall
            </Typography>
            <Container
              sx={{ my: 2 }}
              style={{ display: "flex", justifyContent: "center" }}
            ><Box sx={{ width: 200 }}>
               <Typography id="input-slider" className="centered">
              Central and Western
            </Typography>
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[0].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[0].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[0].properties.Education * 100 * score3) /
                        sum +
                      (data.features[0].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[0].properties.Environment * 100 * score5) /
                        sum +
                      (data.features[0].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[0].properties.Health * 100 * score7) /
                        sum +
                      (data.features[0].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              /><Typography id="input-slider" className="centered">
              Wan Chai
            </Typography>
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[1].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[1].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[1].properties.Education * 100 * score3) /
                        sum +
                      (data.features[1].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[1].properties.Environment * 100 * score5) /
                        sum +
                      (data.features[1].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[1].properties.Health * 100 * score7) /
                        sum +
                      (data.features[1].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              /><Typography id="input-slider" className="centered">
              Eastern
            </Typography>
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[2].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[2].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[2].properties.Education * 100 * score3) /
                        sum +
                      (data.features[2].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[2].properties.Environment * 100 * score5) /
                        sum +
                      (data.features[2].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[2].properties.Health * 100 * score7) /
                        sum +
                      (data.features[2].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              /></Box><Box sx={{ width: 200 }}><Typography id="input-slider" className="centered">
              Southern
            </Typography>
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[3].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[3].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[3].properties.Education * 100 * score3) /
                        sum +
                      (data.features[3].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[3].properties.Environment * 100 * score5) /
                        sum +
                      (data.features[3].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[3].properties.Health * 100 * score7) /
                        sum +
                      (data.features[3].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              /><Typography id="input-slider" className="centered">
              Yau Tsim Mong
            </Typography>
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[4].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[4].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[4].properties.Education * 100 * score3) /
                        sum +
                      (data.features[4].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[4].properties.Environment * 100 * score5) /
                        sum +
                      (data.features[4].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[4].properties.Health * 100 * score7) /
                        sum +
                      (data.features[4].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              /><Typography id="input-slider" className="centered">
              Sham Shui Po
            </Typography>
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[5].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[5].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[5].properties.Education * 100 * score3) /
                        sum +
                      (data.features[5].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[5].properties.Environment * 100 * score5) /
                        sum +
                      (data.features[5].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[5].properties.Health * 100 * score7) /
                        sum +
                      (data.features[5].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              /></Box><Box sx={{ width: 200 }}><Typography id="input-slider" className="centered">
              Kowloon City
            </Typography>
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[6].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[6].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[6].properties.Education * 100 * score3) /
                        sum +
                      (data.features[6].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[6].properties.Environment * 100 * score5) /
                        sum +
                      (data.features[6].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[6].properties.Health * 100 * score7) /
                        sum +
                      (data.features[6].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              /><Typography id="input-slider" className="centered">
              Wong Tai Sin
            </Typography>
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[7].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[7].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[7].properties.Education * 100 * score3) /
                        sum +
                      (data.features[7].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[7].properties.Environment * 100 * score5) /
                        sum +
                      (data.features[7].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[7].properties.Health * 100 * score7) /
                        sum +
                      (data.features[7].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              /><Typography id="input-slider" className="centered">
              Kwun Tong
            </Typography>
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[8].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[8].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[8].properties.Education * 100 * score3) /
                        sum +
                      (data.features[8].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[8].properties.Environment * 100 * score5) /
                        sum +
                      (data.features[8].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[8].properties.Health * 100 * score7) /
                        sum +
                      (data.features[8].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              /></Box><Box sx={{ width: 200 }}><Typography id="input-slider" className="centered">
              Tsuen Wan
            </Typography>
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[9].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[9].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[9].properties.Education * 100 * score3) /
                        sum +
                      (data.features[9].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[9].properties.Environment * 100 * score5) /
                        sum +
                      (data.features[9].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[9].properties.Health * 100 * score7) /
                        sum +
                      (data.features[9].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              /><Typography id="input-slider" className="centered">
              Tuen Mun
            </Typography>
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[10].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[10].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[10].properties.Education * 100 * score3) /
                        sum +
                      (data.features[10].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[10].properties.Environment * 100 * score5) /
                        sum +
                      (data.features[10].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[10].properties.Health * 100 * score7) /
                        sum +
                      (data.features[10].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              /><Typography id="input-slider" className="centered">
              Yuen Long
            </Typography>
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[11].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[11].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[11].properties.Education * 100 * score3) /
                        sum +
                      (data.features[11].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[11].properties.Environment * 100 * score5) /
                        sum +
                      (data.features[11].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[11].properties.Health * 100 * score7) /
                        sum +
                      (data.features[11].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              /></Box><Box sx={{ width: 200 }}><Typography id="input-slider" className="centered">
              North
            </Typography>
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[12].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[12].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[12].properties.Education * 100 * score3) /
                        sum +
                      (data.features[12].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[12].properties.Environment * 100 * score5) /
                        sum +
                      (data.features[12].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[12].properties.Health * 100 * score7) /
                        sum +
                      (data.features[12].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              /><Typography id="input-slider" className="centered">
              Tai Po
            </Typography>
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[13].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[13].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[13].properties.Education * 100 * score3) /
                        sum +
                      (data.features[13].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[13].properties.Environment * 100 * score5) /
                        sum +
                      (data.features[13].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[13].properties.Health * 100 * score7) /
                        sum +
                      (data.features[13].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              /><Typography id="input-slider" className="centered">
              Sai Kung
            </Typography>
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[14].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[14].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[14].properties.Education * 100 * score3) /
                        sum +
                      (data.features[14].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[14].properties.Environment * 100 * score5) /
                        sum +
                      (data.features[14].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[14].properties.Health * 100 * score7) /
                        sum +
                      (data.features[14].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              /></Box><Box sx={{ width: 200 }}><Typography id="input-slider" className="centered">
              Sha Tin
            </Typography>
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[15].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[15].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[15].properties.Education * 100 * score3) /
                        sum +
                      (data.features[15].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[15].properties.Environment * 100 * score5) /
                        sum +
                      (data.features[15].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[15].properties.Health * 100 * score7) /
                        sum +
                      (data.features[15].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              /><Typography id="input-slider" className="centered">
              Kwai Tsing
            </Typography>
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[16].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[16].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[16].properties.Education * 100 * score3) /
                        sum +
                      (data.features[16].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[16].properties.Environment * 100 * score5) /
                        sum +
                      (data.features[16].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[16].properties.Health * 100 * score7) /
                        sum +
                      (data.features[16].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              /><Typography id="input-slider" className="centered">
              Islands
            </Typography>
              <ReactScoreIndicator
                value={
                  Math.round(
                    ((data.features[17].properties.Pop_Den * 100 * score1) /
                      sum +
                      (data.features[17].properties.Housing * 100 * score2) /
                        sum +
                      (data.features[17].properties.Education * 100 * score3) /
                        sum +
                      (data.features[17].properties.Technology * 100 * score4) /
                        sum +
                      (data.features[17].properties.Environment * 100 * score5) /
                        sum +
                      (data.features[17].properties.Recreation * 100 * score6) /
                        sum +
                      (data.features[17].properties.Health * 100 * score7) /
                        sum +
                      (data.features[17].properties.Transport * 100 * score8) /
                        sum) *
                      10
                  ) / 10
                }
                maxValue={100}
              /></Box>
            </Container>
          </div>
          {/* 
          <div
            className={
              this.state.toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <h2>Content 3</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
              nostrum rerum laudantium totam unde adipisci incidunt modi alias!
              Accusamus in quia odit aspernatur provident et ad vel distinctio
              recusandae totam quidem repudiandae omnis veritatis nostrum
              laboriosam architecto optio rem, dignissimos voluptatum beatae
              aperiam voluptatem atque. Beatae rerum dolores sunt.
            </p> */}
        </div>
      </div>
    );
  }
}

// export default Tabs;
