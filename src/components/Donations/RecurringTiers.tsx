import { Card, Box, Typography, Divider, useTheme } from "@mui/material";
import DonationMethod from "./DonationsMethod";

interface recurringTiersProps {
  data: {
    tier?: string;
    amount?: string;
    impact?: string;
    image?: string;
  }[];
}

const RecurringTiers = ({ data }: recurringTiersProps) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <>
      {data.map((item, idx) => {
        const { tier, amount, impact, image } = item;
        const numericAmount = amount
          ? Number(amount.replace(/[^0-9.-]+/g, ""))
          : undefined;

        return (
          <Card
            key={idx}
            sx={{
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: 4,
              display: "flex",
              flexDirection: "column",
              height: "100%",
              width: "300px",
              backgroundColor: isDark ? "#1e1e1e" : theme.palette.cosmic.secondary,
              transition: "all 0.3s ease",
              "&:hover .initiative-image": {
                transform: "scale(1.5) rotateZ(5deg)",
                elevation: 10,
              },
              mb: 3,
            }}
          >
            {/* Image Section with Overlay and Title */}
            <Box
              sx={{
                position: "relative",
                height: 200,
                overflow: "hidden",
              }}
            >
              {/* Background Image */}
              <Box
                className="initiative-image"
                sx={{
                  height: "100%",
                  width: "100%",
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "transform 0.5s ease",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 1,
                }}
              />

              {/* Dark overlay */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  zIndex: 2,
                }}
              />

              {/* Tier Title */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  zIndex: 3,
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "20px", md: "2rem" },
                    fontWeight: "bold",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    color: theme.palette.primary.focus,
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  {tier}
                </Typography>
              </Box>
            </Box>

            {/* Text Content */}
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                p: 4,
              }}
            >
              <Typography
                variant="subtitle1"
                fontWeight={500}
                color="text.primary"
                mb={1}
              >
                {amount ? amount : 100}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                mb={2}
                sx={{ whiteSpace: "pre-line" }}
              >
                {impact || ""}
              </Typography>

              <Divider
                sx={{ my: 2, borderColor: theme.palette.primary.focus }}
              />

              <DonationMethod amount={numericAmount} />
            </Box>
          </Card>
        );
      })}
    </>
  );
};

export default RecurringTiers;
