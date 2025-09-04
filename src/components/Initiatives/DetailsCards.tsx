import React from "react";
import { Box, Container, Typography, Paper, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import bgimage from "../../assets/Images/Initiatives/EstimatingTruth/cardsbg.webp";

interface DetailsCard {
  id: number;
  title: string;
  desc: string;
  secHead?: string;
  secSubHead1?: string;
  secSubHead2?: string;
}

interface DetailsCardsProps {
  data: DetailsCard[];
}

const DetailsCards = ({ data }: DetailsCardsProps) => {
  const theme = useTheme();
  const topBoxes = data.slice(0, 2);
  const bottomBoxes = data.slice(2, 6);

  const boxStyle = {
    p: 3,
    borderRadius: 2,
    bgcolor: "background.paper",
    boxShadow: 3,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const BackgroundText = styled("div")(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "5rem",
    fontWeight: 900,
    color: theme.palette.primary.main,
    whiteSpace: "nowrap",
    userSelect: "none",
    zIndex: 0,
    pointerEvents: "none",
    textShadow: "0px 0px 20px rgba(0,0,0,0.15)",
    textAlign: "center",
    letterSpacing: 10,
    lineHeight: 1,
  }));

  const DirectionAwareCard = styled(Paper)(({ theme }) => ({
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    border: `8px solid ${theme.palette.primary.main}`,

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: `linear-gradient(to bottom, transparent 0%, ${theme.palette.primary.focus} 100%)`,
      transform: "var(--overlay-transform, translateY(-100%))",
      transition: "transform 0.35s ease",
      zIndex: 0,
    },

    "&.entering::before": {
      transform: "translate(0,0)",
    },

    "& > *": {
      position: "relative",
      zIndex: 1,
    },
  }));

  const getDirection = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): "top" | "right" | "bottom" | "left" => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const topDist = y;
    const bottomDist = rect.height - y;
    const leftDist = x;
    const rightDist = rect.width - x;

    const min = Math.min(topDist, bottomDist, leftDist, rightDist);

    switch (min) {
      case topDist:
        return "top";
      case bottomDist:
        return "bottom";
      case leftDist:
        return "left";
      default:
        return "right";
    }
  };

  const dirMap: Record<string, string> = {
    top: "translateY(-100%)",
    bottom: "translateY(100%)",
    left: "translateX(-100%)",
    right: "translateX(100%)",
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLElement;
    const enterDirection = getDirection(e);

    // Step A: teleport overlay to new enter side instantly (no transition)
    target.classList.remove("entering", "exiting");
    target.style.setProperty("--overlay-transform", dirMap[enterDirection]);
    void target.offsetWidth; // force reflow

    // Step B: animate into center
    target.classList.add("entering");
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLElement;
    const exitDirection = getDirection(e);

    // Animate out towards exit side
    target.style.setProperty("--overlay-transform", dirMap[exitDirection]);
    target.classList.remove("entering");
    target.classList.add("exiting");
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: theme.palette.primary.main,
        pt: 15,
        pb: 25,
      }}
    >
      <Container>
        <Box display="flex" flexDirection="column" gap={11}>
          {/* Top Row */}
          <Box display="flex" gap={3} width="100%" height="auto">
            {/* Left Heading */}
            <Box
              flex={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                minHeight: 125,
                bgcolor: "transparent",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <BackgroundText>
                {data[0]?.secSubHead1} <br />
                {data[0]?.secSubHead2}
              </BackgroundText>

              <Typography
                variant="h1"
                sx={{
                  fontWeight: "bold",
                  letterSpacing: 8,
                  color: "primary.hero",
                  fontFamily: "Sansation, sans-serif",
                  position: "relative",
                  zIndex: 1,
                  textShadow: `-1px -1px 0 ${theme.palette.primary.focus}, 1px -1px 0 ${theme.palette.primary.focus}, -1px 1px 0 ${theme.palette.primary.focus}, 1px 1px 0 ${theme.palette.primary.focus}`,
                }}
              >
                {data[0]?.secHead}
              </Typography>
            </Box>

            {/* Right Column */}
            <Box flex={1} display="flex" flexDirection="row" gap={3}>
              {topBoxes.map((item) => (
                <Box flex={1} key={item.id}>
                  <DirectionAwareCard
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    sx={{ ...boxStyle, minHeight: 125 }}
                  >
                    <Typography variant="h6" textAlign="center">
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      textAlign="center"
                      sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </DirectionAwareCard>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Bottom Row */}
          <Box display="flex" gap={3} width="100%">
            {bottomBoxes.map((item) => (
              <Box flex={1} key={item.id}>
                <DirectionAwareCard
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  sx={{ ...boxStyle, minHeight: 125 }}
                >
                  <Typography variant="h6" textAlign="center">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    textAlign="center"
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {item.desc}
                  </Typography>
                </DirectionAwareCard>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default DetailsCards;
