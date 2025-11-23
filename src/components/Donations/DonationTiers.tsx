import React from "react";
import {
  Box,
  Typography,
  useTheme,
  Grid,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import DonationMethod from "./DonationsMethod";

interface DonationTier {
  emoji: string;
  amount: number;
  title: string;
  description: string;
  impact: string;
}

const DonationTiers: React.FC = () => {
  const theme = useTheme();

  const tiers: DonationTier[] = [
    {
      emoji: "💛",
      amount: 25,
      title: "You Light a Mind",
      description:
        "You help us to reach a curious mind, a student or researcher rediscovering purpose through awareness and growth.",
      impact: "One spark. One awakening.",
    },
    {
      emoji: "🔬",
      amount: 100,
      title: "You Uncover Truth",
      description:
        "You fund breakthroughs that turn controversial questions about faith, emotion, and consciousness into real discoveries.",
      impact: "You bring light to what others overlook.",
    },
    {
      emoji: "🌱",
      amount: 500,
      title: "You Heal Connections",
      description:
        "You support projects that rebuild human connection — helping people find peace through measurable, ethical science.",
      impact: "Science that serves the soul.",
    },
    {
      emoji: "🌎",
      amount: 1000,
      title: "You Shape Humanity's Future",
      description:
        "You join visionaries ensuring that data and technology protect human dignity, not replace it.",
      impact: "Your gift becomes a moral compass for tomorrow.",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: theme.palette.cosmic.primary,
        py: { xs: 8, md: 12 },
        px: { xs: 3, sm: 6, md: 10, lg: 16 },
      }}
    >
      <Box maxWidth="1400px" mx="auto">
        {/* Section Title */}
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
          What Your Donation Does
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" },
            color: theme.palette.text.secondary,
            textAlign: "center",
            mb: 6,
            fontWeight: 400,
          }}
        >
          Every dollar you give fuels real change — restoring meaning,
          compassion, and truth through science.
        </Typography>

        {/* Donation Tier Cards */}
        <Grid container spacing={4} justifyContent="center" mb={6}>
          {tiers.map((tier, index) => (
            <Grid size={{xs:12,sm:6}} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 4,
                  bgcolor: theme.palette.cosmic.elevated,
                  boxShadow: `0px 4px 16px ${theme.palette.cardshadow.main}`,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: `0px 12px 24px ${theme.palette.cardshadow.main}`,
                  },
                }}
              >
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    p: 4,
                  }}
                >
                  {/* Emoji */}
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: "3rem",
                      textAlign: "center",
                      mb: 2,
                    }}
                  >
                    {tier.emoji}
                  </Typography>

                  {/* Amount */}
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.primary.focus,
                      textAlign: "center",
                      mb: 1,
                    }}
                  >
                    ${tier.amount}
                    {tier.amount === 1000 && "+"}
                  </Typography>

                  {/* Title */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.primary.hover,
                      textAlign: "center",
                      mb: 2,
                      fontSize: { xs: "1.1rem", md: "1.2rem" },
                    }}
                  >
                    {tier.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.primary,
                      textAlign: "center",
                      mb: 2,
                      lineHeight: 1.6,
                      fontSize: { xs: "0.95rem", md: "1rem" },
                      flexGrow: 1,
                    }}
                  >
                    {tier.description}
                  </Typography>

                  {/* Impact */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.primary.focus,
                      textAlign: "center",
                      fontStyle: "italic",
                      fontWeight: 600,
                      mb: 3,
                      fontSize: { xs: "0.9rem", md: "0.95rem" },
                    }}
                  >
                    {tier.impact}
                  </Typography>

                  {/* Donate Button */}
                  <Box sx={{ textAlign: "center" }}>
                    <DonationMethod amount={tier.amount} title={tier.impact} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Every Dollar Section */}
        <Box
          sx={{
            textAlign: "center",
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            bgcolor: theme.palette.cosmic.secondary,
            mb: 4,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: theme.palette.primary.hover,
              mb: 2,
              fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.7rem" },
            }}
          >
            ❤️ Every Dollar Has a Mission
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.15rem" },
              lineHeight: 1.7,
            }}
          >
            You're not just donating — you're restoring balance between what we
            know and what we feel.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.15rem" },
              lineHeight: 1.7,
              mb: 3,
            }}
          >
            You're proving that science can heal, and compassion can scale.
          </Typography>

          <Box sx={{ textAlign: "center" }}>
                    <DonationMethod title="Donate Now — Make Science Serve the Soul" />
          </Box>

          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: { xs: "0.85rem", sm: "0.9rem", md: "0.95rem" },
              mt: 3,
              fontStyle: "italic",
            }}
          >
            Every contribution is tax-deductible in the U.S. and directly
            funds our active research and product innovation initiatives.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DonationTiers;
