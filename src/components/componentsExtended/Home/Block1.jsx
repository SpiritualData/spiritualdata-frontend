import React from "react";
import { Grid, Typography, styled } from "@mui/material";
import {
  PsychologyAltOutlined,
  PsychologyOutlined,
  TipsAndUpdatesOutlined,
} from "@mui/icons-material";

const StyledGridItem = styled(Grid)(({ theme }) => ({
  position: "relative",
  overflow: "hidden", // This line hides anything that overflows the grid item boundaries.
  backgroundColor: theme.palette.text.secondary,
  color: "#384146",
  borderLeft: `2px solid ${theme.palette.primary.focus}`,
  marginTop: -40,
  zIndex: 1,
  boxShadow: `0px 6px 10px #00000029`,
  "& div": {
    color: theme.palette.primary.focus,
    transition: "color 0.5s ease-in-out",
  },
  "&:hover": {
    color: theme.palette.text.secondary,
    "& div": {
      color: theme.palette.text.secondary,
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
    transition: "left 0.5s ease-in-out",
    zIndex: -1,
  },
  "&:hover:before": {
    left: 0,
  },
}));

const StyledIcon = styled("div")(({ theme }) => ({
  transition: "0.5s",
}));

const Block1 = () => {
  const data = [
    {
      name: "Spiritual Hypotheses",
      icon: (
        <TipsAndUpdatesOutlined
          sx={{ fontSize: 50, transform: "rotate(360deg)" }}
        />
      ),
      info: "Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam.",
    },
    {
      name: "Spiritual Experiences",
      icon: <PsychologyAltOutlined sx={{ fontSize: 50 }} />,
      info: "Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam.",
    },
    {
      name: "Spiritual Research",
      icon: <PsychologyOutlined sx={{ fontSize: 50 }} />,
      info: "Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam.",
    },
  ];
  return (
    <Grid container item spacing={3} px={"8%"}>
      {data.map((val, index) => (
        <StyledGridItem key={index} item xs={12} sm={6} md={4} py={4}>
          <StyledIcon>{val.icon}</StyledIcon>
          <Typography variant="h5">{val.name}</Typography>
          <Typography variant="body1" sx={{ color: "gray" }}>
            {val.info}
          </Typography>
        </StyledGridItem>
      ))}
    </Grid>
  );
};

export default Block1;
