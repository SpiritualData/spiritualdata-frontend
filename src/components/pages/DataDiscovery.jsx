import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Typography, styled } from "@mui/material";

import image from "../../assets/dataDiscovery.png";
import PageHeader from "../helpers/PageHeader";
import PageDef from "../helpers/PageDef";

export const StyledGridItem = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.text.secondary,
  color: "#384146",
  borderLeft: `2px solid ${theme.palette.primary.focus}`,
  boxShadow: `0px 6px 10px #00000029`,
  textAlign: "center",
  ":first-of-type": {
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
  },
  "&:last-child": {
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
  [theme.breakpoints.down("sm")]: {
    borderBottom: `2px solid ${theme.palette.primary.focus}`,
    borderLeft: "none",
  },
}));

const DataItem = ({ val }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = null;
    if (count < val.maxNumber) {
      interval = setInterval(() => {
        setCount((count) => count + Math.ceil(val.maxNumber / 100));
      }, 40);
    } else if (count > val.maxNumber) {
      setCount(val.maxNumber);
    }
    return () => clearInterval(interval);
  }, [count, val.maxNumber]);

  return (
    <StyledGridItem item xs={12} sm={6} md={4} px={2} py={4}>
      <Typography fontSize="28px" fontWeight="bold" my={1}>
        {val.name}
      </Typography>
      <Typography sx={{ color: "grey", fontSize: "32px", fontWeight: 500 }}>
        {count}
      </Typography>
    </StyledGridItem>
  );
};

const DataDiscovery = () => {
  const data = [
    {
      name: "Spiritual Hypotheses",
      maxNumber: 9876,
    },
    {
      name: "Spiritual Experiences",
      maxNumber: 5432,
    },
    {
      name: "Spiritual Researchs",
      maxNumber: 3456,
    },
  ];

  return (
    <Grid container>
      <PageHeader image={image} page={"Data Discovery"} sx={{ mb: 4 }} />

      <PageDef
        title={"Data Discovery"}
        heading={"Navigate the Realm of Data Discovery"}
        details={""}
      />

      <Typography
        sx={{
          mt: { xs: -3, md: -6 },
          mb: 6,
          fontSize: "16px",
          color: "grey",
          px: { xs: 4, md: "17%" },
          textAlign: "center",
        }}
      >
        Data discovery is a pivotal feature of our Spiritual Data platform. This
        vast, user-curated database is a rich tapestry interweaving diverse
        spiritual hypotheses, comprehensive research, and deeply personal
        experiences. What sets Spiritual Data apart is its organic,
        user-generated growth—every piece of information, every insight, every
        revelation has been contributed by real individuals traversing their
        unique spiritual journeys. This continual influx of fresh perspectives
        keeps the database evolving, making it a dynamic, ever-expanding
        repository of spiritual wisdom. As more and more users share their
        experiences, research, and insights, the database becomes richer,
        offering deeper insights and a broader spectrum of perspectives. With
        each passing day, our collective understanding grows, opening up
        exciting new pathways for exploration and discovery in the realm of
        spirituality. <br />
        <br />{" "}
        <b>
          If you're interested, check out
          <Link style={{ color: "#4691B8" }}>
            {" "}
            https://spiritualdata.org
          </Link>{" "}
          and add your perspective!
        </b>
      </Typography>

      <Box
        sx={{ background: "#F3F6F8", width: "100%", p: 6, textAlign: "center" }}
      >
        <Typography sx={{ fontWeight: "bold", mb: 4 }} variant="h4">
          Our Database Stats
        </Typography>
        <Grid container item px={{ xs: 0, sm: "8%" }}>
          {data.map((val, index) => (
            <DataItem key={index} val={val} />
          ))}
        </Grid>
      </Box>
    </Grid>
  );
};

export default DataDiscovery;
