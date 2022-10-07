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
  return (
    <>
      <p>Height (cm):</p>
      <ThemeProvider theme={theme}>
        <Slider
          value={typeof props.height === "number" ? props.height : 0}
          onChange={props.handleHeightSliderChange}
          aria-labelledby="input-slider"
          className="Slider"
          max="300"
        />
        <Input
          value={props.height}
          size="small"
          onChange={props.handleHeightInputChange}
          onBlur={props.handleHeightBlur}
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
          onChange={props.handleSliderChange}
          aria-labelledby="input-slider"
          className="Slider"
          max="300"
        />
        <Input
          value={props.weight}
          size="small"
          onChange={props.handleInputChange}
          onBlur={props.handleBlur}
          inputProps={{
            step: 10,
            min: 0,
            max: 300,
            type: "number",
            "aria-labelledby": "input-slider",
          }}
        />
      </ThemeProvider>
      <p>BMI = {props.BMI}</p>
    </>
  );
};

export default SectionBmi;
