import React from "react";
import {
  Box,
  Typography,
  Grid,
  Divider,
  Button,
  useTheme,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import faqImage from "../../assets/images/contact/oldcontactRequest.webp";
import { useNavigate } from "react-router-dom";
import { useInView } from "../../hooks/useInView";

const ctaSections = [
  {
    title:
      "Support our mission and help us grow. To contribute, please visit our Donate page.",
    button: "Donate",
    path: "/donate",
    type: "navigate",
  },
  {
    title:
      "Interested in joining our mission-driven team? Explore open roles and apply on our Careers page.",
    button: "Careers",
    path: "/careers",
    type: "navigate",
  },
  {
    title:
      "Have ideas for collaboration or partnership? Reach out via email at support@spiritualdata.org",
    button: "Copy Email",
    path: "support@spiritualdata.org",
    type: "copy",
  },
];

const ContactRequest = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { ref: cardRef, inView: cardInView } = useInView();
  const { ref: imageRef, inView: imageInView } = useInView();
  const [copiedEmail, setCopiedEmail] = React.useState(false);

  const handleButtonClick = async (section: typeof ctaSections[0]) => {
    if (section.type === "copy") {
      try {
        await navigator.clipboard.writeText(section.path);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } catch (err) {
        console.error("Failed to copy email:", err);
      }
    } else {
      navigate(section.path);
    }
  };

  return (
    <Box
      component="section"
      sx={{
        px: { xs: 2, sm: 4, md: 8, lg: 20, xl: 24 },
        py: { xs: 6, md: 10 },
        background: `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, transparent 100%)`,
      }}
    >
      <Grid
        container
        spacing={0}
        sx={{
          justifyContent: "space-around",
          flexDirection: {
            xs: "column-reverse",
            md: "row",
          },
        }}
      >
        {/* CTA Section */}
        <Grid item xs={12} md={6} component="div" {...({} as any)}>
          <Box
            ref={cardRef}
            sx={{
              background: "#fafaf5",
              borderRadius: 4,
              boxShadow: "0 1px 6px 0 #0001",
              px: { xs: 3, sm: 4, md: 6 },
              py: { xs: 5, md: 8 },
              display: "flex",
              flexDirection: "column",
              maxWidth: { xs: "100%", md: 540 },
              mx: { xs: "auto", md: 0 },
              opacity: cardInView ? 1 : 0,
              transform: cardInView ? "translateY(0)" : "translateY(40px)",
              transition: "all 0.8s ease",
            }}
          >
            <Typography
              sx={{
                textTransform: "uppercase",
                letterSpacing: 3,
                fontWeight: 600,
                fontSize: "1rem",
                color: theme.palette.text.secondary,
                mb: 2,
                [theme.breakpoints.down("sm")]: {
                  fontSize: "0.9rem",
                },
              }}
            >
              Get Involved
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontWeight: 600,
                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" },
                lineHeight: 1.17,
                color: theme.palette.text.primary,
                mb: 5,
                letterSpacing: 2,
              }}
            >
              Contact & Connect
            </Typography>

            {ctaSections.map((section, idx) => {
              const { ref, inView } = useInView();

              return (
                <React.Fragment key={section.button}>
                  <Box
                    ref={ref}
                    sx={{
                      display: "flex",
                      gap: 3,
                      alignItems: "flex-start",
                      py: 2,
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateX(0)" : "translateX(40px)",
                      transition: "all 0.6s ease",
                      flexDirection: {
                        xs: "column",
                        sm: "row",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        mt: { xs: 0, sm: "2px" },
                        bgcolor: theme.palette.primary.hero,
                        borderRadius: 2,
                        width: 40,
                        height: 40,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 1px 3px #0002",
                        flexShrink: 0,
                        mx: { xs: "auto", sm: 0 },
                      }}
                    >
                      <CheckCircleIcon
                        sx={{
                          color: theme.palette.primary.focus,
                          fontSize: 28,
                        }}
                      />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: {
                            xs: "1rem",
                            sm: "1.16rem",
                            md: "1.22rem",
                          },
                          color: theme.palette.text.primary,
                          textAlign: { xs: "center", sm: "left" },
                        }}
                      >
                        {section.title}
                      </Typography>
                      <Box
                        sx={{
                          mt: 1.5,
                          display: "flex",
                          justifyContent: {
                            xs: "center",
                            sm: "flex-start",
                          },
                        }}
                      >
                        <Button
                          onClick={() => handleButtonClick(section)}
                          sx={{
                            backgroundColor: theme.palette.primary.focus,
                            color: theme.palette.primary.hero,
                            borderRadius: 8,
                            mt: 2,
                            height: 48,
                            width: { xs: "100%", sm: 200 },
                            maxWidth: 260,
                            fontWeight: 700,
                            fontSize: "16px",
                            textTransform: "uppercase",
                            fontFamily: "Poppins, sans-serif",
                            letterSpacing: "0.5px",
                            transition: "all 0.3s ease",
                            boxShadow: "0 2px 8px #0001",
                            "&:hover": {
                              backgroundColor: theme.palette.primary.hero,
                              color: theme.palette.primary.focus,
                            },
                          }}
                        >
                          {section.type === "copy" && copiedEmail ? "Copied!" : section.button}
                        </Button>
                      </Box>
                    </Box>
                  </Box>

                  {idx < ctaSections.length - 1 && (
                    <Divider sx={{ my: 1.5, borderColor: "#ECEBE5" }} />
                  )}
                </React.Fragment>
              );
            })}
          </Box>
        </Grid>

        {/* Image Section */}
        <Grid
          item
          xs={12}
          md={6}
          component="div"
          {...({} as any)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            ref={imageRef}
            sx={{
              position: "relative",
              height: "100%",
              width: { xs: 250, sm: 400, md: 660 },
              overflow: "hidden",
              borderRadius: 3,
              opacity: imageInView ? 1 : 0,
              transform: imageInView ? "translateY(0)" : "translateY(40px)",
              transition: "all 0.8s ease",
            }}
          >
            <Box
              component="img"
              src={faqImage}
              alt="FAQ"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactRequest;
