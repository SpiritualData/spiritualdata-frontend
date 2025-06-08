import React from "react";
import { Grid } from "@mui/material";

import PageHeader from "../components/PageHeader";
import image from "../assets/about.webp";
import PageDef from "../components/PageDef";

const Products: React.FC = () => {
  return (
    <Grid container>
      <PageHeader image={image} page={"General-Chat"} sx={{ mb: 4 }} />
      <PageDef
        title={"General-Chat"}
        heading={"General-Chat Page Data Goes Here"}
        details={""}
      />
    </Grid>
  );
};

export default Products;
