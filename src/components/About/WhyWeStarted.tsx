import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  useTheme,
  Slide,
  Fade,
} from "@mui/material";
import { useInView } from "../../hooks/useInView";

const WhyWeStarted = () => {
  const theme = useTheme();

  const heading = useInView();
  const intro = useInView();
  const outro = useInView();

  const cardData = [
    {
      id: "100%",
      title: "People stop arguing",
      description:
        "Instead, they start listening  -  because truth becomes visible.",
    },
    {
      id: "100%",
      title: "Divisions shrink",
      description:
        "A shared sense of reality helps humanity unify across lines of difference.",
    },
    {
      id: "10x",
      title: "Curiosity replaces fear",
      description:
        "When evidence leads the way, exploration becomes safer than dogma.",
    },
  ];

  const cardRefs = cardData.map(() => useInView()); // one ref per card

  return (
    <Box
      sx={{
        background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, transparent 100%)`,
        px: { xs: 6, sm: 15, md: 30 },
        py: { xs: 8, md: 12 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Heading */}
      <div ref={heading.ref}>
        <Slide in={heading.inView} direction="up" timeout={700}>
          <Typography
            variant="h3"
            sx={{
              my: 3,
              mb: 5,
              fontWeight: 600,
              color: "text.primary",
              textShadow: `0 0 10px ${theme.palette.primary.focus}`,
            }}
          >
            Why We Started
          </Typography>
        </Slide>
      </div>

      {/* Intro paragraph */}
      <div ref={intro.ref}>
        <Fade in={intro.inView} timeout={1000}>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{
              maxWidth: "1200px",
              mb: 6,
              letterSpacing: 0.8,
              textAlign: "center",
            }}
          >
            Spiritual truth hasn't disappeared - it's been buried. At Spiritual
            Data, our vision is simple but transformative: to change the world
            by changing the source of people's beliefs. For too long, spiritual
            questions have been shaped by authority, taboo, or personal opinion.
            We believe that when people are shown undeniable, unbiased evidence,
            a global shift becomes possible - a move toward clarity,
            intellectual humility, and a deeper sense of shared truth.
          </Typography>
        </Fade>
      </div>

      {/* Cards */}
      <Grid
        container
        spacing={3}
        sx={{
          width: "100%",
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        {cardData.map((card, index) => {
          const { ref, inView } = cardRefs[index];

          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={`${card.id}-${index}`}
              sx={{ display: "flex", justifyContent: "center" }}
              component="div"
              {...({} as any)}
            >
              <div
                ref={ref}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Fade in={inView} timeout={400 + index * 400}>
                  <Paper
                    elevation={0}
                    sx={{
                      backgroundColor:
                        index === cardData.length - 1
                          ? theme.palette.primary.focus
                          : "white",
                      borderRadius: 3,
                      py: 4,
                      px: 6,
                      width: "100%",
                      maxWidth: 280,
                      height: "80%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      transition: "all 0.3s ease",
                      ":hover": {
                        boxShadow: `0px 0px 10px 3px ${
                          index === cardData.length - 1
                            ? theme.palette.primary.hero
                            : theme.palette.primary.focus
                        }`,
                        transform: `scale(1.01) translateY(5px)`,
                      },
                    }}
                  >
                    <Typography
                      variant="h4"
                      fontWeight={500}
                      color="text.secondary"
                      sx={{ mb: 10 }}
                    >
                      {card.id}
                    </Typography>
                    <Typography
                      variant="h5"
                      fontWeight={600}
                      color="text.primary"
                      sx={{ mb: 1, letterSpacing: 1 }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      sx={{ letterSpacing: 0.8 }}
                    >
                      {card.description}
                    </Typography>
                  </Paper>
                </Fade>
              </div>
            </Grid>
          );
        })}
      </Grid>

      {/* Outro */}
      <div ref={outro.ref}>
        <Fade in={outro.inView} timeout={1000}>
          <Box mt={6}>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                mb: 5,
                letterSpacing: 1,
                textAlign: "center",
              }}
            >
              This is more than a technological breakthrough. It's a cultural
              shift toward a world united by loving understanding, guided by
              truth we can all see together.
            </Typography>
          </Box>
        </Fade>
      </div>
    </Box>
  );
};

export default WhyWeStarted;
