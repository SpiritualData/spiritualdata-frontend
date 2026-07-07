import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

/** Clean numbered list for the judging criteria. */
const JudgingList: React.FC<{ criteria: string[] }> = ({ criteria }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 820,
        mx: "auto",
      }}
    >
      {criteria.map((criterion, index) => (
        <Box
          key={criterion}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 2, md: 3 },
            backgroundColor: theme.palette.cosmic.elevated,
            borderRadius: 3,
            p: { xs: 2.5, md: 3 },
            boxShadow: `0px 4px 24px ${theme.palette.cardshadow.main}`,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: theme.palette.primary.hero,
              textShadow: `0 0 15px ${theme.palette.primary.focus}`,
              minWidth: { xs: 36, md: 44 },
              textAlign: "center",
              fontSize: { xs: "1.75rem", md: "2.25rem" },
            }}
          >
            {index + 1}
          </Typography>
          <Typography
            variant="body1"
            sx={{ lineHeight: 1.6, letterSpacing: 0.5 }}
          >
            {criterion}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default JudgingList;
