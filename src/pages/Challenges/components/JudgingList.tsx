import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export type JudgingCriterion = {
  title: string;
  detail: string;
};

/** Numbered judging criteria, each expandable to a fuller explanation. */
const JudgingList: React.FC<{ criteria: JudgingCriterion[] }> = ({
  criteria,
}) => {
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
        <Accordion
          key={criterion.title}
          disableGutters
          elevation={0}
          sx={{
            backgroundColor: theme.palette.cosmic.elevated,
            borderRadius: "12px !important",
            boxShadow: `0px 4px 24px ${theme.palette.cardshadow.main}`,
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{ color: theme.palette.primary.hero, fontSize: 28 }}
              />
            }
            sx={{ px: { xs: 2.5, md: 3 }, py: { xs: 0.5, md: 1 } }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 2, md: 3 },
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
                sx={{ lineHeight: 1.6, letterSpacing: 0.5, fontWeight: 600 }}
              >
                {criterion.title}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              px: { xs: 2.5, md: 3 },
              pb: { xs: 2.5, md: 3 },
              pt: 0,
              pl: { xs: 2.5, md: 3 },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                lineHeight: 1.7,
                letterSpacing: 0.5,
                color: "text.secondary",
                ml: { xs: 0, md: "68px" },
              }}
            >
              {criterion.detail}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default JudgingList;
