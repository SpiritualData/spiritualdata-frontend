import React from "react";
import InitiativeCard from "./Initiatives/InitiativesCard";
import { Container, Grid, Slide } from "@mui/material";
import { useInView } from "../hooks/useInView";
import { initiativeCardData } from "../data/InitiativesData";

const InitiativesCardSection = () => {
  return (
    <Container sx={{ py: 2 }}>
      <Grid
        container
        spacing={4}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          mb: 10,
        }}
      >
        {initiativeCardData.map((item, index) => {
          const { ref, inView } = useInView({ threshold: 0.3 });

          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={item.title}
              component="div"
              maxWidth={"385px"}
              height={"50vh"}
              ref={ref}
              {...({} as any)}
            >
              <Slide
                direction="up"
                in={inView}
                timeout={{ enter: 500 + index * 500 }}
              >
                <div>
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

export default InitiativesCardSection;
