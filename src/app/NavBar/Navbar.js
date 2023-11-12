import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// css
import "./Navbar.css";
import { useSelector } from "react-redux";

const pages = ["Products", "Pricing", "Blog"];

const Navbar = () => {
  // Fetch object from store
  const functions = useSelector((state) => state.functions);

  const images = {
    logo: require("src/images/typo_logo.png"),
    avatar: require("src/images/profile_pic.jpg"),
  };

  const teal = "#456268";

  const buttonTextStyle = {
    fontSize: "1.25rem",
    fontWeight: "500",
    "&:hover": {
      cursor: "pointer",
    },
  };

  return (
    <Box className="navbar-section">
      <Box className="navbar-container">
        <Box className="logo-container">
          <img className="logo" src={images.logo} />
        </Box>
        <Box className="buttons-container">
          <Typography
            onClick={() => functions.redirectTo("/nova-booking")}
            sx={{ ...buttonTextStyle, color: "white" }}
          >
            Home
          </Typography>
          <Typography
            onClick={() => alert("Not implemented")}
            sx={{ ...buttonTextStyle, color: teal }}
          >
            Reservations
          </Typography>
          <Typography
            onClick={() => alert("Not implemented")}
            sx={{ ...buttonTextStyle, color: teal }}
          >
            About
          </Typography>
        </Box>
        <Box className="avatar-container">
          <img
            onClick={() => functions.redirectTo("/nova-booking/profile")}
            className="avatar"
            src={images.avatar}
            alt="Avatar"
          />
        </Box>
      </Box>
    </Box>
  );
};
export default Navbar;
