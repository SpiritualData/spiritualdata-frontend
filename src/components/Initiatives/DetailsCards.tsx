import React from "react";
import { Box, Container, Typography, Paper, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import bgi1 from "../../assets/images/initiatives/initiatives1.webp";
import bgi2 from "../../assets/images/initiatives/initiatives2.webp";
import bgi3 from "../../assets/images/initiatives/initiatives3.webp";
import bgi4 from "../../assets/images/initiatives/initiatives4.webp";
import bgi5 from "../../assets/images/initiatives/initiatives5.webp";
import bgi6 from "../../assets/images/initiatives/initiatives6.webp";

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
    boxShadow: 5,
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

  const DirectionAwareCard = styled(Paper)<{ image?: string }>(
    ({ theme, image }) => ({
      position: "relative",
      overflow: "hidden",
      cursor: "pointer",
      border: `8px solid ${theme.palette.primary.main}`,
      backgroundImage: `url(${image})`,
      backgroundSize: "10rem",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      color: theme.palette.primary.hover,
      textShadow: `0 0 15px ${theme.palette.text.secondary}`,
      fontFamily: "Sansation, sans-serif",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",

      "&:hover": {
        transform: "scale(1.02)",
        boxShadow: `0 8px 20px rgba(0,0,0,0.15)`,
      },

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

      "& .card-content": {
        opacity: 0,
        transform: "translateY(20px)",
        transition: "opacity 0.35s ease, transform 0.35s ease",
        position: "relative",
        zIndex: 2,
      },

      "&.entering .card-content": {
        opacity: 1,
        transform: "translateY(0)",
      },

      "& > *": {
        position: "relative",
        zIndex: 1,
      },

      [theme.breakpoints.down("md")]: {
        backgroundImage: "none !important", // hide image completely
        "&::before": {
          transform: "translate(0,0) !important",
          background: `linear-gradient(to bottom, transparent 0%, ${theme.palette.primary.focus} 100%)`,
        },
        "& .card-content": {
          opacity: "1 !important",
          transform: "translateY(0) !important",
        },
      },
    })
  );

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

    target.classList.remove("entering", "exiting");
    target.style.setProperty("--overlay-transform", dirMap[enterDirection]);
    void target.offsetWidth; // force reflow
    target.classList.add("entering");
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLElement;
    const exitDirection = getDirection(e);

    target.style.setProperty("--overlay-transform", dirMap[exitDirection]);
    target.classList.remove("entering");
    target.classList.add("exiting");
  };
  const topBgImages = [bgi1, bgi2];
  const bottomBgImages = [bgi3, bgi4, bgi5, bgi6];

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
        <Box display="flex" flexDirection="column" gap={{ xs: 3, sm: 11 }}>
          {/* Top Row */}
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            gap={3}
            width="100%"
            height="auto"
          >
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
                  fontSize: { xs: "4rem", sm: "6rem" },
                  fontWeight: "bold",
                  letterSpacing: 8,
                  color: "primary.hero",
                  fontFamily: "Sansation, sans-serif",
                  position: "relative",
                  zIndex: 1,
                  textShadow: `-1px -1px 0 ${theme.palette.primary.focus}, 1px -1px 0 ${theme.palette.primary.focus}, -1px 1px 0 ${theme.palette.primary.focus}, 1px 1px 0 ${theme.palette.primary.focus}`,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {data[0]?.secHead}
              </Typography>
            </Box>

            {/* Right Column */}
            <Box
              flex={1}
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              gap={3}
            >
              {topBoxes.map((item, i) => (
                <Box flex={1} key={item.id}>
                  <DirectionAwareCard
                    image={topBgImages[i]}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    sx={{ ...boxStyle, minHeight: 125 }}
                  >
                    {/* Info Icon Badge */}
                    <Box
                      sx={{
                        position: "absolute !important",
                        top: "16px !important",
                        right: "16px !important",
                        zIndex: 3,
                        backgroundColor: theme.palette.primary.focus,
                        borderRadius: "50%",
                        width: 28,
                        height: 28,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: { xs: 1, md: 0.7 },
                        transition: "opacity 0.3s ease",
                        "&:hover": {
                          opacity: 1,
                        },
                      }}
                    >
                      <InfoOutlinedIcon
                        sx={{
                          fontSize: 18,
                          color: theme.palette.primary.hero,
                        }}
                      />
                    </Box>
                    <Box
                      className="card-content"
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                        height: "100%",
                        gap: 5,
                      }}
                    >
                      <Typography
                        variant="h5"
                        fontWeight={600}
                        textAlign="center"
                        maxWidth={150}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        textAlign="center"
                      >
                        {item.desc}
                      </Typography>
                    </Box>
                  </DirectionAwareCard>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Instructional Text */}
          <Box
            sx={{
              textAlign: "center",
              mt: { xs: -2, md: -8 },
              mb: { xs: 2, md: 3 },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontFamily: "Sansation, sans-serif",
                fontStyle: "italic",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                padding: 1.5,
                borderRadius: 2,
                display: "inline-block",
              }}
            >
              {/* Show different text for mobile vs desktop */}
              <Box component="span" sx={{ display: { xs: "inline", md: "none" } }}>
                Tap each card to learn more
              </Box>
              <Box component="span" sx={{ display: { xs: "none", md: "inline" } }}>
                Hover over each card to learn more
              </Box>
            </Typography>
          </Box>

          {/* Bottom Row */}
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "column", md: "row" }}
            flexWrap="wrap"
            gap={3}
            width="100%"
          >
            {bottomBoxes.map((item, i) => (
              <Box flex={{ xs: "1 1 100%", md: 1 }} key={item.id}>
                <DirectionAwareCard
                  image={bottomBgImages[i]}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  sx={{ ...boxStyle, minHeight: 125 }}
                >
                  {/* Info Icon Badge */}
                  <Box
                    sx={{
                      position: "absolute !important",
                      top: "16px !important",
                      right: "16px !important",
                      zIndex: 3,
                      backgroundColor: theme.palette.primary.focus,
                      borderRadius: "50%",
                      width: 28,
                      height: 28,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: { xs: 1, md: 0.7 },
                      transition: "opacity 0.3s ease",
                      "&:hover": {
                        opacity: 1,
                      },
                    }}
                  >
                    <InfoOutlinedIcon
                      sx={{
                        fontSize: 18,
                        color: theme.palette.primary.hero,
                      }}
                    />
                  </Box>
                  <Box
                    className="card-content"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: "100%",
                      gap: 5,
                    }}
                  >
                    <Typography
                      variant="h5"
                      fontWeight={600}
                      textAlign="center"
                      maxWidth={150}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      textAlign="center"
                    >
                      {item.desc}
                    </Typography>
                  </Box>
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
