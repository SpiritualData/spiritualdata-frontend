import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  IconButton,
  Button,
  useTheme,
  Link,
} from "@mui/material";
import Grid from "@mui/material/Grid";

import {
  Instagram,
  LinkedIn,
  Facebook,
  X as Twitter,
  YouTube,
  Email,
} from "@mui/icons-material";
import footerImage from "../../assets/images/footer/footer-logo.png";

// Discord Icon Component
const DiscordIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="20"
    height="20"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

// TikTok Icon Component
const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="20"
    height="20"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const Footer = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // === LINKS DATA ===

  // Explore links
  const exploreLinks = [
    ["Home", "/"],
    ["About Us", "/about-us"],
    ["Quest", "/products/quest"],
    ["Research", "/research"],
    ["Initiatives", "/initiatives"],
    ["Products", "/products"],
  ];

  // Get Involved links
  const involvedLinks = [
    ["Careers", "/careers"],
    ["Donate", "/donate"],
    // ["Partnerships", "/partnerships"],
    ["Community (Discord)", "https://discord.com/invite/thQNvPGcJF"],
    ["Newsletter", "https://spiritualdata.beehiiv.com/"],
    ["Contact Us", "/contact"],
  ];

  // Social Links (for Column 4)
  const socialLinks = [
    {
      label: "Discord",
      icon: <DiscordIcon />,
      url: "https://discord.com/invite/thQNvPGcJF",
    },
    {
      label: "Twitter",
      icon: <Twitter />,
      url: "https://twitter.com/spiritual_data",
    },
    {
      label: "Instagram",
      icon: <Instagram />,
      url: "https://www.instagram.com/spiritualdata/",
    },
    {
      label: "LinkedIn",
      icon: <LinkedIn />,
      url: "https://www.linkedin.com/company/spiritual-data",
    },
    {
      label: "YouTube",
      icon: <YouTube />,
      url: "https://www.youtube.com/@spiritualdata",
    },
    {
      label: "TikTok",
      icon: <TikTokIcon />,
      url: "https://www.tiktok.com/@spiritual_data",
    },
    {
      label: "Facebook",
      icon: <Facebook />,
      url: "https://www.facebook.com/profile.php?id=100088266313464",
    },
  ];

  // Mini Social Row (for Column 1 under logo)

  return (
    <>
      <Box
        sx={{
          bgcolor: "primary.hover",
          color: "text.primary",
          px: { xs: 3, sm: 6, md: 10, lg: 28 },
          py: { xs: 5, sm: 7, md: 9 },
        }}
      >
        {/* Top CTA */}
        <Grid container spacing={4} justifyContent="space-between">
          <Grid
            item
            xs={12}
            md={6}
            maxWidth={600}
            component="div"
            {...({} as any)}
          >
            <Typography
              fontWeight={600}
              mb={2}
              sx={{
                fontSize: {
                  xs: "1.75rem",
                  sm: "2.25rem",
                  md: "2.75rem",
                  color: theme.palette.primary.main,
                },
              }}
            >
              Start Your AI Journey With Our Experts
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate("/contact")}
              sx={{
                backgroundColor: "primary.focus",
                color: "primary.hover",
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: "999px",
                px: 3,
                letterSpacing: 1,
                "&:hover": {
                  backgroundColor: "#F2F3EB",
                  color: "primary.hover",
                },
              }}
            >
              Get in Touch
            </Button>
          </Grid>

          {/* REPLACED TextField with iframe inside styled Box */}
          <Grid
            item
            xs={12}
            md={6}
            textAlign={{ xs: "left", md: "right" }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              flexGrow: 1,
              ml: { xs: 0, md: 20 },
            }}
            component="div"
            {...({} as any)}
          >
            <Box
              sx={{
                bgcolor: "transparent",
                borderRadius: "999px",
                maxWidth: 400,
                p: 0,
                width: "100%",
                alignSelf: { md: "flex-end" },
                overflow: "hidden",
                border: `1px solid ${theme.palette.text.primary}`,
                "&:hover": {
                  borderColor: "primary.focus",
                },
              }}
            >
              <iframe
                title="Newsletter"
                src="https://embeds.beehiiv.com/51f0c52b-4966-4cde-8f8d-e761d1b07095?slim=true"
                data-test-id="beehiiv-embed"
                height="52"
                width="100%"
                style={{
                  border: "none",
                  display: "block",
                  overflow: "hidden",
                }}
              ></iframe>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Main Section */}
        {/* Footer Main Section */}
        <Box
          sx={{
            borderTop: `0.5px solid ${theme.palette.primary.dark}`,
            mt: 6,
            pt: { xs: 4, sm: 6 },
          }}
        >
          <Grid
            container
            // spacing={{ xs: 3, sm: 4, md: 5 }}
            justifyContent="space-between"
            alignItems="stretch"
          >
            {/* COLUMN 1 — Brand & Purpose (White Text) */}
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                height: "100%",
              }}
              component="div"
              {...({} as any)}
            >
              <Box
                display="flex"
                alignItems="center"
                mb={1}
                sx={{ cursor: "pointer", ml: -3 }}
                onClick={() => navigate("/")}
              >
                <img
                  src={footerImage}
                  alt="Spiritual Data"
                  style={{
                    height: 65,
                    objectFit: "contain",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: { xs: 14, sm: 15 },
                  color: "#fff",
                  mb: 2,
                  maxWidth: 280,
                  lineHeight: 1.6,
                }}
              >
                Building open tools and research for the future of human
                understanding.
              </Typography>

              <Typography
                fontWeight={700}
                mb={2}
                sx={{ fontSize: { xs: 18, sm: 20 }, color: "primary.main" }}
              >
                Contact Us
              </Typography>

              {/* <Typography
                sx={{ fontSize: { xs: 14, sm: 15 }, color: "#fff" }}
                mb={0.5}
              >
                📧 <b>support@spiritualdata.org</b>
              </Typography> */}

              <Typography
                sx={{ fontSize: { xs: 14, sm: 15 }, color: "#fff" }}
                mb={0.5}
              >
                📧{" "}
                <Link
                  href="mailto:support@spiritualdata.org"
                  underline="hover"
                  sx={{
                    color: "#fff",
                    fontWeight: "bold",
                    "&:hover": { color: "#E0E0E0" },
                  }}
                >
                  support@spiritualdata.org
                </Link>
              </Typography>
              <Typography sx={{ fontSize: { xs: 14, sm: 15 }, color: "#fff" }}>
                📍 Global Nonprofit Initiative
              </Typography>
            </Grid>

            {/* COLUMN 2 — Explore */}
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                paddingTop: { xs: "20px", sm: "0" },
              }}
              component="div"
              {...({} as any)}
            >
              <Typography
                fontWeight={700}
                mb={2}
                sx={{ fontSize: { xs: 18, sm: 20 }, color: "primary.main" }}
              >
                Explore
              </Typography>
              <Box component="nav" aria-label="Explore links">
                {exploreLinks.map(([label, path]) => (
                  <Typography
                    key={label}
                    onClick={() =>
                      path.startsWith("http")
                        ? window.open(path, "_blank")
                        : navigate(path)
                    }
                    sx={{
                      cursor: "pointer",
                      mb: 1,
                      fontSize: { xs: 14, sm: 15 },
                      color: "primary.main",
                      "&:hover": { color: "primary.focus" },
                    }}
                  >
                    {label}
                  </Typography>
                ))}
              </Box>
            </Grid>

            {/* COLUMN 3 — Get Involved */}
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                paddingTop: { xs: "20px", sm: "0" },
              }}
              component="div"
              {...({} as any)}
            >
              <Typography
                fontWeight={700}
                mb={2}
                sx={{ fontSize: { xs: 18, sm: 20 }, color: "primary.main" }}
              >
                Get Involved
              </Typography>
              <Box component="nav" aria-label="Get involved links">
                {involvedLinks.map(([label, path]) => (
                  <Typography
                    key={label}
                    onClick={() =>
                      path.startsWith("http")
                        ? window.open(path, "_blank")
                        : navigate(path)
                    }
                    sx={{
                      cursor: "pointer",
                      mb: 1,
                      fontSize: { xs: 14, sm: 15 },
                      color: "primary.main",
                      "&:hover": { color: "primary.focus" },
                    }}
                  >
                    {label}
                  </Typography>
                ))}
              </Box>
            </Grid>

            {/* COLUMN 4 — Follow Us (two-column layout, same theme colors) */}
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                paddingTop: { xs: "20px", sm: "0" },
              }}
              component="div"
              {...({} as any)}
            >
              <Typography
                fontWeight={700}
                mb={2}
                sx={{
                  fontSize: { xs: 18, sm: 20 },
                  color: "primary.main",
                }}
              >
                Follow Us
              </Typography>

              <Grid container spacing={4}>
                {/* LEFT COLUMN */}
                <Grid item xs={6} component="div" {...({} as any)}>
                  {[
                    {
                      label: "Discord",
                      icon: <DiscordIcon />,
                      url: "https://discord.com/invite/thQNvPGcJF",
                    },
                    {
                      label: "Instagram",
                      icon: <Instagram />,
                      url: "https://www.instagram.com/spiritualdata/",
                    },
                    {
                      label: "YouTube",
                      icon: <YouTube />,
                      url: "https://www.youtube.com/@spiritualdata",
                    },
                    {
                      label: "Facebook",
                      icon: <Facebook />,
                      url: "https://www.facebook.com/profile.php?id=100088266313464",
                    },
                  ].map(({ label, icon, url }) => (
                    <Box
                      key={label}
                      onClick={() => window.open(url, "_blank")}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        cursor: "pointer",
                        py: 0.5,
                        "&:hover .socialLabel": { color: "primary.focus" },
                      }}
                    >
                      <IconButton sx={{ color: "primary.focus", p: 0 }}>
                        {React.cloneElement(icon, { fontSize: "small" })}
                      </IconButton>
                      <Typography
                        className="socialLabel"
                        sx={{
                          fontSize: { xs: 13, sm: 14 },
                          color: "primary.main",
                        }}
                      >
                        {label}
                      </Typography>
                    </Box>
                  ))}
                </Grid>

                {/* RIGHT COLUMN */}
                <Grid item xs={6} component="div" {...({} as any)}>
                  {[
                    {
                      label: "Twitter",
                      icon: <Twitter />,
                      url: "https://twitter.com/spiritual_data",
                    },
                    {
                      label: "LinkedIn",
                      icon: <LinkedIn />,
                      url: "https://www.linkedin.com/company/spiritual-data",
                    },
                    {
                      label: "TikTok",
                      icon: <TikTokIcon />,
                      url: "https://www.tiktok.com/@spiritual_data",
                    },
                  ].map(({ label, icon, url }) => (
                    <Box
                      key={label}
                      onClick={() => window.open(url, "_blank")}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        cursor: "pointer",
                        py: 0.5,
                        "&:hover .socialLabel": { color: "primary.focus" },
                      }}
                    >
                      <IconButton sx={{ color: "primary.focus", p: 0 }}>
                        {React.cloneElement(icon, { fontSize: "small" })}
                      </IconButton>
                      <Typography
                        className="socialLabel"
                        sx={{
                          fontSize: { xs: 13, sm: 14 },
                          color: "primary.main",
                        }}
                      >
                        {label}
                      </Typography>
                    </Box>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        {/* Bottom Footer */}
        <Box
          mt={6}
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          textAlign={{ xs: "left", sm: "center" }}
          gap={{ xs: 2, sm: 0 }}
          borderTop={`0.5px solid ${theme.palette.primary.dark}`}
          pt={3}
        >
          <Box>
            {[
              ["Privacy Policy", "/privacy"],
              ["Term of Service", "/terms"],
              ["Cookie Policy", "/cookies"],
            ].map(([label, path]) => (
              <Button
                key={label}
                onClick={() => navigate(path)}
                sx={{
                  color: "primary.main",
                  textTransform: "none",
                  minWidth: "unset",
                  mr: 2,
                  p: 0,
                  fontSize: { xs: 13, sm: 14 },
                  "&:hover": { color: "primary.focus" },
                }}
              >
                {label}
              </Button>
            ))}
          </Box>
          <Typography
            variant="body1"
            mt={{ xs: 2, sm: 0 }}
            sx={{ fontSize: { xs: 13, sm: 14 }, color: "primary.main" }}
          >
            © Copyright 2025 Spiritual Data. All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
