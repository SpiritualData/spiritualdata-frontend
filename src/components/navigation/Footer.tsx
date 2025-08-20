import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  Button,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import {
  Instagram,
  LinkedIn,
  Facebook,
  GitHub,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import DiscordIcon from "@mui/icons-material/ChatBubbleOutline";
import footerImage from "../../assets/images/Footer/footerLogo.webp";

const Footer = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const quickLinks = [
    ["Home", "/"],
    ["About", "/about"],
    ["Contact", "/contact"],
    ["Careers", "/careers"],
    ["Donate", "/donate"],
    ["Contribute", "/contribute"],
    ["Newsletter", "/newsletter"],
    ["Initiatives", "/initiatives"],
    ["Product", "/products"],
    ["Research", "/research"],
  ];

  const firstHalf = quickLinks.slice(0, Math.ceil(quickLinks.length / 2));
  const secondHalf = quickLinks.slice(Math.ceil(quickLinks.length / 2));

  return (
    <>
      <Box
        sx={{
          bgcolor: "primary.hero",
          color: "text.primary",
          px: { xs: 4, sm: 10, md: 25 },
          py: { xs: 6, sm: 10 },
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
                color: "primary.hero",
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: "999px",
                px: 3,
                letterSpacing: 1,
                "&:hover": {
                  backgroundColor: "primary.hover",
                  color: "primary.main",
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
        <Box
          sx={{
            borderTop: `0.5px solid ${theme.palette.primary.dark}`,
            mt: 6,
            pt: 6,
          }}
        >
          <Grid container justifyContent="space-between">
            {/* Logo */}
            <Grid item xs={12} sm={6} md={3} component="div" {...({} as any)}>
              <Box display="flex" alignItems="center" mb={1}>
                <img
                  src={footerImage}
                  alt="Thinkio Logo"
                  style={{ height: 80, marginRight: 8 }}
                />
              </Box>
            </Grid>

            {/* Follow Us */}
            <Grid item xs={12} sm={6} md={3} component="div" {...({} as any)}>
              <Typography
                fontWeight={600}
                mb={2}
                sx={{
                  fontSize: {
                    xs: 20,
                    sm: 22,
                    md: 25,
                    color: theme.palette.primary.main,
                  },
                }}
              >
                Follow Us
              </Typography>
              {[
                { label: "Discord", icon: <DiscordIcon />, url: "#" },
                { label: "Instagram", icon: <Instagram />, url: "#" },
                { label: "LinkedIn", icon: <LinkedIn />, url: "#" },
                { label: "GitHub", icon: <GitHub />, url: "#" },
                { label: "Facebook", icon: <Facebook />, url: "#" },
              ].map(({ label, icon, url }) => (
                <Box
                  key={label}
                  display="flex"
                  alignItems="center"
                  sx={{ cursor: "pointer" }}
                  onClick={() => window.open(url, "_blank")}
                >
                  <IconButton
                    sx={{ color: "primary.focus", pl: 0, fontWeight: 300 }}
                  >
                    {React.cloneElement(icon, { fontSize: "small" })}
                  </IconButton>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "primary.main",
                      "&:hover": { color: "primary.focus" },
                      fontFamily: "'Inter', sans-serif",
                      fontSize: { xs: 14, sm: 16 },
                    }}
                  >
                    {label}
                  </Typography>
                </Box>
              ))}
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} sm={6} md={3} component="div" {...({} as any)}>
              <Typography
                fontWeight={600}
                mb={2}
                sx={{
                  fontSize: {
                    xs: 20,
                    sm: 22,
                    md: 25,
                    color: theme.palette.primary.main,
                  },
                }}
              >
                Quick Link
              </Typography>
              <Grid container spacing={0}>
                {[firstHalf, secondHalf].map((columnLinks, index) => (
                  <Grid
                    item
                    xs={6}
                    key={index}
                    component="div"
                    {...({} as any)}
                  >
                    {columnLinks.map(([label, path]) => (
                      <Typography
                        key={label}
                        variant="body1"
                        mb={2}
                        mr={3}
                        sx={{
                          cursor: "pointer",
                          "&:hover": { color: "primary.focus" },
                          transition: "color 0.2s",
                          color: "primary.main",
                          fontSize: { xs: 14, sm: 16 },
                        }}
                        onClick={() => navigate(path)}
                      >
                        {label}
                      </Typography>
                    ))}
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} sm={6} md={3} component="div" {...({} as any)}>
              <Typography
                fontWeight={600}
                mb={3}
                sx={{
                  fontSize: {
                    xs: 20,
                    sm: 22,
                    md: 25,
                    color: theme.palette.primary.main,
                  },
                }}
              >
                Contact Us
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14, sm: 16, md: 18 },
                  color: "primary.main",
                }}
                mb={1}
              >
                support@spiritualdata.org
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14, sm: 16, md: 18 },
                  color: "primary.main",
                }}
                mb={1}
              >
                +1 (234) 567-8910
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14, sm: 16, md: 18 },
                  color: "primary.main",
                }}
                mb={1}
              >
                456 SD Lane, Spiritual Square, USA 98765
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Bottom Footer */}
        <Box
          mt={6}
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
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
                  color: "text.secondary",
                  textTransform: "none",
                  minWidth: "unset",
                  mr: 2,
                  p: 0,
                  fontSize: { xs: 13, sm: 14 },
                }}
              >
                {label}
              </Button>
            ))}
          </Box>
          <Typography
            variant="body1"
            color="text.secondary"
            mt={{ xs: 2, sm: 0 }}
            sx={{ fontSize: { xs: 13, sm: 14 } }}
          >
            © Copyright 2025 Spiritual Data. All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
