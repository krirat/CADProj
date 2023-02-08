import React from "react";
import Slider from "@mui/material/Slider";
import Input from "@mui/material/Input";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiSlider: {
      styleOverrides: {
        root: {
          "& .MuiSlider-rail": {
            color: "#48695c",
          },
          "& .MuiSlider-track": {
            color: "#48695c",
          },
          "& .MuiSlider-mark": {
            backgroundColor: "#48695c",
          },
          "& .MuiSlider-thumb": {
            color: "#48695c",
          },
        },
      },
    },
  },
});

const SectionBmi = (props) => {
  let BMILevel;
  let BMIRisk = 0;
  for (var i in props.GUIDELINES_BMI) {
    if (props.BMI >= i) {
      BMILevel = props.GUIDELINES_BMI[i].level;
      BMIRisk = props.GUIDELINES_BMI[i].riskPts;
    }
  }

  props.handleBMIRisk(BMIRisk);

  return (
    <>
      <p>Height (cm):</p>
      <ThemeProvider theme={theme}>
        <Slider
          value={typeof props.height === "number" ? props.height : 0}
          onChange={props.handleHeightChange}
          aria-labelledby="input-slider"
          className="HeightSlider"
          min={0}
          max={300}
          defaultValue={175}
        />
        <Input
          value={props.height}
          size="small"
          onChange={props.handleHeightChange}
          onBlur={props.handleHeightBlur}
          className="HeightInput"
          inputProps={{
            step: 10,
            min: 0,
            max: 300,
            type: "number",
            "aria-labelledby": "input-slider",
          }}
        />
        <p>Weight (kg):</p>
        <Slider
          value={typeof props.weight === "number" ? props.weight : 0}
          onChange={props.handleWeightChange}
          aria-labelledby="input-slider"
          className="WeightSlider"
          min={0}
          max={300}
          defaultValue={70}
        />
        <Input
          value={props.weight}
          size="small"
          onChange={props.handleWeightChange}
          onBlur={props.handleWeightBlur}
          className="WeightInput"
          inputProps={{
            step: 10,
            min: 0,
            max: 300,
            type: "number",
            "aria-labelledby": "input-slider",
          }}
        />
      </ThemeProvider>
      <p>BMI = {props.BMI} <br /> ({BMILevel})</p>
    </>
  );
};

export default SectionBmi;
