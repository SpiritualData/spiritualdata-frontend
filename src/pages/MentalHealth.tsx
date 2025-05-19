import React from "react";
import { Grid } from "@mui/material";
import PageHeader from "../components/PageHeader";
import image from "../assets/conciusness.webp";
import PageDef from "../components/PageDef";

const MentalHealth: React.FC = () => {
  return (
    <Grid container>
      <PageHeader image={image} page={"Mental-Health"} sx={{ mb: 4 }} />
      <PageDef
        title={"Mental-Health"}
        heading={"Mental-Health Page Data Goes Here"}
        details={""}
      />
    </Grid>
  );
};

export default MentalHealth;
