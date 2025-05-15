import React from "react";
import { Grid } from "@mui/material";
import PageHeader from "../helpers/PageHeader";
import image from "../assets/conciusness.webp";
import PageDef from "../helpers/PageDef";

const ResearchChat: React.FC = () => {
  return (
    <Grid container>
      <PageHeader image={image} page={"Research-chat"} sx={{ mb: 4 }} />
      <PageDef
        title={"Research-Chat"}
        heading={"Research-Chat Page Data Goes Here"}
        details={""}
      />
    </Grid>
  );
};

export default ResearchChat;
