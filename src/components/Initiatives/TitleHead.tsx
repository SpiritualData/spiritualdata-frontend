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
import { alpha } from "@mui/material/styles";
import { useInView } from "../../hooks/useInView";

// A faint watermark above the title, kept clear of the description so it never sits under body text.
const BackgroundText = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: "50%",
  transform: "translateX(-50%)",
  fontSize: "clamp(3.5rem, 11vw, 10rem)",
  lineHeight: 1,
  fontWeight: 900,
  color: alpha(theme.palette.text.primary, 0.07),
  whiteSpace: "nowrap",
  userSelect: "none",
  zIndex: 0,
  pointerEvents: "none",
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
        pt: { xs: 9, md: 14 },
        pb: { xs: 8, md: 12 },
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
              maxWidth: 760,
              mx: "auto",
              fontFamily: "Sansation, sans-serif",
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.75,
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
