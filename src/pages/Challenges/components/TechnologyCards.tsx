import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

export type TechnologyCard = {
  icon: React.ReactNode;
  name: string;
  description: React.ReactNode;
  link?: {
    label: string;
    href: string;
  };
};

/** Dark cards presenting the technology to build on. */
const TechnologyCards: React.FC<{ cards: TechnologyCard[] }> = ({ cards }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
        gap: { xs: 3, md: 4 },
      }}
    >
      {cards.map((card) => (
        <Box
          key={card.name}
          sx={{
            backgroundColor: theme.palette.darkcard.main,
            color: theme.palette.darkcard.contrastText,
            borderRadius: 3,
            p: { xs: 3, md: 4 },
            boxShadow: `0px 4px 24px ${theme.palette.cardshadow.main}`,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-6px)",
              boxShadow: `0 0 30px ${theme.palette.primary.focus}40`,
            },
          }}
        >
          <Box
            sx={{
              color: theme.palette.primary.focus,
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            {card.icon}
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, letterSpacing: 1.5 }}
            >
              {card.name}
            </Typography>
          </Box>
          <Typography
            variant="body2"
            component="div"
            sx={{ lineHeight: 1.7, letterSpacing: 0.5, flexGrow: 1 }}
          >
            {card.description}
          </Typography>
          {card.link && (
            <Button
              href={card.link.href}
              target="_blank"
              rel="noopener"
              endIcon={<LaunchIcon sx={{ fontSize: 16 }} />}
              sx={{
                alignSelf: "flex-start",
                color: theme.palette.primary.focus,
                fontWeight: 700,
                letterSpacing: 1,
                textTransform: "none",
                px: 0,
                "&:hover": {
                  backgroundColor: "transparent",
                  textDecoration: "underline",
                },
              }}
            >
              {card.link.label}
            </Button>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default TechnologyCards;
