import { Box, Button, Slide, Typography, useTheme } from "@mui/material";
import image from "../../assets/Images/Products/questSideImage.webp";
import { fadeInBottom } from "../../styles/animations/FadeInBottom";

type QuestHeroProps = {
  onScrollClick: () => void;
};

const QuestHero = ({ onScrollClick }: QuestHeroProps) => {
  const theme = useTheme();

  return (
    <Box
      id="quest-hero-section"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: "100%",
        height: { xs: "auto", md: "100vh" },
        overflow: "hidden",
        backgroundColor: theme.palette.primary.main,
        animation: `${fadeInBottom} 3s ease`,
      }}
    >
      {/* Left-side Image */}
      <Box
        sx={{
          width: { xs: "100%", md: "42%" },
          height: { xs: 300, sm: 400, md: "100%" },
          flexShrink: 0,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </Box>

      {/* Right-side Content */}
      <Box
        sx={{
          width: { xs: "100%", md: "58%" },
          py: { xs: 5, sm: 6, md: 12 },
          px: { xs: 3, sm: 6, md: 10, lg: 15 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            width: "100%",
            maxWidth: 600,
            maxHeight: { md: "80%", lg: "70%" },
          }}
        >
          {/* Top Content */}
          <Box textAlign={{ xs: "center", md: "left" }}>
            <Typography
              variant="h2"
              mb={4}
              fontWeight={600}
              color="primary.hero"
            >
              Quest
            </Typography>

            <Typography
              variant="h5"
              color="text.secondary"
              mb={5}
              textAlign="justify"
            >
              Your AI companion for meaningful transformation. Turn aspirations
              into achievements through guided conversations, intelligent
              accountability, and progress tracking.
            </Typography>

            <Button
              variant="contained"
              onClick={() => onScrollClick()}
              sx={{
                backgroundColor: theme.palette.primary.focus,
                color: theme.palette.primary.hero,
                borderRadius: 8,
                height: 42,
                px: 4,
                fontWeight: 700,
                fontSize: "14px",
                textTransform: "uppercase",
                fontFamily: "Poppins, sans-serif",
                letterSpacing: "0.5px",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: theme.palette.primary.hero,
                  color: theme.palette.primary.focus,
                },
              }}
            >
              Begin Your Quest
            </Button>
          </Box>

          {/* Bottom Content */}
          <Box textAlign={{ xs: "center", md: "left" }} mt={4}>
            <Typography
              variant="h5"
              fontWeight={600}
              color="primary.hero"
              mb={2}
            >
              Every Journey Deserves a Guide
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              textAlign="justify"
              letterSpacing={1}
            >
              Whether you're pursuing spiritual growth, personal transformation,
              or practical goals, Quest provides the structure and support you
              need to succeed.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default QuestHero;
