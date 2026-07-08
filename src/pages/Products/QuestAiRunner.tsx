import { useRef } from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import ProductHero from "@/components/Products/ProductHero";
import CalltoAction from "../../components/Products/CallToAction";
import Features from "../../components/Quest/Features";
import QuestMission from "@/components/Quest/QuestMission";
import {
  heroData,
  featuresData,
  missionData,
  callToAction,
} from "../../data/questAiRunnerData";

const QuestAiRunner = () => {
  const theme = useTheme();
  const ctaRef = useRef<HTMLDivElement | null>(null);

  const scrollToCta = () => {
    ctaRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <ProductHero
        content={heroData}
        product="quest-ai-runner"
        onScrollClick={scrollToCta}
      />
      <Features
        data={featuresData}
        heading="What Makes Quest AI Runner Dependable"
        subheading="Quest AI Runner executes real work for real teams. Each capability exists so the tasks you enqueue in Quest come back done to a standard, with humans consulted whenever a decision needs one."
      />
      <QuestMission data={missionData} />

      {/* Pairs with Quest */}
      <Box
        sx={{
          width: "100%",
          py: { xs: 8, md: 12 },
          px: { xs: 3, sm: 6 },
          textAlign: "center",
          backgroundColor: theme.palette.cosmic.elevated,
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{ mb: 2, color: "#333", letterSpacing: 1 }}
        >
          Pairs with Quest
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 640, mx: "auto", mb: 4, lineHeight: 1.7 }}
        >
          Quest is where your team enqueues AI tasks; Quest AI Runner is what
          executes them. Together they turn a queue of goals into finished,
          reviewable work.
        </Typography>
        <Button
          component={Link}
          to="/products/quest"
          variant="contained"
          sx={{
            backgroundColor: theme.palette.primary.focus,
            color: theme.palette.primary.hero,
            borderRadius: 8,
            height: 44,
            px: 4,
            fontWeight: 700,
            fontSize: "14px",
            textTransform: "uppercase",
            letterSpacing: 2,
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: theme.palette.primary.hero,
              color: theme.palette.primary.focus,
            },
          }}
        >
          Learn about Quest
        </Button>
      </Box>

      {/* Scroll Target */}
      <div
        ref={ctaRef}
        style={{
          scrollMarginTop: "150px",
        }}
      >
        <CalltoAction data={callToAction} />
      </div>
    </>
  );
};

export default QuestAiRunner;
