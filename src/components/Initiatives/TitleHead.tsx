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
        position: "relative",
      }}
    >
      {/* Oversized Background Text */}
      <Fade in={inView} timeout={500}>
        <BackgroundText>{data.bgText}</BackgroundText>
      </Fade>

      <Container sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Title */}
        <Fade in={inView} timeout={1200}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              position: "relative",
              fontFamily: "Sansation, sans-serif",
              fontWeight: 700,
              display: "inline-block",
              borderBottom: `5px solid ${theme.palette.primary.focus}`,
              paddingBottom: "4px",
            }}
          >
            {data.title}
          </Typography>
        </Fade>

        {/* Subtitle */}
        <Fade in={inView} timeout={2000}>
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
