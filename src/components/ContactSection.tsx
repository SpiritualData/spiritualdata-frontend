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
import { Facebook, Instagram, LinkedIn, Twitter, Email } from "@mui/icons-material";
import { useInView } from "../hooks/useInView";
import { useNavigate } from "react-router-dom";
import contactImage1 from "../assets/images/contact/contactbg.gif";
import contactImage2 from "../assets/images/contact/contact1-al.webp";
import contactImage3 from "../assets/images/contact/contact2-al.webp";

// Discord Icon Component
const DiscordIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="24"
    height="24"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const socialIcons = [
  { icon: <DiscordIcon />, link: "https://discord.com/invite/thQNvPGcJF", isCustom: true },
  { icon: <Email />, link: "https://spiritualdata.beehiiv.com/", isCustom: false },
  { icon: <Facebook />, link: "#", isCustom: false },
  { icon: <Instagram />, link: "#", isCustom: false },
  { icon: <LinkedIn />, link: "#", isCustom: false },
  { icon: <Twitter />, link: "#", isCustom: false },
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
                      onClick={() => window.open(item.link, "_blank")}
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
                      {item.isCustom ? item.icon : React.cloneElement(item.icon)}
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
