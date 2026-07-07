import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

export type TimelineMilestone = {
  date: string;
  title: string;
  description: string;
};

const Dot: React.FC<{ anchored: boolean }> = ({ anchored }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: anchored ? 22 : 16,
        height: anchored ? 22 : 16,
        borderRadius: "50%",
        backgroundColor: anchored
          ? theme.palette.primary.focus
          : theme.palette.primary.hero,
        border: `3px solid ${
          anchored ? theme.palette.primary.hero : theme.palette.cosmic.secondary
        }`,
        boxShadow: anchored
          ? `0 0 14px ${theme.palette.primary.focus}`
          : "none",
        flexShrink: 0,
        zIndex: 1,
      }}
    />
  );
};

const MilestoneText: React.FC<{
  milestone: TimelineMilestone;
  anchored: boolean;
  align: "center" | "left";
}> = ({ milestone, anchored, align }) => {
  const theme = useTheme();
  return (
    <Box sx={{ textAlign: align }}>
      <Typography
        variant="subtitle2"
        sx={{
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 1.5,
          color: anchored
            ? theme.palette.primary.hero
            : theme.palette.text.secondary,
        }}
      >
        {milestone.date}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: 600, mt: 0.5, lineHeight: 1.3 }}
      >
        {milestone.title}
      </Typography>
      <Typography
        variant="body2"
        sx={{ mt: 0.5, color: "text.secondary", lineHeight: 1.6 }}
      >
        {milestone.description}
      </Typography>
    </Box>
  );
};

/**
 * Visual milestone timeline: horizontal stepper on desktop,
 * vertical rail on mobile. The first milestone is visually anchored.
 */
const ChallengeTimeline: React.FC<{ milestones: TimelineMilestone[] }> = ({
  milestones,
}) => {
  const theme = useTheme();
  const edge = `${50 / milestones.length}%`;

  return (
    <>
      {/* Desktop: horizontal stepper */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          position: "relative",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 10,
            left: edge,
            right: edge,
            height: 3,
            backgroundColor: theme.palette.cosmic.secondary,
          }}
        />
        {milestones.map((milestone, index) => (
          <Box
            key={milestone.date}
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              px: 1.5,
              gap: 2,
            }}
          >
            <Box
              sx={{
                height: 22,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Dot anchored={index === 0} />
            </Box>
            <MilestoneText
              milestone={milestone}
              anchored={index === 0}
              align="center"
            />
          </Box>
        ))}
      </Box>

      {/* Mobile: vertical rail */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
          position: "relative",
          gap: 4,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: 10,
            top: 10,
            bottom: 10,
            width: 3,
            backgroundColor: theme.palette.cosmic.secondary,
          }}
        />
        {milestones.map((milestone, index) => (
          <Box
            key={milestone.date}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 2.5,
            }}
          >
            <Box
              sx={{
                width: 22,
                display: "flex",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Dot anchored={index === 0} />
            </Box>
            <MilestoneText
              milestone={milestone}
              anchored={index === 0}
              align="left"
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default ChallengeTimeline;
