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
import { useInView } from "../hooks/useInView";
import { useNavigate } from "react-router-dom";
import contactImage1 from "../assets/images/contact/contactbg.gif";
import contactImage2 from "../assets/images/contact/contact1-al.webp";
import contactImage3 from "../assets/images/contact/contact2-al.webp";

const socialIcons = [
  { icon: <Facebook />, link: "#" },
  { icon: <Instagram />, link: "#" },
  { icon: <LinkedIn />, link: "#" },
  { icon: <Twitter />, link: "#" },
];

interface contactSectionProps {
  isContactPage?: boolean;
  onClickFunc?: () => void;
}

const ContactSection = ({
  isContactPage,
  onClickFunc,
}: contactSectionProps) => {
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
        px: { xs: 4, sm: 6, md: 20 },
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
      {/* Centered Text */}
      <Box
        sx={{
          position: { xs: "relative", md: "absolute" },
          top: { md: "50%" },
          left: { md: "50%" },
          transform: {
            md: "translate(-50%, -50%)",
            xs: "none",
          },
          textAlign: "center",
          zIndex: 2,
          width: "100%",
          px: 2,
          py: { xs: 6, md: 0 },
        }}
      >
        <Fade in={inView} timeout={1000}>
          <Slide in={inView} direction="up" timeout={1000}>
            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                  letterSpacing: 3,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                }}
              >
                DISCOVER SPIRITUAL DATA
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  lineHeight: 1.2,
                  color: theme.palette.primary.main,
                  letterSpacing: 4,
                  fontSize: {
                    xs: "1.8rem",
                    sm: "2.2rem",
                    md: "3rem",
                    lg: "3.5rem",
                  },
                }}
              >
                POWER A NEW ERA OF
                <br />
                SPIRITUAL TRUTH
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  maxWidth: 520,
                  letterSpacing: 1,
                  mx: "auto",
                  mb: 4,
                  color: theme.palette.primary.main,
                  fontSize: {
                    xs: "0.9rem",
                    sm: "1rem",
                    md: "1.1rem",
                  },
                }}
              >
                We're rethinking spiritual truth using open data, deep research,
                and unbiased AI — no dogma, just clear, evidence-backed
                insights.
              </Typography>

              <Button
                onClick={() =>
                  isContactPage && onClickFunc
                    ? onClickFunc()
                    : Navigate("/contact")
                }
                variant="contained"
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

              {/* Social Icons */}
              <Box
                mt={5}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                gap={1}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 600,
                    letterSpacing: 3,
                    color: "white",
                    mb: 1,
                  }}
                >
                  Follow Us:
                </Typography>

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

      {/* Side Images */}
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 0,
          display: { sm: "none", md: "block" },
          // Custom overrides for specific widths
          "@media (max-width: 560px)": {
            display: "none", // hide around 553px
          },
          "@media (min-width: 1180px) and (max-width: 1120px)": {
            display: "none", // hide around 1105px
          },
        }}
      >
        <Grid
          container
          spacing={8}
          alignItems="center"
          justifyContent="center"
          sx={{
            flexDirection: { xs: "column", md: "row" },
            textAlign: { xs: "center", md: "inherit" },
            justifyContent: { md: "space-between" },
          }}
        >
          {/* Left Image */}
          <Grid
            item
            xs={12}
            md={4}
            lg={3}
            width={"30%"}
            component="div"
            {...({} as any)}
          >
            <Box
              component="img"
              src={contactImage2}
              alt="Left"
              sx={{
                width: { xs: "60%", sm: "50%", md: "100%" },
                maxHeight: 500,
                borderRadius: 4,
                filter: "brightness(1.25)",
                mx: { xs: "auto", md: 0 },
              }}
            />
          </Grid>

          {/* Right Image */}
          <Grid
            item
            xs={12}
            md={4}
            lg={3}
            width={"30%"}
            component="div"
            {...({} as any)}
          >
            <Box
              component="img"
              src={contactImage3}
              alt="Right"
              sx={{
                width: { xs: "60%", sm: "50%", md: "100%" },
                maxHeight: 500,
                borderRadius: 4,
                filter: "brightness(1.25)",
                mx: { xs: "auto", md: 0 },
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
