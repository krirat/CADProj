import React from "react";
import { Link } from "react-router-dom";
import MUIButton from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const Button = styled(MUIButton)(() => ({
  color: "#F6F6F6",
  backgroundColor: "#48695C",
  fontFamily: "Montserrat",
  padding: "0.8rem 2.5rem",
  margin: "2rem 0 4rem 0",
  fontSize: "1.5rem",
  borderRadius: "1rem",
  "&:hover": {
    backgroundColor: "#3B574C",
  },
  "@media (max-width:700px)": {
    margin: "1rem 0 1.2rem 0",
    alignSelf: "center",
  },
}));
function styledButton(props) {
  return (
    <Button variant="contained" size="large" disableRipple>
      <Link style={{ textDecoration: "none", color: "#F6F6F6" }} to={props.to}>
        {props.text}
      </Link>
    </Button>
  );
}

export default styledButton;
