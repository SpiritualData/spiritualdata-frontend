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
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 4 },
        background: `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, white 100%)`,
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
          height: 120,
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
          variant="h3"
          fontWeight={700}
          color="text.primary"
          align="center"
          mb={1}
        >
          Your Quest in 4 Steps
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          align="center"
          mb={6}
        >
          Everything you need for your Quest.
        </Typography>

        <Fade in={inView} timeout={800}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: { xs: 4, sm: 6, md: 8 },
              px: { xs: 0, sm: 2 },
            }}
          >
            {data.map((item, index) => (
              <Box
                key={index}
                sx={{
                  flex: "1 1 220px",
                  maxWidth: 260,
                  textAlign: "center",
                  mx: "auto",
                  mt: {
                    xs: 4,
                    sm: index === 1 || index === 2 ? 10 : 6,
                    md: index === 1 || index === 2 ? 15 : 6,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 72,
                    height: 72,
                    mx: "auto",
                    mb: 2,
                    borderRadius: "50%",
                    backgroundColor: "#f8f8f8",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
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

                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  color="text.primary"
                  gutterBottom
                >
                  {item.step}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mx: "auto",
                    textAlign: "justify",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    lineHeight: 1.5,
                    letterSpacing: 0.5,
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
