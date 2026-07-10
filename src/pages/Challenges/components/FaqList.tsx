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

export type FaqItem = {
  title: string;
  detail: React.ReactNode;
};

/** Compact expandable list for rules and fine print. */
const FaqList: React.FC<{ items: FaqItem[] }> = ({ items }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
        maxWidth: 820,
        mx: "auto",
      }}
    >
      {items.map((item) => (
        <Accordion
          key={item.title}
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
                sx={{ color: theme.palette.primary.hero, fontSize: 26 }}
              />
            }
            sx={{ px: { xs: 2.5, md: 3 } }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, letterSpacing: 0.5 }}
            >
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: { xs: 2.5, md: 3 }, pt: 0, pb: 2.5 }}>
            <Typography
              variant="body2"
              component="div"
              sx={{
                lineHeight: 1.7,
                letterSpacing: 0.5,
                color: "text.secondary",
              }}
            >
              {item.detail}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FaqList;
