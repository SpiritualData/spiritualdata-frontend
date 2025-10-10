import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Grid, Typography, styled } from "@mui/material";

import image from "../assets/dataDiscovery.png";
import PageHeader from "../components/PageHeader";
import PageDef from "../components/PageDef";
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

interface DataItemProps {
  val: {
    name: string;
    buttonText: string;
    maxNumber: number;
    path: string;
  };
}

const DataItem: React.FC<DataItemProps> = ({ val }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (count < val.maxNumber) {
      interval = setInterval(() => {
        setCount((count) => count + Math.ceil(val.maxNumber / 100));
      }, 40);
    } else if (count > val.maxNumber) {
      setCount(val.maxNumber);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [count, val.maxNumber]);

  return (
    <StyledGridItem size={{ xs: 12, sm: 6, md: 4 }} px={2} py={4}>
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

const Research = () => {
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
      maxNumber: 26,
      path: "https://docs.google.com/forms/u/1/d/e/1FAIpQLSfsRYQBweDGRGrFsu52UbwZx4px5h9G-7XWRHMtMywtN7jelw/viewform?usp=send_form",
    },
  ];

  return (
    <Grid container>
      <PageHeader image={image} page={"Research"} sx={{ mb: 4 }} />

      <PageDef
        title={"Research"}
        heading={"Advancing AI for Scientific Understanding"}
        details={""}
      />

      <Box sx={{ px: { xs: 4, md: "17%" }, mb: 6, mt: { xs: -3, md: -6 } }}>
        <Typography
          sx={{
            fontSize: { xs: "13px", sm: "16px" },
            color: "black",
            textAlign: "left",
            mb: 2,
          }}
        >
          At Spiritual Data, we're developing and rigorously evaluating AI systems designed to advance scientific understanding across diverse research domains. Our flagship project, Concept AI, represents a novel approach to bias-resistant knowledge integration and hypothesis evaluation.
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "13px", sm: "16px" },
            color: "black",
            textAlign: "left",
            mb: 2,
          }}
        >
          We're currently evaluating our AI algorithm's performance on standardized tests designed for humans, including AP educational exams and medical licensing tests, comparing results against state-of-the-art large language models. This benchmarking helps us understand how our specialized, bias-resistant approach performs relative to general-purpose AI systems on complex reasoning tasks.
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "13px", sm: "16px" },
            color: "black",
            textAlign: "left",
            mb: 2,
          }}
        >
          Our research methodology emphasizes transparency, probabilistic reasoning, and multi-disciplinary evidence integration. By combining diverse data sources—from quantitative research to qualitative experiences—we aim to create AI systems that can navigate complex scientific questions while maintaining methodological rigor.
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "13px", sm: "16px" },
            color: "black",
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          Learn more about our{" "}
          <a
            href="https://spiritualdata.notion.site/Concept-AI-Scientific-Explanation-660a512bc1e14d969afa82b47ec01188"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4691B8" }}
          >
            research methodology and scientific approach
          </a>
          .
        </Typography>
      </Box>

      <Box
        sx={{
          background: "#F3F6F8",
          width: "100%",
          p: 6,
          textAlign: "center",
        }}
      >
        <Typography sx={{ fontWeight: "bold", mb: 4 }} variant="h4">
          Database Status
        </Typography>

        <Typography
          sx={{
            mt: -3,
            mb: 3,
            fontSize: { xs: "13px", sm: "16px" },
            color: "black",
            px: { xs: 0, md: "17%" },
            textAlign: "left",
          }}
        >
          Our research infrastructure is built on a comprehensive knowledge base that integrates diverse evidence types. We're continuously expanding our database to support more sophisticated AI-driven research and hypothesis evaluation across multiple scientific domains.
        </Typography>

        <Grid container px={{ xs: 0, sm: "8%" }}>
          {data.map((val, index) => (
            <DataItem key={index} val={val} />
          ))}
        </Grid>

        <Grid
          size={{ xs: 12 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: { xs: "center", md: "flex-start" },
            height: "40px",
          }}
        >
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                my: 3,
                backgroundColor: (theme) => theme.palette.primary.focus,
                color: "#1F2540",
                px: 4,
                py: 1.5,
                fontWeight: 600,
                borderRadius: 8,
                textTransform: "none",
                fontSize: "1rem",
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.primary.hover,
                  color: "#fff",
                },
              }}
            >
              Contact Us About Research Collaboration
            </Button>
          </Link>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Research;
