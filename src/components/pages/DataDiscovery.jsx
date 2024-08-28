import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Grid, Typography, styled } from "@mui/material";

import image from "../../assets/dataDiscovery.png";
import PageHeader from "../helpers/PageHeader";
import PageDef from "../helpers/PageDef";
import { East } from "@mui/icons-material";

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
      <Typography sx={{ color: "black", fontSize: "32px", fontWeight: 500 }}>
        {count}
      </Typography>

      <Link to={val.path} style={{ textDecoration: "none" }} target={"_blank"}>
        <Button
          variant="text"
          sx={{
            "&:hover": {
              backgroundColor: "transparent",
              color: "inherit",
            },
          }}
        >
          <Typography
            sx={{
              color: (theme) => theme.palette.primary.focus,
              fontSize: "14px",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
              display: "flex",
              alignItems: "center",
            }}
          >
            {val.buttonText}{" "}
          </Typography>
        </Button>
      </Link>
    </StyledGridItem>
  );
};

const DataDiscovery = () => {
  const data = [
    {
      name: "Hypotheses",
      buttonText: "SUBMIT A HYPOTHESIS",
      maxNumber: 100,
      path: "https://forms.gle/GmCTXs8V6ZCpFs8z5",
    },
    {
      name: "Experiences",
      buttonText: "SUBMIT AN EXPERIENCE",
      maxNumber: 5998,
      path: "https://forms.gle/oF6HvwPoc2Ndf9bT9",
    },
    {
      name: "Research",
      buttonText: "SUBMIT EVIDENCE OR RESEARCH STUDY",
      maxNumber: 24,
      path: "https://docs.google.com/forms/u/1/d/e/1FAIpQLSfsRYQBweDGRGrFsu52UbwZx4px5h9G-7XWRHMtMywtN7jelw/viewform?usp=send_form",
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
          fontSize: { xs: "13px", sm: "16px" },
          color: "black",
          px: { xs: 4, md: "17%" },
          textAlign: "center",
        }}
      >
        Data discovery is a pivotal feature of our Spiritual Data platform. This
        vast, user-curated database is a rich tapestry interweaving diverse
        spiritual hypothesis, comprehensive research, and deeply personal
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

        <Typography
          sx={{
            mt: -3,
            mb: 3,
            fontSize: { xs: "13px", sm: "16px" },
            color: "black",
            px: { xs: 0, md: "17%" },
            textAlign: "center",
          }}
        >
          Years of research and data collection have provided
          insights into profound spiritual experiences. Analyzing patterns and
          commonalities, we continue to develop hypotheses, deepening our
          understanding of spirituality's impact on individuals and communities.
          Embracing the mysteries, we aim to enrich the human spiritual journey
          with our rapidly increasing numbers of database statistics.
        </Typography>

        <Grid container item px={{ xs: 0, sm: "8%" }}>
          {data.map((val, index) => (
            <DataItem key={index} val={val} />
          ))}
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: { xs: "center", md: "flex-start" },
            height: "40px",
          }}
        >
          <a
            href="https://spiritualdata.org"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="text"
              sx={{
                my: 3,
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "inherit",
                },
              }}
            >
              <Typography
                sx={{
                  color: (theme) => theme.palette.primary.focus,
                  fontSize: "16px",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Make a contribution{" "}
                <East sx={{ marginLeft: "4px", fontSize: "16px" }} />
              </Typography>
            </Button>
          </a>
        </Grid>
      </Box>
    </Grid>
  );
};

export default DataDiscovery;
