import * as React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Divider,
  Fade,
  Slide,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CheckRounded from "@mui/icons-material/CheckRounded";
import { useInView } from "../../hooks/useInView";
import { useNavigate } from "react-router-dom";

interface GuidingPrinciplesProps {
  backgroundImage: string;
}

const GuidingPrinciples: React.FC<GuidingPrinciplesProps> = ({
  backgroundImage,
}) => {
  const theme = useTheme();
  const { ref, inView } = useInView({ threshold: 0.2 });
  const navigate = useNavigate();

  const leftItems = [
    {
      title: "Radical Transparency",
      body: "We share our data, methods, and results openly. No hidden algorithms.",
    },
    {
      title: "Data Before Dogma",
      body: "Belief systems don't dictate conclusions - evidence does.",
    },
    {
      title: "Intellectual Autonomy",
      body: "We empower people to interpret truth for themselves.",
    },
    {
      title: "Collaboration Over Control",
      body: "Our tools grow through global contributions, not gatekeeping.",
    },
    {
      title: "Science with Soul",
      body: "We allow science to address spiritual questions through statistical metaphysics and ranking of alternative explanations.",
    },
  ];

  const rightCards = [
    {
      title: "Truth Estimation Engine",
      body: "AI that evaluates research and calculates what's most likely true - overcoming human bias by including all perspectives.",
      link: "/initiatives/estimating-truth",
    },
    {
      title: "Education & Advocacy",
      body: "Bringing parapsychology and consciousness studies into the mainstream, one platform at a time.",
      link: "/initiatives/wikipedia-advocacy",
    },
    {
      title: "Scientific Certification of Phenomena",
      body: "Running real experiments to validate spiritual abilities with open, peer-reviewable results.",
      link: "/initiatives/psychic-ability-certification",
    },
  ];

  return (
    <Box
      component="section"
      ref={ref}
      sx={{
        position: "relative",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth={false} disableGutters>
        <Grid
          container
          direction={{ xs: "column", md: "row" }}
          sx={{ position: "relative", zIndex: 2 }}
        >
          {/* LEFT */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              width: { xs: "100%", md: "50vw" },
              position: "relative",
              py: { xs: 6, sm: 8, md: 10 },
            }}
            component="div"
            {...({} as any)}
          >
            {/* overlay */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                backgroundColor: theme.palette.primary.focus,
                opacity: 0.925,
                zIndex: 1,
              }}
            />
            <Box
              sx={{
                position: "relative",
                zIndex: 2,
                px: { xs: 2, sm: 3, md: 6 },
                py: { xs: 4, sm: 6, md: 8 },
              }}
            >
              <Slide direction="up" in={inView} timeout={600}>
                <Stack
                  spacing={{ xs: 6, sm: 8, md: 10 }}
                  sx={{ maxWidth: 560, mx: "auto" }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      lineHeight: 1.05,
                      fontSize: { xs: 22, sm: 28, md: 38 },
                      color: theme.palette.primary.hover,
                      letterSpacing: { xs: 1, sm: 1.5, md: 2 },
                      textShadow: `0 0 10px ${theme.palette.primary.main}`,
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    What Guides Us
                  </Typography>

                  <Stack spacing={{ xs: 3, sm: 4 }}>
                    {leftItems.map((item, idx) => (
                      <Fade
                        in={inView}
                        timeout={800 + idx * 200}
                        key={item.title}
                      >
                        <Box>
                          <Stack
                            direction="row"
                            spacing={2.5}
                            alignItems="flex-start"
                          >
                            <Box
                              sx={{
                                width: 28,
                                height: 28,
                                borderRadius: 1.5,
                                display: "grid",
                                placeItems: "center",
                                boxShadow: `inset 0 0 0 2px ${theme.palette.primary.hover}`,
                                backgroundColor: theme.palette.cosmic.primary,
                                flexShrink: 0,
                              }}
                            >
                              <CheckRounded
                                sx={{
                                  fontSize: 18,
                                  color: theme.palette.primary.hover,
                                }}
                              />
                            </Box>

                            <Box sx={{ flex: 1 }}>
                              <Typography
                                sx={{
                                  fontWeight: 700,
                                  fontSize: { xs: 16, sm: 18, md: 20 },
                                  lineHeight: 1.2,
                                  color: theme.palette.primary.hero,
                                  mb: 0.75,
                                }}
                              >
                                {item.title}
                              </Typography>
                              <Typography
                                sx={{
                                  color: theme.palette.text.secondary,
                                  fontSize: { xs: 14, sm: 15, md: 16 },
                                  lineHeight: 1.6,
                                }}
                              >
                                {item.body}
                              </Typography>
                            </Box>
                          </Stack>

                          {idx !== leftItems.length - 1 && (
                            <Divider
                              sx={{ mt: 3, borderColor: "rgba(0,0,0,0.08)" }}
                            />
                          )}
                        </Box>
                      </Fade>
                    ))}
                  </Stack>
                </Stack>
              </Slide>
            </Box>
          </Grid>
          {/* RIGHT */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              width: { xs: "100%", md: "50vw" },
              position: "relative",
              py: { xs: 6, sm: 8, md: 10 },
            }}
            component="div"
            {...({} as any)}
          >
            {/* overlay */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                backgroundColor: theme.palette.cosmic.primary,
                opacity: 0.8,
                zIndex: 1,
              }}
            />
            <Box
              sx={{
                position: "relative",
                zIndex: 2,
                px: { xs: 2, sm: 3, md: 6 },
                py: { xs: 4, sm: 6, md: 8 },
              }}
            >
              <Slide direction="up" in={inView} timeout={700}>
                <Stack
                  spacing={{ xs: 4, sm: 5 }}
                  sx={{ maxWidth: 400, mx: "auto" }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      lineHeight: 1.05,
                      fontSize: { xs: 24, sm: 32, md: 44 },
                      color: theme.palette.primary.hover,
                      textAlign: "center",
                      mb: { xs: 4, sm: 5, md: 6 },
                      letterSpacing: { xs: 1, sm: 1.5, md: 2 },
                      textShadow: `0 0 10px ${theme.palette.primary.focus}`,
                    }}
                  >
                    What We Do
                  </Typography>

                  <Stack spacing={{ xs: 2.5, sm: 3 }}>
                    {rightCards.map((card, idx) => (
                      <Fade
                        in={inView}
                        timeout={900 + idx * 200}
                        key={card.title}
                      >
                        <Box
                          onClick={() => navigate(card.link)}
                          sx={{
                            py: { xs: 2, sm: 3 },
                            px: { xs: 3, sm: 4, md: 5 },
                            borderRadius: 3,
                            backgroundColor: theme.palette.darkcard.main,
                            color: theme.palette.darkcard.contrastText,
                            minHeight: { xs: 100, sm: 120, md: 140 },
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            textAlign: "center",
                            boxShadow: `0 12px 28px ${theme.palette.cardshadow.main}`,
                            transition:
                              "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                            transform: "translateY(0)",
                            cursor: "pointer",
                            ":hover": {
                              transform: "translateY(-5px) scale(1.015)",
                              boxShadow: `0 16px 32px ${theme.palette.primary.focus}`,
                            },
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 700,
                              mb: 2,
                              color: theme.palette.darkcard.contrastText,
                              letterSpacing: 1,
                              fontSize: { xs: 16, sm: 18, md: 20 },
                            }}
                          >
                            {card.title}
                          </Typography>
                          <Typography
                            sx={{
                              color: theme.palette.grey[300],
                              fontSize: { xs: 14, sm: 15, md: 16 },
                            }}
                          >
                            {card.body}
                          </Typography>
                        </Box>
                      </Fade>
                    ))}
                  </Stack>
                </Stack>
              </Slide>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default GuidingPrinciples;
