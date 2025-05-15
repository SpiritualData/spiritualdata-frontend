import React from "react";
import { Grid } from "@mui/material";
import PageHeader from "../helpers/PageHeader";
import image from "../assets/conciusness.webp";
import PageDef from "../helpers/PageDef";

const Products: React.FC = () => {
  return (
    <Grid container>
      <PageHeader image={image} page={"Products"} sx={{ mb: 4 }} />
      <PageDef
        title={"Products"}
        heading={"Products Page Data Goes Here"}
        details={""}
      />
    </Grid>
  );
};

export default Products;
