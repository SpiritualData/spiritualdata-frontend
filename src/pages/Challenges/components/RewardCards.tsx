import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

export type RewardCard = {
  stat?: string;
  title: string;
  body: string;
};

/** Prize/reward cards with big visual emphasis on the numbers. */
const RewardCards: React.FC<{ rewards: RewardCard[] }> = ({ rewards }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
        gap: { xs: 3, md: 4 },
      }}
    >
      {rewards.map((reward) => (
        <Box
          key={reward.title}
          sx={{
            backgroundColor: theme.palette.cosmic.elevated,
            borderRadius: 3,
            p: { xs: 3, md: 4 },
            boxShadow: `0px 4px 24px ${theme.palette.cardshadow.main}`,
            borderTop: `5px solid ${theme.palette.primary.focus}`,
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
          }}
        >
          {reward.stat && (
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2.5rem", md: "3rem" },
                color: theme.palette.primary.hero,
                textShadow: `0 0 20px ${theme.palette.primary.focus}`,
                letterSpacing: 1,
                lineHeight: 1.1,
              }}
            >
              {reward.stat}
            </Typography>
          )}
          <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 1 }}>
            {reward.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", lineHeight: 1.7 }}
          >
            {reward.body}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default RewardCards;
