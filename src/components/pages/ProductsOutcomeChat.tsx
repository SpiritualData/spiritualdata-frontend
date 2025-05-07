import React from "react";
import { Grid } from "@mui/material";
import PageHeader from "../helpers/PageHeader";
import image from "../../assets/conciusness.webp";
import PageDef from "../helpers/PageDef";

const ProductsOutcomeChat: React.FC = () => {
  return (
    <Grid container>
      <PageHeader image={image} page={"Outcome-Chat"} sx={{ mb: 4 }} />
      <PageDef
        title={"Outcome-Chat"}
        heading={"Outcome-Chat Page Data Goes Here"}
        details={""}
      />
    </Grid>
  );
};

export default ProductsOutcomeChat;
