import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import LaunchIcon from "@mui/icons-material/Launch";

export type TechnologyCardLink = {
  label: string;
  href: string;
};

export type TechnologyCard = {
  icon: React.ReactNode;
  name: string;
  description: React.ReactNode;
  links?: TechnologyCardLink[];
};

/** Dark cards presenting the products/technology to sell and build on. */
const TechnologyCards: React.FC<{ cards: TechnologyCard[] }> = ({ cards }) => {
  const theme = useTheme();

  const linkSx = {
    alignSelf: "flex-start",
    color: theme.palette.primary.focus,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: "none",
    px: 0,
    minWidth: 0,
    mr: 3,
    "&:hover": {
      backgroundColor: "transparent",
      textDecoration: "underline",
    },
  } as const;

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
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
          {card.links && card.links.length > 0 && (
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              {card.links.map((link) =>
                link.href.startsWith("/") ? (
                  <Button
                    key={link.href}
                    component={RouterLink}
                    to={link.href}
                    endIcon={<LaunchIcon sx={{ fontSize: 16 }} />}
                    sx={linkSx}
                  >
                    {link.label}
                  </Button>
                ) : (
                  <Button
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener"
                    endIcon={<LaunchIcon sx={{ fontSize: 16 }} />}
                    sx={linkSx}
                  >
                    {link.label}
                  </Button>
                )
              )}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default TechnologyCards;
