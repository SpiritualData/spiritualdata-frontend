import React from "react";
import {
  Box,
  Grid,
  Typography,
  useTheme,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import { useInView } from "../../hooks/useInView";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  location: string;
}

const RealStories: React.FC = () => {
  const theme = useTheme();

  const testimonials: Testimonial[] = [
    {
      quote:
        "I've seen how Spiritual Data's research helps people reconnect with purpose — not through belief alone, but through measurable, verifiable change.",
      author: "Dr. Amelia Cross",
      title: "Cognitive Scientist",
      location: "California",
    },
    {
      quote:
        "When I first learned how their data models measure emotional well-being, I realized — this is what modern spirituality should look like.",
      author: "Michael Reed",
      title: "Donor & Volunteer",
      location: "New York",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: theme.palette.cosmic.secondary,
        py: { xs: 8, md: 12 },
        px: { xs: 3, sm: 6, md: 10, lg: 16 },
      }}
    >
      <Box maxWidth="1200px" mx="auto">
        {/* Section Title */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" },
            color: theme.palette.primary.hover,
            textAlign: "center",
            mb: 8,
          }}
        >
          Real Stories. Real Impact.
        </Typography>

        {/* Testimonials Grid */}
        <Grid container spacing={12} justifyContent="center">
          {testimonials.map((testimonial, index) => {
            const { ref, inView } = useInView({ threshold: 0.2 });

            return (
              <Grid
                size={{xs:12,md:6}}
                key={index}
                ref={ref}
                sx={{ display: "flex" }}
              >
                <Card
                  elevation={6}
                  sx={{
                    flex: 1,
                    borderRadius: 4,
                    overflow: "hidden",
                    background: `linear-gradient(160deg, ${theme.palette.cosmic.elevated} 0%, ${theme.palette.background.paper} 100%)`,
                    boxShadow: `0 6px 22px ${theme.palette.cardshadow.main}`,
                    position: "relative",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: `0 10px 28px ${theme.palette.cardshadow.main}`,
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: `linear-gradient(135deg, ${theme.palette.primary.focus}33, transparent)`,
                      opacity: 0.1,
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      position: "relative",
                      zIndex: 2,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      py: { xs: 4, md: 3 },
                      px: { xs: 4, md: 4 },
                    }}
                  >
                    {/* Quote Icon */}
                    <Box sx={{ mb: 2 }}>
                      <FormatQuoteIcon
                        sx={{
                          fontSize: 48,
                          color: theme.palette.primary.focus,
                          opacity: 0.25,
                        }}
                      />
                    </Box>

                    {/* Quote Text */}
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: "1rem", sm: "1.1rem", md: "1.15rem" },
                        color: theme.palette.text.primary,
                        lineHeight: 1.8,
                        fontStyle: "italic",
                        mb: 3,
                      }}
                    >
                      “{testimonial.quote}”
                    </Typography>
                    <Divider/>

                    {/* Author Info */}
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: theme.palette.primary.hover,
                          fontSize: { xs: "1rem", md: "1.1rem" },
                          pt:2.5
                        }}
                      >
                        — {testimonial.author}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                          fontSize: { xs: "0.9rem", md: "0.95rem" },
                        }}
                      >
                        {testimonial.title}, {testimonial.location}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* Closing Statement */}
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" },
            color: theme.palette.primary.hover,
            textAlign: "center",
            mt: 8,
            fontWeight: 600,
            lineHeight: 1.7,
            maxWidth: "900px",
            letterSpacing:1,
            mx: "auto",
          }}
        >
          Together, we are proving that spiritual evolution can be measured —
          and multiplied.
        </Typography>
      </Box>
    </Box>
  );
};

export default RealStories;
