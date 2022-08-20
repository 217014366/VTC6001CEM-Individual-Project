import React, { useState } from "react";
import Box from "@mui/material/Box";
import { MapContainer, TileLayer, GeoJSON, Tooltip } from "react-leaflet";
import { Typography, Container, Divider } from "@mui/material";
import { InfoBox } from "./InfoBox";
import { DataScopeSelector } from "./DataScopeSelector";
import { MultiSelection } from "./MultiSelection";
import ReactStoreIndicator from "react-score-indicator";
import Legend from "./Legend";
import Select from "react-select";

import "./index.css";

// import countries from './custom.geo.50.json';
import DCB from "../data/main.json";

/*                "Pop_Den": "0.422",
                "Education": "0.316",
                "Environment": "0.737666667",
                "Health": "0.843",
                "Housing": "0.158",
                "Recreation": "0.947",
                "Technology": "0.21",
                "Transport": "0.474"*/

const dataScopes = [
  {
    name: "Overall",
    key: "Overall",
    value: "Overall",
    label: "Overall",
    description: "The overall of livability",
    unit: "marks",
    scale: [0.01, 0.21, 0.41, 0.61, 0.81],
  },
  {
    name: "Population Density",
    key: "Pop_Den",
    value: "Pop_Den",
    label: "Population Density",
    description: "The 2021 Population Density of the District",
    unit: "marks",
    scale: [0.01, 0.21, 0.41, 0.61, 0.81],
  },
  {
    name: "Education",
    key: "Education",
    value: "Education",
    label: "Education",
    description: "Primary and Secondary Schools and Study Rooms",
    unit: "marks",
    scale: [0.01, 0.21, 0.41, 0.61, 0.81],
  },
  {
    name: "Environment",
    key: "Environment",
    value: "Environment",
    label: "Environment",
    description: "Water Quality and Air Quality",
    unit: "marks",
    scale: [0.01, 0.21, 0.41, 0.61, 0.81],
  },
  {
    name: "Health",
    key: "Health",
    value: "Health",
    label: "Health",
    description: "Clinics and Hospital",
    unit: "marks",
    scale: [0.01, 0.21, 0.41, 0.61, 0.81],
  },
  {
    name: "Housing",
    key: "Housing",
    value: "Housing",
    label: "Housing",
    description: "Housing Price",
    unit: "marks",
    scale: [0.01, 0.21, 0.41, 0.61, 0.81],
  },
  {
    name: "Recreation",
    key: "Recreation",
    value: "Recreation",
    label: "Recreation",
    description: "Sports Centres and Play Rooms",
    unit: "marks",
    scale: [0.01, 0.21, 0.41, 0.61, 0.81],
  },
  {
    name: "Technology",
    key: "Technology",
    value: "Technology",
    label: "Technology",
    description: "Wifi Hotspot",
    unit: "marks",
    scale: [0.01, 0.21, 0.41, 0.61, 0.81],
  },
  {
    name: "Transport",
    key: "Transport",
    value: "Transport",
    label: "Transport",
    description: "Bus Stop and Filling Station",
    unit: "marks",
    scale: [0.01, 0.21, 0.41, 0.61, 0.81],
  },
];

// from small to big, 15 colors https://colordesigner.io/gradient-generator
const colors = ["#ff0000", "#f66d00", "#d7a700", "#a0d600", "#00ff00"];

export default function ChoroplethMap() {
  const [dataScope, setDataScope] = useState(dataScopes[0]);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [hoveredDistrict, setHoveredDistrict] = useState(null);
  const [mean, setMean] = useState();
  const [map, setMap] = useState(null);

  const handleDataScopeChange = (event) => {
    setDataScope(
      dataScopes.find((element) => element.key === event.target.value)
    );
  };

  // set value for default selection
  const [selectedValue, setSelectedValue] = useState([]);

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map((x) => x.value) : []);
  };

  const highlightFeature = (e) => {
    let layer = e.target;
    setHoveredDistrict(layer.feature.properties);
  };

  const resetHighlight = (e) => {
    setHoveredDistrict(null);
  };

  const onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: () => setSelectedDistrict(feature.properties),
    });
  };

  const getColor = (val) => {
    for (let i = 1; i < dataScope.scale.length; i++) {
      if (isNaN(val)) {
        return colors;
      }
      if (val < dataScope.scale[i]) {
        return colors[i - 1];
      }
    }

    return colors[colors.length - 1];
  };

  const style = (feature) => {
    var sum = 0;
    for (var i = 0; i < selectedValue.length; i++) {
      sum += parseFloat(feature.properties[selectedValue[i]]);
    }
    var avg = sum / selectedValue.length;
    setMean(sum / selectedValue.length);

    //     var x = new Array(18).fill('');
    //     for(var j = 0; j<18; j++){
    //     x[j]=avg;
    // }

    //     console.log(x)
    let mapStyle = {
      //feature.properties[dataScope.key]
      fillColor: getColor(avg),
      weight: 1,
      opacity: 1,
      color: "#888",
      dashArray: "7",
      fillOpacity: 0.7,
      zIndex: 4,
      score: avg,
    };

    // "Pop_Den": "0.422",
    // "Education": "0.316",

    // for (let i = 0; i < selectedValue.length; i++ ){
    // var sum = 0;
    // var average
    // selectedValue.forEach((num) => { sum += num });
    // average = sum / selectedValue.length;
    // console.log(average);

    // let temp = (parseFloat(feature.properties[selectedValue[0]])+parseFloat(feature.properties[selectedValue[1]]))/2
    // console.log(JSON.stringify(feature.properties))

    // }


    // console.log(selectedValue)

    if (
      hoveredDistrict &&
      feature.properties.District === hoveredDistrict.District
    ) {
      mapStyle.color = "#000";
      mapStyle.weight = 2;
    }

    return mapStyle;
  };

  return (
    <div className="mapContainer">
      <MapContainer center={[22.3567, 114.1366]} zoom={11} whenCreated={setMap}>
        <TileLayer url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png" />
        <GeoJSON data={DCB} style={style} onEachFeature={onEachFeature}>
          {hoveredDistrict ? (
            <Tooltip opacity={1}>{hoveredDistrict.District}</Tooltip>
          ) : null}
        </GeoJSON>
        <InfoBox
          data={selectedDistrict}
          indicator={selectedValue}
          avg={style}
          scope={dataScopes}
        />
        {/* {console.log(mean)} */}
        {/* {console.log(selectedDistrict.District)} */}

        <Legend />
      </MapContainer>
      <Container
        sx={{ my: 4 }}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box sx={{ width: 600 }}>
          <Typography>
            <b>Indicator</b>
          </Typography>
          <Select
            //  defaultValue={[indicatorOptions[2], indicatorOptions[3]]}
            isMulti
            onChange={handleChange}
            name="colors"
            options={dataScopes}
            className="basic-multi-select"
            classNamePrefix="select"
          />

          {/* {selectedValue && (
            <div style={{ marginTop: 20, lineHeight: "25px" }}>
              <div id="mean">
                <b>Selected Value: </b> {mean}
              </div>
            </div>
          )} */}
          {/* <DataScopeSelector options={dataScopes} value={dataScope} changeHandler={handleDataScopeChange} /> */}
        </Box>
      </Container>
    </div>
  );
}
