import React from "react";
import { Box, Typography, useTheme, Fade, Slide } from "@mui/material";
import { useInView } from "../../hooks/useInView"; // adjust path if needed

type ApplicationData = {
  id: number;
  image: string;
  title: string;
  description: string;
};

interface ApplicationsProps {
  data: ApplicationData[];
}

const Applications: React.FC<ApplicationsProps> = ({ data }) => {
  const theme = useTheme();
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <Box
      ref={ref}
      sx={{
        width: "100%",
        backgroundColor: "primary.main",
        py: { xs: 6, md: 10 },
      }}
    >
      <Box sx={{ maxWidth: "1250px", mx: "auto", px: { xs: 2, sm: 4 } }}>
        {/* Header Section */}
        <Slide direction="up" in={inView} timeout={600}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 3, md: 6 },
              mb: { xs: 4, md: 6 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {/* Left */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  letterSpacing: 1,
                  color: "primary.hero",
                  textShadow: `0 0 10px ${theme.palette.primary.focus}`,
                  mb: 1,
                }}
              >
                Applications
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: 1,
                }}
              >
                Powering Breakthroughs Across Research Domains
              </Typography>
            </Box>

            {/* Divider */}
            <Box
              sx={{
                width: "3px",
                backgroundColor: "primary.focus",
                display: { xs: "none", md: "block" },
                alignSelf: "stretch",
                flexShrink: 0,
              }}
            />

            {/* Right */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  lineHeight: 1.7,
                  color: "text.secondary",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Concept AI is designed to advance discovery in diverse fields -
                from exploring the frontiers of consciousness to integrating
                knowledge across scientific disciplines. By combining data from
                research studies, human experiences, and theoretical models, it
                delivers insights that drive innovation and deepen
                understanding.
              </Typography>
            </Box>
          </Box>
        </Slide>

        {/* Image Cards */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: { xs: "column", sm: "row" },
            gap: 4,
            justifyContent: "center",
          }}
        >
          {data.map((item, index) => (
            <Fade
              in={inView}
              timeout={600 + index * 300} // stagger each card
              key={item.id}
            >
              <Box
                sx={{
                  flex: "1 1 300px",
                  maxWidth: { xs: "100%", sm: 400 },
                  borderRadius: 8,
                  overflow: "hidden",
                  position: "relative",
                  border: `8px solid ${theme.palette.primary.main}`,
                  boxShadow: `0 0 5px ${theme.palette.primary.hero}`,
                  "&:hover img": {
                    transform: "scale(1.05)",
                  },
                  "&:hover .overlay": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                  transition: "all 0.3s ease-in-out",
                }}
              >
                {/* Image */}
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: "100%",
                    aspectRatio: "1/1",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                    display: "block",
                  }}
                />

                {/* Overlay */}
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0) 80%)",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "flex-start",
                    padding: 3,
                    opacity: 0,
                    transform: "translateY(15px)",
                    transition: "opacity 0.4s ease, transform 0.4s ease",
                    "& h6": {
                      fontWeight: "bold",
                      fontSize: "1rem",
                      marginBottom: "0.3rem",
                      lineHeight: 1.3,
                    },
                    "& p": {
                      fontSize: "0.85rem",
                      lineHeight: 1.4,
                      opacity: 0.85,
                    },
                  }}
                >
                  <Typography variant="h4" mb={4}>
                    {item.title}
                  </Typography>
                  <Typography variant="h6">{item.description}</Typography>
                </Box>
              </Box>
            </Fade>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Applications;
