import * as React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Divider,
  useMediaQuery,
  Fade,
  Slide,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CheckRounded from "@mui/icons-material/CheckRounded";
import { useInView } from "../../hooks/useInView";

const GuidingPrinciples: React.FC = () => {
  const theme = useTheme();
  const { ref, inView } = useInView({ threshold: 0.2 });

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
      body: "The mind is more than matter - and science should reflect that.",
    },
  ];

  const rightCards = [
    {
      title: "Truth Estimation Engine",
      body: "AI that evaluates research and calculates what’s most likely true - free from human bias.",
    },
    {
      title: "Education & Advocacy",
      body: "Bringing parapsychology and consciousness studies into the mainstream, one platform at a time.",
    },
    {
      title: "Scientific Certification of Phenomena",
      body: "Running real experiments to validate spiritual abilities with open, peer-reviewable results.",
    },
  ];

  return (
    <Box
      component="section"
      ref={ref}
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
        background: {
          xs: theme.palette.primary.main,
          md: `linear-gradient(90deg, ${theme.palette.primary.focus} 0 50%, ${theme.palette.primary.main} 50% 100%)`,
        },
      }}
    >
      {/* Vertical divider */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          "&:after": {
            content: '""',
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "1px",
            backgroundColor: "rgba(0,0,0,0.06)",
            transform: "translateX(-0.5px)",
          },
        }}
      />

      <Container maxWidth="lg">
        <Grid
          container
          spacing={0}
          justifyContent="center"
          sx={{ position: "relative", zIndex: 2 }}
        >
          {/* LEFT: What Guides Us */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              flexBasis: { md: "40%" },
              maxWidth: { md: "40%" },
              mr: { md: "15%" },
            }}
            component="div"
            {...({} as any)}
          >
            <Slide direction="up" in={inView} timeout={600}>
              <Box
                sx={{
                  backgroundColor: {
                    xs: theme.palette.primary.focus,
                    md: "transparent",
                  },
                  color: theme.palette.text.primary,
                  minHeight: "100%",
                }}
              >
                <Stack spacing={10} sx={{ maxWidth: 560, mx: "auto" }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      lineHeight: 1.05,
                      fontSize: { xs: 26, sm: 32, md: 38 },
                      color: theme.palette.primary.hover,
                      letterSpacing: 2,
                      textShadow: `0 0 10px ${theme.palette.primary.main}`,
                    }}
                  >
                    What Guides Us
                  </Typography>

                  <Stack spacing={4}>
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
                                width: 30,
                                height: 30,
                                borderRadius: 1.5,
                                display: "grid",
                                placeItems: "center",
                                boxShadow: `inset 0 0 0 2px ${theme.palette.primary.hover}`,
                                backgroundColor: theme.palette.primary.main,
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
                                  fontSize: { xs: 18, md: 20 },
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
                                  fontSize: { xs: 15, md: 16 },
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
              </Box>
            </Slide>
          </Grid>

          {/* RIGHT: What We Do */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              flexBasis: { md: "40%" },
              maxWidth: { md: "40%" },
              ml: { md: "5%" },
            }}
            component="div"
            {...({} as any)}
          >
            <Slide direction="up" in={inView} timeout={700}>
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  minHeight: "100%",
                }}
              >
                <Stack spacing={5} sx={{ maxWidth: 400, mx: "auto" }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      lineHeight: 1.05,
                      fontSize: { xs: 28, sm: 36, md: 44 },
                      color: theme.palette.primary.hover,
                      textAlign: "center",
                      mb: 6,
                      letterSpacing: 2,
                      textShadow: `0 0 10px ${theme.palette.primary.focus}`,
                    }}
                  >
                    What We Do
                  </Typography>

                  <Stack spacing={3}>
                    {rightCards.map((card, idx) => (
                      <Fade
                        in={inView}
                        timeout={900 + idx * 200}
                        key={card.title}
                      >
                        <Box
                          sx={{
                            py: 3,
                            px: 5,
                            borderRadius: 3,
                            backgroundColor: theme.palette.darkcard.main,
                            color: theme.palette.darkcard.contrastText,
                            minHeight: { xs: 110, sm: 120, md: 140 },
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            textAlign: "center",
                            boxShadow: `0 12px 28px ${theme.palette.cardshadow.main}`,
                            transition:
                              "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                            transform: "translateY(0)",
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
                              mb: 3,
                              color: theme.palette.darkcard.contrastText,
                              letterSpacing: 1,
                            }}
                          >
                            {card.title}
                          </Typography>
                          <Typography sx={{ color: theme.palette.grey[300] }}>
                            {card.body}
                          </Typography>
                        </Box>
                      </Fade>
                    ))}
                  </Stack>
                </Stack>
              </Box>
            </Slide>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default GuidingPrinciples;
