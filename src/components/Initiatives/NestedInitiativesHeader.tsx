import React from "react";
import { Box, Container, Typography, Button, useTheme } from "@mui/material";

const overlayConfigs = [
  {
    width: "55%",
    opacity: 0.5,
    clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)",
  },
  {
    width: "60%",
    opacity: 0.4,
    clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0% 100%)",
  },
  {
    width: "65%",
    opacity: 0.3,
    clipPath: "polygon(20% 0, 100% 0, 80% 100%, 0% 100%)",
  },
  {
    width: "70%",
    opacity: 0.2,
    clipPath: "polygon(25% 0, 100% 0, 75% 100%, 0% 100%)",
  },
  {
    width: "75%",
    opacity: 0.1,
    clipPath: "polygon(30% 0, 100% 0, 70% 100%, 0% 100%)",
  },
];

interface headerData {
  image: string;
  heading: string;
  desc: string;
}

interface headerDataProps {
  data: headerData;
}
const HeaderSection = ({ data }: headerDataProps) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        height: "500px",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src={data.image}
        alt="Header Background"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
      />

      {/* Main white overlay on left side */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: { xs: "100%", md: "40%" },
          height: "100%",
          background:
            "linear-gradient(to right, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 50%, transparent 100%)",
          zIndex: 2,
        }}
      />

      {/* Angled trapezoid overlays */}
      {overlayConfigs.map((overlay, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            top: 0,
            left: "-10%",
            width: overlay.width,
            height: "100%",
            backgroundColor: `rgba(255,255,255,${overlay.opacity})`,
            clipPath: overlay.clipPath,
            zIndex: 2,
          }}
        />
      ))}

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 3,
          height: "100%",
          display: "flex",
          alignItems: "center",
          pl: { xs: 3, md: 15 },
          pt: { xs: 4, md: 6 },
          width: { xs: "100%", md: "35%" },
        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Sansation, sans-serif",
              fontWeight: 700,
              fontStyle: "normal",
              textShadow: `0px 0px 5px ${theme.palette.primary.focus}`,
            }}
            gutterBottom
          >
            {data.heading}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 3,
              fontFamily: "Sansation, sans-serif",
              fontStyle: "normal",
              maxWidth: "80%",
            }}
          >
            {data.desc}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderSection;
