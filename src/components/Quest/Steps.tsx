import React from "react";
import { Box, Typography, useTheme, Fade } from "@mui/material";
import { useInView } from "../../hooks/useInView";

const Steps = ({
  data,
}: {
  data: Array<{
    step: string;
    icon: React.ReactNode;
    title: string;
    desc: string;
  }>;
}) => {
  const theme = useTheme();
  const { ref, inView } = useInView();

  const getBorderColor = (index: number) => {
    const arc = theme.palette.primary.hover;
    const transparent = "transparent";
    switch (index) {
      case 0:
        return `${arc} ${transparent} ${transparent} ${transparent}`;
      case 1:
        return `${arc} ${arc} ${transparent} ${transparent}`;
      case 2:
        return `${arc} ${arc} ${arc} ${transparent}`;
      case 3:
        return `${arc}`;
      default:
        return `${arc} ${arc} ${transparent} ${transparent}`;
    }
  };

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 6, sm: 10, md: 16 },
        px: { xs: 2, sm: 4 },
        background: `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, ${theme.palette.cosmic.primary} 100%)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top radial curve */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: { xs: 80, sm: 100, md: 140 },
          background: `radial-gradient(ellipse at top, ${theme.palette.primary.main} 20%, transparent 70%)`,
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          color="text.primary"
          align="center"
          mb={{ xs: 1, sm: 2 }}
        >
          Your Quest in 4 Steps
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          align="center"
          mb={{ xs: 4, sm: 6 }}
          px={{ xs: 2, sm: 6, md: 12 }}
        >
          Everything you need for your Quest.
        </Typography>

        <Fade in={inView} timeout={800}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "repeat(4, 1fr)",
              },
              gap: { xs: 4, sm: 6, md: 8 },
              justifyItems: "center",
            }}
          >
            {data.map((item, index) => (
              <Box
                key={index}
                sx={{
                  maxWidth: { xs: "100%", sm: 280 },
                  textAlign: "center",
                  mt: {
                    xs: 4,
                    sm: index === 1 || index === 2 ? 0 : 0,
                    md: index === 1 || index === 2 ? 15 : 0,
                  },
                }}
              >
                {/* Icon */}
                <Box
                  sx={{
                    width: { xs: 64, sm: 72, md: 80 },
                    height: { xs: 64, sm: 72, md: 80 },
                    mx: "auto",
                    mb: 2,
                    borderRadius: "50%",
                    backgroundColor: theme.palette.cosmic.secondary,
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: { xs: 28, sm: 32 },
                    color: theme.palette.primary.focus,
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      borderStyle: "solid",
                      borderWidth: "3px",
                      borderColor: getBorderColor(index),
                      transform: "rotate(45deg)",
                      boxSizing: "border-box",
                    },
                  }}
                >
                  {item.icon}
                </Box>

                {/* Step */}
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  color="text.primary"
                  gutterBottom
                >
                  {item.step}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mx: "auto",
                    textAlign: { xs: "center", sm: "justify" },
                    lineHeight: 1.6,
                    letterSpacing: 0.3,
                    px: { xs: 2, sm: 0 },
                  }}
                >
                  <b>{item.title}</b> {item.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Fade>
      </Box>
    </Box>
  );
};

export default Steps;
