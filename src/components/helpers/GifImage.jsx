import React from "react";
import { Box, CardMedia } from "@mui/material";
const GifImage = ({ path }) => {
  return (
    <Box
      sx={{
        width: "70px",
        height: "70px",
      }}
    >
      <CardMedia
        component="img"
        height="100%"
        image={path}
        alt="gif"
        sx={{
          borderRadius: "50%",
        }}
      />
    </Box>
  );
};

export default GifImage;
