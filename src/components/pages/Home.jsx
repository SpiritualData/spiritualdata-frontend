import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Ellipse from "../../assests/Ellipse 136.png";
import Ellipse2 from "../../assests/Ellipse 137.png";
import Ellipse3 from "../../assests/Ellipse 139.png";

const Home = () => {
  return (
    <Grid
      container
    >
      <Grid item xs={12}>
        <Box
          sx={{
            display: "inline-block",
            width: "100%",
            height: "300px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              height: "100%",
              width: "100%",
              backgroundImage: `url(${Ellipse})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top right",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: '10%',
              height: "80%",
              width: "100%",
              backgroundImage: `url(${Ellipse2})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top right",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "60%",
              right: 0,
              height: "41%",
              width: "100%",
              backgroundImage: `url(${Ellipse3})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top right",
            }}
          />

          {/* <Stack width='50%' sx={{zIndex: 1}}>
            <Typography variant="h4" color="primary.main" fontWeight='500'>
              Welcome
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </Typography>
          </Stack> */}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;