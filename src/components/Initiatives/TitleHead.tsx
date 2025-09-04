import React from "react";
import {
  Box,
  Container,
  Typography,
  useTheme,
  Fade,
  Slide,
} from "@mui/material";
import { styled } from "@mui/system";
import { useInView } from "../../hooks/useInView";

const BackgroundText = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "12rem",
  fontWeight: 900,
  color: theme.palette.primary.main,
  whiteSpace: "nowrap",
  userSelect: "none",
  zIndex: 0,
  pointerEvents: "none",
  textShadow: "0px 4px 20px rgba(0,0,0,0.08)",
}));

interface TiltCard {
  bgText: string;
  title: string;
  desc: string;
}

interface TiltHeadProps {
  data: TiltCard;
}

const TitleHead = ({ data }: TiltHeadProps) => {
  const theme = useTheme();
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <Box
      ref={ref}
      sx={{
        textAlign: "center",
        py: { xs: 8, md: 12 },
        overflow: "hidden",
        bgcolor: theme.palette.primary.main,
        position: "relative", // ✅ sticky removed
      }}
    >
      {/* Oversized Background Text */}
      <Fade in={inView} timeout={1000}>
        <BackgroundText>{data.bgText}</BackgroundText>
      </Fade>

      <Container sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Title */}
        <Slide direction="down" in={inView} timeout={900}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              display: "inline-block",
              position: "relative",
              fontFamily: "Sansation, sans-serif",
              fontWeight: 700,
            }}
          >
            {data.title}
          </Typography>
        </Slide>

        {/* Small underline accent */}
        <Slide direction="right" in={inView} timeout={1200}>
          <Box
            sx={{
              height: 5,
              width: 550,
              bgcolor: theme.palette.primary.focus,
              mx: "auto",
              borderRadius: 2,
            }}
          />
        </Slide>

        {/* Subtitle */}
        <Fade in={inView} timeout={1500}>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mt: 3,
              maxWidth: 1000,
              mx: "auto",
              fontFamily: "Sansation, sans-serif",
              letterSpacing: 1,
            }}
          >
            {data.desc}
          </Typography>
        </Fade>
      </Container>
    </Box>
  );
};

export default TitleHead;
