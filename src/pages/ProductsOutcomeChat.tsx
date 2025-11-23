import React from "react";
import { Grid } from "@mui/material";
import PageHeader from "../components/PageHeader";
import image from "../assets/outcome-chat.webp";
import PageDef from "../components/PageDef";

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
