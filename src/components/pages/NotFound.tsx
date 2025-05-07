import React from "react";
import { Box } from "@mui/material";

import NotFoundSVG from "../../assets/Not Found.svg";

const NotFound: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <img
        src={NotFoundSVG}
        style={{ height: "80%", width: "80%", maxWidth: "100%" }}
        alt="Not Found"
      />
    </Box>
  );
};

export default NotFound;
