import { Box, Button, Typography, useTheme } from "@mui/material";
import image from "../../assets/images/products/questSideImage.webp";
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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: { xs: "auto", md: "100vh" },
          pl: { xs: 2, sm: 4, md: 12 },
          py: { xs: 6, md: 0 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 600,
            gap: 4,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* Title */}
          <Box>
            <Typography
              variant="h2"
              fontWeight={700}
              color="primary.hero"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                mb: 1,
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  display: "block",
                  width: 40,
                  height: 3,
                  backgroundColor: theme.palette.primary.focus,
                  mt: 1,
                  ml: { xs: "auto", md: 0 },
                  mr: { xs: "auto", md: "initial" },
                },
              }}
            >
              Quest
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              mt={2}
              sx={{ maxWidth: 600, textAlign: "justify" }}
            >
              Your AI companion for meaningful transformation. Turn aspirations
              into achievements through guided conversations, intelligent
              accountability, and progress tracking.
            </Typography>
          </Box>

          {/* Button */}
          <Button
            variant="contained"
            onClick={() => onScrollClick()}
            sx={{
              backgroundColor: theme.palette.primary.focus,
              color: theme.palette.primary.hero,
              borderRadius: 8,
              height: 48,
              px: 4,
              fontWeight: 700,
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: 2,
              alignSelf: { xs: "center", md: "flex-start" },
              boxShadow: "0px 4px 14px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: theme.palette.primary.hero,
                color: theme.palette.primary.focus,
              },
            }}
          >
            Begin Your Quest
          </Button>

          {/* Bottom Section */}
          <Box>
            <Typography
              variant="h5"
              fontWeight={600}
              color="primary.hero"
              mb={1}
            >
              Every Journey Deserves a Guide
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ letterSpacing: 0.5, maxWidth: 520, textAlign: "justify" }}
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
