import { Box, Button, Typography, useTheme } from "@mui/material";
import { fadeInBottom } from "../../styles/animations/FadeInBottom";
import questBanner from "../../assets/Images/Products/questSideImage.webp";
import cAiBanner from "../../assets/Images/Products/conceptAiBanner.webp";

type QuestHeroProps = {
  onScrollClick: () => void;
  product: string;
  content: {
    title: string;
    description: string;
    buttonText: string;
    subHead: string;
    subDesc: string;
  };
};

const ProductHero = ({ onScrollClick, product, content }: QuestHeroProps) => {
  const theme = useTheme();

  return (
    <Box
      id="quest-hero-section"
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: product === "concept-ai" ? "row-reverse" : "row",
        },
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
          width: { xs: "100%", md: "45%" },
          height: { xs: 300, sm: 400, md: "100%" },
          flexShrink: 0,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${
              product === "concept-ai" ? cAiBanner : questBanner
            })`,
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
          // pr: product === "concept-ai" ? { xs: 2, sm: 4, md: 10 } : {},
          // pl: product === "quest" ? { xs: 2, sm: 4, md: 12 } : { xs: 5 },
          px: product === "concept-ai" ? { xs: 2, sm: 4, md: 15 } : { xs: 10 },
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
              {content.title}
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              mt={2}
              sx={{ maxWidth: 600, textAlign: "justify" }}
            >
              {content.description}
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
            {content.buttonText}
          </Button>

          {/* Bottom Section */}
          <Box>
            <Typography
              variant="h5"
              fontWeight={600}
              color="primary.hero"
              mb={1}
            >
              {content.subHead}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                letterSpacing: 0.5,
                maxWidth: { sm: "100%", md: 520 },
                textAlign: "justify",
              }}
            >
              {content.subDesc}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductHero;
