import React from "react";
import { Box, Grid } from "@mui/material";
import PageHeader from "../components/PageHeader";
import image from "../assets/images/initiatives/banner.webp";
import PageDef from "../components/PageDef";
import InitiativesSection from "../components/InitiativesCardSection";
import WhereWeAreHeading from "../components/About/WhereWeAreHeading";

const Initiatives: React.FC = () => {

  return (
    <>
      <Grid container component="div" {...({} as any)}>
        <Box
          sx={{
            color: "primary.contrastText",
            backgroundColor: "primary.main",
            width: "100%",
            px: 0,
            pt: 3,
          }}
        >
          <PageHeader image={image} page={"Initiatives"} sx={{ mb: 4 }} />

          <PageDef
            title={"Our Key Initiatives"}
            heading={
              "We're combining AI and open science for spiritual understanding."
            }
            details={""}
          />
          <InitiativesSection />
        </Box>
      </Grid>
      <WhereWeAreHeading />
    </>
  );
};

export default Initiatives;
