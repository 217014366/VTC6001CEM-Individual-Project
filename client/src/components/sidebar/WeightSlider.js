import { Box, Slider, Typography } from '@mui/material';
import React from 'react';
import { useValue } from '../../context/ContextProvider';

function valuetext(value) {
    return `${value}°C`;
  }

const importance = [
    {
      value: 1,
      scaledValue: 1,
      // label: "Not Important",
    },
    {
      value: 2,
      scaledValue: 2,
      // label: "Slightly Important",
    },
    {
      value: 3,
      scaledValue: 3,
      // label: "Moderate",
    },
    {
      value: 4,
      scaledValue: 4,
      // label: "Important",
    },
    {
      value: 5,
      scaledValue: 5,
      // label: "Very Important",
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

const WeightSlider = () => {
  // const {
  //   state: { priceFilter },
  //   dispatch,
  // } = useValue();
  return (
    <Box sx={{ mt: 5 }}>
      {/* <Typography>Max Price: {'$ ' + priceFilter}</Typography>
      <Slider
        min={0}
        max={50}
        defaultValue={50}
        valueLabelDisplay="auto"
        marks={marks}
        value={priceFilter}
        onChange={(e, price) =>
          dispatch({ type: 'FILTER_PRICE', payload: price })
        }
      /> */}

<Typography id="input-slider" gutterBottom>
            Population Density
          </Typography>
          <Slider
            aria-label="Score"
            defaultValue={3}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={1}
            marks={importance}
            min={1}
            max={5}
          />
          <br />
          <br />
          <Typography id="input-slider" gutterBottom>
            Education
          </Typography>
          <Slider
            aria-label="Score"
            defaultValue={3}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={1}
            marks={importance}
            min={1}
            max={5}
          />
          <br />
          <br />
          <Typography id="input-slider" gutterBottom>
            Environment
          </Typography>
          <Slider
            aria-label="Score"
            defaultValue={3}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={1}
            marks={importance}
            min={1}
            max={5}
          />
          <br />
          <br />
          <Typography id="input-slider" gutterBottom>
            Health
          </Typography>
          <Slider
            aria-label="Score"
            defaultValue={3}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={1}
            marks={importance}
            min={1}
            max={5}
          />
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
            marks={importance}
            min={1}
            max={5}
          />
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
            marks={importance}
            min={1}
            max={5}
          />
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
            marks={importance}
            min={1}
            max={5}
          />
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
            marks={importance}
            min={1}
            max={5}
          />
          <br />
          <br />
    </Box>
  );
};

export default WeightSlider;