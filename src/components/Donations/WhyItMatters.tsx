import React, { useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  Stack,
  Collapse,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ScienceIcon from "@mui/icons-material/Science";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SchoolIcon from "@mui/icons-material/School";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

interface ImpactItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WhyItMatters: React.FC = () => {
  const theme = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const impactItems: ImpactItem[] = [
    { icon: <ScienceIcon sx={{ fontSize: 40 }} />, title: "Groundbreaking Research", description: "Research comparing foundational theory, addressing the most controversial questions of reality", },
    { icon: <FavoriteIcon sx={{ fontSize: 40 }} />, title: "Product Innovation", description: "Product innovation that enables individuals to transform their lives through personalized science and community connections", },
    { icon: <PsychologyIcon sx={{ fontSize: 40 }} />, title: "Ethical AI & Data", description: "Ethical AI & Data initiatives that respects diverse perspectives and scales wisdom's impact through technology", },
    { icon: <SchoolIcon sx={{ fontSize: 40 }} />, title: "Public Education", description: "Public education programs removing stigma and encouraging worldviews that are the most validated by data", },];

  return (
    <Box
      sx={{
        bgcolor: theme.palette.cosmic.secondary,
        py: { xs: 8, md: 12 },
        px: { xs: 3, sm: 6, md: 10, lg: 16 },
      }}
    >
      <Box maxWidth="1200px" mx="auto">
        {/* Title */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" },
            color: theme.palette.primary.hover,
            textAlign: "center",
            mb: 2,
          }}
        >
          Why It Matters
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="h5"
          sx={{
            mt: 5,
            fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
            color: theme.palette.text.secondary,
            textAlign: "justify",
            fontWeight: 600,
            fontStyle: "italic",
            mb: 4
          }}
        >
          We're the most connected generation in history and the most disconnected from meaning.
        </Typography>

        {/* Main Description */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: { xs: 3, md: 6 },
          }}
        >
          {/* Text Block */}
          <Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.15rem" },
                color: theme.palette.text.primary,
                lineHeight: 1.8,
                mb: { xs: 2, md: 0 },
                textAlign: "justify",
              }}
            >
              Humanity faces a silent crisis: disconnection, anxiety, and moral fatigue in an age of
              information overload. Spiritual Data is on a mission to bridge the gap between empirical
              research and spiritual understanding transforming abstract ideals into actionable,
              measurable outcomes.
            </Typography>
            <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.15rem" },
            color: theme.palette.text.primary,
            lineHeight: 1.8,
            mb: 5,
            textAlign: "justify",
          }}
        >
          We're not guessing. We're building technologies and frameworks that quantify compassion,
          integrity, and inner peace.
        </Typography>
          </Box>

        
          <Box
            sx={{
              flex: 1.5,
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            
          </Box>
        </Box>



        

        {/* Impact Section */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.4rem" },
            color: theme.palette.primary.hover,
            mb: 4,
            textAlign: "justify",
          }}
        >
          Every donation accelerates:
        </Typography>

        <Stack spacing={3} mb={5}>
          {impactItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Box
                key={index}
                onClick={() => handleToggle(index)}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  p: 3,
                  borderRadius: 3,
                  bgcolor: theme.palette.cosmic.elevated,
                  boxShadow: `0px 4px 12px ${theme.palette.cardshadow.main}`,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: `0px 8px 20px ${theme.palette.cardshadow.main}`,
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box sx={{ color: theme.palette.primary.focus }}>{item.icon}</Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.primary.hover,
                        fontSize: { xs: "1.1rem", md: "1.2rem" },
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                  <IconButton
                    size="small"
                    sx={{ color: theme.palette.primary.focus }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggle(index);
                    }}
                  >
                    {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </IconButton>
                </Box>

                {/* Description (collapsible) */}
                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      fontSize: { xs: "0.95rem", md: "1rem" },
                      lineHeight: 1.6,
                      mt: 2,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Collapse>
              </Box>
            );
          })}
        </Stack>

        {/* Closing Text */}
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1.05rem", sm: "1.15rem", md: "1.2rem" },
            color: theme.palette.primary.hover,
            fontWeight: 600,
            textAlign: "center",
            lineHeight: 1.7,
          }}
        >
          Your support fuels a mission that is bigger than belief — it's the next step in human evolution.
        </Typography>
      </Box>
    </Box>
  );
};

export default WhyItMatters;
