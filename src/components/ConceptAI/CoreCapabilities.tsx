import React, { useState } from "react";
import { Grid, Box, Typography, useTheme, Fade, Slide } from "@mui/material";
import { useInView } from "../../hooks/useInView";

type CapabilitiesData = {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
};

const CoreCapabilities = ({ data }: { data: CapabilitiesData[] }) => {
  const theme = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(0);

  // split data
  const leftData = data.slice(0, 3);
  const rightData = data.slice(3, 6);

  // hook instances for animations
  const { ref: leftRef, inView: leftInView } = useInView();
  const { ref: middleRef, inView: middleInView } = useInView();
  const { ref: rightRef, inView: rightInView } = useInView();

  return (
    <Grid
      container
      spacing={0}
      sx={{
        height: { xs: "auto", md: "90vh" },
        width: "100%",
        px: { xs: 2, sm: 6, md: 12, lg: 24 },
        py: 10,
        pt: { xs: 4, md: 7 },
        pb: { xs: 6, md: 25 },
        backgroundColor: "white",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          mb: { xs: 4, md: 8 },
          fontWeight: "600",
          textAlign: "center",
          width: "100%",
          textShadow: `0 0 30px ${theme.palette.primary.focus}`,
          letterSpacing: 2,
          fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" },
        }}
      >
        Core Capabilities
      </Typography>

      <Box
        sx={{
          height: { xs: "100%", lg: "550px" },
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "stretch",
          boxShadow: `0px 0px 50px rgba(0, 0, 0, 0.2)`,
        }}
      >
        {/* Left Column */}
        <Grid
          item
          xs={12}
          md={3}
          container
          direction="column"
          spacing={0}
          sx={{
            height: { xs: "auto", md: "100%" },
            width: { xs: "100%", md: "25%" },
          }}
          ref={leftRef}
          component="div"
          {...({} as any)}
        >
          {leftData.map((item, index) => (
            <Fade in={leftInView} timeout={1000} key={index}>
              <Grid
                item
                xs
                sx={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottom: {
                    xs: "none",
                    md: index < leftData.length - 1 ? "2px solid grey" : "",
                  },
                  "&:hover .innerContent": {
                    transform: "scale(1.1)",
                    "& .MuiTypography-root": {
                      fontWeight: 700,
                      textShadow: "0 0 8px rgba(255,255,255,0.8)",
                    },
                  },
                }}
                onMouseEnter={() => setSelectedIndex(index)}
                component="div"
                {...({} as any)}
              >
                <Box
                  sx={{
                    bgcolor:
                      selectedIndex === index
                        ? "primary.focus"
                        : "primary.hero",
                    color:
                      selectedIndex === index
                        ? "primary.hero"
                        : "primary.focus",
                    width: "100%",
                    height: { xs: "120px", md: "100%" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                    cursor: "pointer",
                    position: "relative",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Box
                    className="innerContent"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    {item.icon}
                    <Slide in={leftInView} direction="up" timeout={800}>
                      <Typography
                        variant="h6"
                        sx={{
                          mt: 1,
                          maxWidth: 200,
                          letterSpacing: 1.5,
                          textAlign: "center",
                          fontSize: { xs: "0.9rem", md: "1.1rem" },
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Slide>
                  </Box>
                  {selectedIndex === index && (
                    <Box
                      sx={{
                        position: "absolute",
                        right: { xs: "50%", md: -10 },
                        top: { xs: "100%", md: "50%" },
                        transform: {
                          xs: "translate(50%, 0)",
                          md: "translateY(-50%)",
                        },
                        width: 0,
                        height: 0,
                        borderLeft: {
                          xs: "7px solid transparent",
                          md: "10px solid white",
                        },
                        borderRight: {
                          xs: "7px solid transparent",
                          md: "none",
                        },
                        borderTop: {
                          xs: "10px solid white",
                          md: "7px solid transparent",
                        },
                        borderBottom: "7px solid transparent",
                      }}
                    />
                  )}
                </Box>
              </Grid>
            </Fade>
          ))}
        </Grid>

        {/* Middle Column */}
        <Grid
          item
          xs={12}
          md={6}
          ref={middleRef}
          sx={{
            height: { xs: "auto", md: "100%" },
            width: { xs: "88%", sm: "93%", md: "70%" },
            transition: "all 0.3s ease",
            zIndex: 0,
            boxShadow: `0px 0px 50px rgba(0, 0, 0, 0.2)`,
          }}
          component="div"
          {...({} as any)}
        >
          <Box
            sx={{
              bgcolor: "primary.main",
              color: theme.palette.primary.contrastText,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              position: "relative",
              p: { xs: 3, md: 0 },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                position: { xs: "static", md: "absolute" },
                top: { md: 90 },
                left: { md: -70 },
                transform: { xs: "none", md: "rotate(-90deg)" },
                letterSpacing: 2,
                color: theme.palette.primary.contrastText,
                textShadow: `0 0 30px ${theme.palette.primary.focus}`,
                fontWeight: 500,
                mb: { xs: 2, md: 0 },
              }}
            >
              SPIRITUAL DATA
            </Typography>

            <Fade in key={selectedIndex} timeout={1000}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flex: 1,
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Fade in={middleInView} timeout={1000}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: "bold",
                        color: theme.palette.primary.contrastText,
                        mb: 2,
                        pl: { xs: 0, md: 8 },
                        lineHeight: 1.2,
                        letterSpacing: 1.5,
                        textAlign: { xs: "center", md: "left" },
                        fontSize: {
                          xs: "1.5rem",
                          sm: "2rem",
                          md: "2.5rem",
                          lg: "3rem",
                        },
                      }}
                    >
                      {data[selectedIndex]?.title}
                    </Typography>
                  </Fade>
                  <Fade in={middleInView} timeout={1200}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: theme.palette.primary.contrastText,
                        pl: { xs: 0, md: 2.5 },
                        letterSpacing: 1.5,
                        mt: { xs: 2, md: 8 },
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        textAlign: { xs: "center", md: "left" },
                        lineHeight: 1.6,

                        overflowY: "auto",
                        maxHeight: {
                          xs: "120px",
                          md: "350px",
                          lg: "500px",
                        },
                        pr: 2,

                        // ✅ HOVER PE SCROLLBAR SHOW
                        scrollbarWidth: "thin",
                        scrollbarColor: "transparent transparent",
                        "&::-webkit-scrollbar": {
                          width: "0px",
                          backgroundColor: "transparent",
                        },
                        "&::-webkit-scrollbar-thumb": {
                          backgroundColor: "transparent",
                          borderRadius: "3px",
                        },
                        "&:hover::-webkit-scrollbar-thumb": {
                          backgroundColor: "transparent",
                        },
                        "&:hover": {
                          scrollbarColor: "transparent",
                        },
                      }}
                    >
                      {data[selectedIndex]?.description}
                    </Typography>
                  </Fade>
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: { xs: 3, md: 0 },
                  }}
                >
                  <Box
                    component="img"
                    src={data[selectedIndex]?.image}
                    alt={data[selectedIndex]?.title}
                    sx={{
                      maxWidth: { xs: "45%", md: "80%" },
                      height: "auto",
                      display: "block",
                    }}
                  />
                </Box>
              </Box>
            </Fade>
          </Box>
        </Grid>

        {/* Right Column */}
        <Grid
          item
          xs={12}
          md={3}
          container
          direction="column"
          spacing={0}
          ref={rightRef}
          sx={{
            height: { xs: "auto", md: "100%" },
            width: { xs: "100%", md: "25%" },
          }}
          component="div"
          {...({} as any)}
        >
          {rightData.map((item, index) => (
            <Fade in={rightInView} timeout={1000} key={index}>
              <Grid
                item
                xs
                sx={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottom: {
                    xs: "none",
                    md: index < rightData.length - 1 ? "2px solid grey" : "",
                  },
                  "&:hover .innerContent": {
                    transform: "scale(1.1)",
                    "& .MuiTypography-root": {
                      fontWeight: 700,
                      textShadow: "0 0 8px rgba(255,255,255,0.8)",
                    },
                  },
                }}
                onMouseEnter={() => setSelectedIndex(index + leftData.length)}
                component="div"
                {...({} as any)}
              >
                <Box
                  sx={{
                    bgcolor:
                      selectedIndex === index + leftData.length
                        ? "primary.focus"
                        : "primary.hero",
                    color:
                      selectedIndex === index + leftData.length
                        ? "primary.hero"
                        : "primary.focus",
                    width: "100%",
                    height: { xs: "120px", md: "100%" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                    cursor: "pointer",
                    position: "relative",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Box
                    className="innerContent"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    {item.icon}
                    <Slide in={rightInView} direction="up" timeout={800}>
                      <Typography
                        variant="h6"
                        sx={{
                          mt: 1,
                          maxWidth: 200,
                          letterSpacing: 1.5,
                          textAlign: "center",
                          fontSize: { xs: "0.9rem", md: "1.1rem" },
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Slide>
                  </Box>
                  {selectedIndex === index + leftData.length && (
                    <Box
                      sx={{
                        position: "absolute",
                        left: { xs: "50%", md: -10 },
                        top: { xs: "0%", md: "50%" },
                        transform: {
                          xs: "translate(-50%, -100%)",
                          md: "translateY(-50%)",
                        },
                        width: 0,
                        height: 0,
                        borderLeft: { xs: "7px solid transparent", md: "none" },
                        borderRight: {
                          xs: "7px solid transparent",
                          md: "10px solid white",
                        },
                        borderTop: {
                          xs: "10px solid white",
                          md: "7px solid transparent",
                        },
                        borderBottom: "7px solid transparent",
                      }}
                    />
                  )}
                </Box>
              </Grid>
            </Fade>
          ))}
        </Grid>
      </Box>
    </Grid>
  );
};

export default CoreCapabilities;
