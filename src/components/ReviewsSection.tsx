import React from "react";
import {
  Box,
  Grid,
  Typography,
  useTheme,
  Button,
  Slide,
} from "@mui/material";
import { useInView } from "@/hooks/useInView";
import ReviewCard from "./reviewSection/ReviewCard";
import reviewImage1 from "../assets/images/Reviews/review1.webp";
import reviewImage2 from "../assets/images/Reviews/review2.webp";
import reviewImage3 from "../assets/images/Reviews/review3.webp";
import reviewImage4 from "../assets/images/Reviews/review4.webp";
import reviewImage5 from "../assets/images/Reviews/review5.webp";
import reviewImage6 from "../assets/images/Reviews/review6.webp";

interface ReviewCardProps {
  name: string;
  title: string;
  text: string;
  img: string;
  dark?: boolean;
  highlight?: boolean;
}

const ClientReviewsSection: React.FC = () => {
  const theme = useTheme();

  const reviews = [
    {
      name: "Prashant Zoro",
      title: "Spiritual Technologist",
      text: "Spiritual Data means building a space where people can find more evidence-based perspectives for questions that lack clear answers.",
      img: reviewImage3,
    },
    {
      name: "Evadisay",
      title: "Therapy Advocate",
      text: "Your team's idea let me see spiritual influences and patterns—without needing to agree or deny benefit. Just observe the idea.",
      img: reviewImage5,
    },
    {
      name: "Aiad 44798",
      title: "Consciousness Researcher",
      text: "Spiritual Data targets the bias in science by leveraging AI and data to elevate spiritual understanding. A crucial initiative.",
      img: reviewImage1,
      dark: true,
    },
    {
      name: "Anas Tasius",
      title: "Non-Profit Contributor",
      text: "It's about real, evolving, evidence-backed truth that both humans and AI can understand and build upon—together.",
      img: reviewImage6,
      highlight: true,
    },
    {
      name: "Ashxthetic",
      title: "AI Enthusiast",
      text: "I find it inspiring there's a space where truth-seeking, intuition, and data come together through AI and science.",
      img: reviewImage2,
    },
    {
      name: "Suraksha 5771",
      title: "Spiritual Seeker",
      text: "Spiritual Data isn't just about information—it's about Truth. Combining science and AI to help people make sense of life.",
      img: reviewImage4,
    },
  ];

  return (
    <Box sx={{ py: 13, px: { xs: 2, md: 24 }, bgcolor: "white" }}>
      {/* Top Section */}
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
        mb={10}
      >
        <Grid item xs={12} md={6} component="div" {...({} as any)}>
          <Typography
            variant="subtitle2"
            fontWeight={600}
            color="text.secondary"
            sx={{ letterSpacing: 2, mb: 2, display: "block" }}
          >
            CLIENT REVIEWS
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 500,
              color: theme.palette.text.primary,
              letterSpacing: "-0.5px",
              lineHeight: 0.9,
            }}
          >
            Client Feedback That <br /> Speaks for Itself
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md="auto"
          display="flex"
          justifyContent={{ xs: "flex-start", md: "flex-end" }}
          component="div"
          {...({} as any)}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: theme.palette.primary.focus,
              color: theme.palette.primary.hero,
              fontWeight: "bold",
              px: 4,
              py: 1.5,
              borderRadius: 8,
              "&:hover": {
                bgcolor: theme.palette.primary.hover,
                color: theme.palette.primary.main,
              },
            }}
          >
            ALL REVIEWS
          </Button>
        </Grid>
      </Grid>

      {/* Card Grid */}
      <Grid container spacing={2}>
        {reviews.map((review, index) => {
          const { ref, inView } = useInView({ threshold: 0.2 });

          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              ref={ref}
              component="div"
              {...({} as any)}
            >
              <Slide in={inView} direction="up" timeout={500 + index * 100}>
                <div>
                  <ReviewCard {...review} />
                </div>
              </Slide>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ClientReviewsSection;
