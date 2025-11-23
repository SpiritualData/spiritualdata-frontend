import type React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  useTheme,
} from "@mui/material";

const FeaturesSection: React.FC<{
  data: Array<{
    icon: React.ReactNode;
    title: string;
    desc: string;
    subHead?: string;
  }>;
}> = ({ data }) => {
  const theme = useTheme();

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: { xs: 6, sm: 10, md: 16 },
        px: { xs: 2, sm: 3, md: 0 },
      }}
    >
      {/* Section Heading */}
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 2,
            color: "#333",
          }}
        >
          What Makes Quest Powerful
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            maxWidth: 600,
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          Quest combines intelligent AI guidance with proven accountability
          strategies to help you achieve meaningful transformation. Every
          feature is designed to keep you moving forward on your journey.
        </Typography>
      </Box>

      {/* Feature Cards */}
      <Grid container spacing={4} alignItems="stretch" justifyContent="center">
        {data.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              backgroundColor: theme.palette.cosmic.primary,
              transition: "all 0.5s ease",
              borderRadius: 5,
              ":hover": {
                backgroundColor: "#FFEAA7",
                transform: "scale(1.02)",
              },
            }}
            component="div"
            {...({} as any)}
          >
            <Card
              elevation={0}
              sx={{
                height: "100%",
                width: { xs: "100%", sm: "100%", md: "22rem" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                textAlign: "center",
                p: 2,
                border: "none",
                boxShadow: "none",
                backgroundColor: "transparent",
              }}
            >
              <CardContent
                sx={{
                  p: 0,
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* Top Row: Icon + Title */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minHeight: "50px", 
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mb: 2,
                      "& svg": {
                        fontSize: 48,
                        color: theme.palette.primary.focus,
                      },
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      mb: 0,
                      color: "#333",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>

                {/* Bottom Row: SubHead + Description */}
                <Box
                  sx={{
                    minHeight: "130px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.6,
                      fontSize: "0.875rem",
                      textAlign: "center",
                    }}
                  >
                    <b color={theme.palette.primary.focus}>{item.subHead}</b>{" "}
                    {item.desc}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturesSection;
