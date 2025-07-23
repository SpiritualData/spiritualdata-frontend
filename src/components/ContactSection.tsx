import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  IconButton,
  useTheme,
  Container,
  Fade,
  Slide,
} from "@mui/material";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { useInView } from "@/hooks/useInView";
import { useNavigate } from "react-router-dom";
import contactImage1 from "../assets/images/Contact/contactbg.gif";
import contactImage2 from "../assets/images/Contact/contact1-al.png";
import contactImage3 from "../assets/images/Contact/contact2-al.png";

const socialIcons = [
  { icon: <Facebook />, link: "#" },
  { icon: <Instagram />, link: "#" },
  { icon: <LinkedIn />, link: "#" },
  { icon: <Twitter />, link: "#" },
];

const ContactSection = () => {
  const theme = useTheme();
  const { ref, inView } = useInView({ threshold: 0.3 });
  const Navigate = useNavigate();

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        position: "relative",
        backgroundImage: `url(${contactImage1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: { xs: 8, md: 12 },
        px: { xs: 6, md: 20 },
        color: theme.palette.text.primary,
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 1,
        },
      }}
    >
      {/* Centered Text on Top */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 2,
          width: "100%",
          px: 2,
        }}
      >
        <Fade in={inView} timeout={1000}>
          <Slide in={inView} direction="up" timeout={1000}>
            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  color: theme.palette.primary.main,
                  scale: 0.9,
                  fontWeight: 600,
                  letterSpacing: 3,
                }}
              >
                DISCOVER SPIRITUAL DATA
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  fontWeight: 600,
                  scale: 0.85,
                  mb: 2,
                  lineHeight: 1.2,
                  color: theme.palette.primary.main,
                  letterSpacing: 3,
                }}
              >
                POWER A NEW ERA OF
                <br />
                SPIRITUAL TRUTH
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  maxWidth: 500,
                  letterSpacing: 1,
                  mx: "auto",
                  mb: 4,
                  color: theme.palette.primary.main,
                }}
              >
                We're rethinking spiritual truth using open data, deep research,
                and unbiased AI - no dogma, just clear, evidence backed
                insights.
              </Typography>

              <Button
                variant="contained"
                onClick={() => Navigate("/contact")}
                sx={{
                  backgroundColor: theme.palette.primary.focus,
                  color: "#1F2540",
                  px: 3,
                  py: 1,
                  fontWeight: 600,
                  borderRadius: 8,
                  textTransform: "none",
                  fontSize: "0.9rem",
                  whiteSpace: "nowrap",
                  letterSpacing: "0.09rem",
                  mb: { xs: 3, md: 4 },
                  transition: "all 0.4s ease-in-out",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.hover,
                    color: "#fff",
                  },
                }}
              >
                CONTACT US
              </Button>

              {/* Social Icons Row */}
              <Box
                mt={5}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection={"column"}
                gap={1}
              >
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 600,
                      letterSpacing: 3,
                      color: "white",
                    }}
                  >
                    Follow Us:
                  </Typography>
                </Box>
                <Box>
                  {socialIcons.map((item, index) => (
                    <IconButton
                      key={index}
                      href={item.link}
                      sx={{
                        backgroundColor: theme.palette.primary.hover,
                        color: theme.palette.primary.focus,
                        borderRadius: 2,
                        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                        transition: "all 0.3s ease-in-out",
                        m: 0.5,

                        "&:hover": {
                          backgroundColor: theme.palette.primary.focus,
                          color: theme.palette.primary.hover,
                        },
                      }}
                    >
                      {item.icon}
                    </IconButton>
                  ))}
                </Box>
              </Box>
            </Box>
          </Slide>
        </Fade>
      </Box>

      {/* Behind Content: Side Images */}
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 0 }}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
          wrap="nowrap"
          sx={{
            [theme.breakpoints.down("md")]: {
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            },
          }}
        >
          {/* Left Image */}
          <Grid
            item
            xs={12}
            md={4}
            lg={3}
            flexShrink={0}
            component="div"
            {...({} as any)}
          >
            <Box
              component="img"
              src={contactImage2}
              alt="Left"
              sx={{
                width: "100%",
                maxHeight: 500,
                borderRadius: 4,
                backgroundColor: "transparent",
                filter: "brightness(1.25)",
                // boxShadow: `0 4px 20px ${theme.palette.cardshadow.main}`,
              }}
            />
          </Grid>

          {/* Empty grid space to center text absolutely */}
          <Grid item xs={12} md={6} component="div" {...({} as any)} />

          {/* Right Image */}
          <Grid
            item
            xs={12}
            md={4}
            lg={3}
            flexShrink={0}
            component="div"
            {...({} as any)}
          >
            <Box
              component="img"
              src={contactImage3}
              alt="Right"
              sx={{
                width: "100%",
                maxHeight: 500,
                borderRadius: 4,
                filter: "brightness(1.25)",
                // boxShadow: `0 4px 10px ${theme.palette.cardshadow.main}`,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
