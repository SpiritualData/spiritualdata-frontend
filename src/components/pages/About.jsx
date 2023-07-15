import React from "react";
import { Grid } from "@mui/material";

import PageHeader from "../helpers/PageHeader";
import image from "../../assests/about.webp";
import PageDef from "../componentsExtended/PageDef";

const About = () => {
  return (
    <Grid container>
      <PageHeader image={image} page={"About Us"} sx={{ mb: 4 }} />

      <PageDef
        title={"ABOUT US"}
        heading={"Drop us Message for any Query"}
        details={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      />
    </Grid>
  );
};

export default About;
