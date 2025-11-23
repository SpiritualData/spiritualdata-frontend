import React from "react";
import InitiativeCard from "./Initiatives/InitiativesCard";
import { Container, Grid, Slide } from "@mui/material";
import { useInView } from "../hooks/useInView";
import { productCardData } from "../data/ProductData";

const ProductsCardSection = () => {
  return (
    <Container sx={{ py: 2 }}>
      <Grid
        container
        spacing={6}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          mb: 10,
        }}
      >
        {productCardData.map((item, index) => {
          const { ref, inView } = useInView({ threshold: 0.3 });

          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={5}
              key={item.title}
              component="div"
              ref={ref}
              sx={{
                maxWidth: "385px",
                minHeight: "450px",
                display: "flex",
              }}
              {...({} as any)}
            >
              <Slide
                direction="up"
                in={inView}
                timeout={{ enter: 500 + index * 500 }}
                style={{ width: "100%", display: "flex" }}
              >
                <div style={{ width: "100%", display: "flex" }}>
                  <InitiativeCard data={item} />
                </div>
              </Slide>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default ProductsCardSection;
