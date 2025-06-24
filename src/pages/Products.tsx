import React from "react";
import image from "../assets/testpng1.png";
import PageHeader from "../components/PageHeader";
import AvailableProducts from "../components/Products/AvailableProducts";
import WhyChooseSpiritualData from "../components/Products/WhyChooseSpiritualData";
import { Typography } from "@mui/material";

const Products: React.FC = () => {
  return (
    <>
      <PageHeader image={image} page={"Products"} sx={{ mb: 4 }} />
      <AvailableProducts />
      <WhyChooseSpiritualData />
    </>
  );
};

export default Products;
