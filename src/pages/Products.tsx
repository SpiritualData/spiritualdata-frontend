import React from "react";
import { Box, Grid } from "@mui/material";
import PageHeader from "../components/PageHeader";
import image from "../assets/conciusness.webp";
import PageDef from "../components/PageDef";
import ProductsCardSection from "../components/ProductsCardSection";

const Products: React.FC = () => {
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
          <PageHeader image={image} page={"Products"} sx={{ mb: 4 }} />

          <PageDef
            title={"Our Products"}
            heading={
              "AI-powered tools for spiritual exploration and concept understanding."
            }
            details={""}
          />
          <ProductsCardSection />
        </Box>
      </Grid>
    </>
  );
};

export default Products;
