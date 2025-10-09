import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  useTheme,
  Slide,
} from "@mui/material";
import { useInView } from "../hooks/useInView";
import ReviewCard from "./reviewSection/ReviewCard";

interface ReviewCardProps {
  name: string;
  title: string;
  text: string;
  img?: string;
  dark?: boolean;
  highlight?: boolean;
}

const ClientReviewsSection: React.FC = () => {
  const theme = useTheme();

  const reviews = [
    {
      name: "Evadisay",
      title: "Community Member",
      text: "I have been studying psychology for several years ... For a long time I denied the benefits and in general anything “esoteric and spiritual” in terms of science. But your team's idea allowed me to look at it from a different perspective, as influences and possible causes and patterns, without agreeing or denying benefit/harm. Just as the idea itself.",
    },
    {
      name: "Prashant",
      title: "Community Member",
      text: 'When I think about the mission to create a "reliable source of truth for spiritual questions," it means building a space where people can find more evidence-based perspectives or data-driven insights for questions that often lack clear, easily referenced answers or established sources. Looking forward to seeing how this all evolves!',
    },
    {
      name: "Aiad",
      title: "Community Member",
      text: "At its heart, Spiritual Data isn’t just about spirituality. It’s about truth—real, evolving, evidence-backed truth that both humans and AI can understand and build upon.",
      dark: true,
    },
    {
      name: "Moh",
      title: "Community Member",
      text: "They are combining spirituality, science and engineering to help other people. I'm a person of faith and have always had spiritual questions, but there's never a place where I can find unbiased answers for anything. ... The use of everything to support their cause means I can learn while also help others.",
      highlight: true,
    },
    {
      name: "Shrihari",
      title: "Community Member",
      text: "I believe we can create a positive effect on people’s lives by harnessing the fast changing world of AI. ... We need to combine spirituality with science and back it up with strong evidence ... For me personally, this represents an opportunity to help ordinary people, like myself, access tools that enable them to grow, heal and live up to their potential.",
    },
    {
      name: "Honelign",
      title: "Community Member",
      text: "Faith and belief should be examined with both logic and scientific validation, while still respecting the paths faith provides. I have worked to bridge these perspectives, and Spiritual Data feels like the perfect place where my technical skills and personal mission meet. That is why I am excited and fully committed to contribute to this vision.",
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
        <Grid item xs={12} component="div" {...({} as any)}>
          <Typography
            variant="subtitle2"
            fontWeight={600}
            color="text.secondary"
            sx={{ letterSpacing: 2, mb: 2, display: "block" }}
          >
            WHAT THE PEOPLE SAY
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
            Here's How We're Impacting Individuals
          </Typography>
        </Grid>
      </Grid>

      {/* Card Grid */}
      <Grid container spacing={2} justifyContent="center">
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
