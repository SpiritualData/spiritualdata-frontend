import React from "react";
import { Grid, Stack, Typography, styled } from "@mui/material";
import { Psychology, PsychologyAlt, TipsAndUpdates } from "@mui/icons-material";

export const StyledGridItem = styled(Grid)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  backgroundColor: theme.palette.text.secondary,
  color: "#384146",
  borderLeft: `2px solid ${theme.palette.primary.focus}`,
  marginTop: -40,
  zIndex: 1,
  boxShadow: `0px 6px 10px #00000029`,
  ":first-of-type": {
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
  },
  "&:last-child": {
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
  "& div": {
    color: theme.palette.primary.focus,
    transition: "color 0.5s ease-in-out",
  },
  "&:hover": {
    color: theme.palette.text.secondary,
    "& div": {
      color: theme.palette.text.secondary,
    },
    "& p": {
      color: "#ffffff",
    },
    "& h5": {
      color: "#ffffff",
    },
  },
  "&:before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background: theme.palette.primary.focus,
    transition: "left 0.3s ease-in-out",
    zIndex: -1,
  },
  "&:hover:before": {
    left: 0,
  },
  [theme.breakpoints.down("md")]: {
    borderBottom: `2px solid ${theme.palette.primary.focus}`,
    borderLeft: "none",
  },
}));

const StyledIcon = styled("div")(() => ({
  transition: "0.5s",
}));

const Block1 = () => {
  const data = [
    {
      name: "Hypotheses",
      icon: <TipsAndUpdates sx={{ fontSize: 70 }} />,
      count: 9876,
      info: "With well-grounded hypothesis, Spiritual Data challenges traditional perspectives. Experience the essence of spirituality through empirical data, fostering innovative thought processes",
    },
    {
      name: "Experiences",
      icon: <PsychologyAlt sx={{ fontSize: 70 }} />,
      count: 5432,
      info: "Dive into diverse spiritual experiences with Spiritual Data. Reflect on personal journeys, deepen your spiritual cosmos connection, and foster enlightenment",
    },
    {
      name: "Research",
      icon: <Psychology sx={{ fontSize: 70 }} />,
      count: 3456,
      info: "Venture into Spiritual Data's in-depth research that unravels spirituality's mysteries. We bridge spirituality and science, fostering personal growth and enhanced understanding",
    },
  ];
  return (
    <Grid container item px={{xs:'2%', sm:"8%"}} sx={{gap:{xs: 5, md: 0}}}>
      {data.map((val, index) => (
        <StyledGridItem key={index} item xs={12} sm={12} md={4} px={2} py={3}>
          <StyledIcon>{val.icon}</StyledIcon>
          <Stack direction='row'>
            <Typography variant="h5">{val.name}:&nbsp;</Typography>
            <Typography variant="h5" sx={{ color: "black", mt:0.2 }}>
              {val.count}
            </Typography>
          </Stack>
          <Typography sx={{ color: "black", fontSize: "14px" }}>
            {val.info}
          </Typography>
        </StyledGridItem>
      ))}
    </Grid>
  );
};

export default Block1;
