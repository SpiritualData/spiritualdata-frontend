import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Typography, Box, styled, Divider, SvgIcon } from "@mui/material";
import Grid from "@mui/material/Grid";
import { LinkedIn, X, YouTube } from "@mui/icons-material";

import { links, menuItems } from "../../data/footerData";
import footerImage from "../../assets/footer.png";
import logo from "../../assets/logo_footer.png";

interface FooterLink {
  name: string;
  path: string;
}

interface MenuItem {
  title: string;
  links: FooterLink[];
}

const GradientOverlay = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "linear-gradient(120deg, rgba(0,0,0,0.7) 0%, rgba(30,30,60,0.5) 100%)",
  zIndex: 1,
  pointerEvents: "none",
});

const StyledGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.secondary,
  width: "100%",
  padding: "32px 8px 20px 8px",
  position: "relative",
  boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.10)",
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  overflow: "hidden",
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: "none",
  fontWeight: 500,
  fontSize: "1.08rem",
  transition: "color 0.2s, transform 0.2s",
  display: "inline-block",
  marginBottom: 4,
  "&:hover": {
    color: theme.palette.primary.hover,
    transform: "scale(1.07)",
  },
}));

const StyledIcon = styled("div")(({ theme }) => ({
  color: theme.palette.text.secondary,
  margin: "0 10px",
  cursor: "pointer",
  fontSize: 28,
  transition: "color 0.2s, transform 0.2s",
  display: "flex",
  alignItems: "center",
  "&:hover": {
    color: theme.palette.primary.hover,
    transform: "scale(1.18)",
  },
}));

const Footer: React.FC = () => {
  const location = useLocation();

  return (
    <Box sx={{ flexGrow: 1, position: "relative" }}>
      <StyledGrid
        container
        sx={{
          backgroundImage: `url(${footerImage})`,
          backgroundPosition: { xs: "top", sm: "right" },
          backgroundSize: { xs: "auto 40%", sm: "40% auto" },
          backgroundRepeat: "no-repeat",
          minHeight: 0,
        }}
      >
        <GradientOverlay />
        {/* Logo and Social Icons */}
        <Grid
          sx={{
            width: { xs: "100%", sm: "20%" },
            p: { xs: 0, sm: 1 },
            mb: { xs: 1, sm: 0 },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", sm: "flex-start" },
            zIndex: 2,
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            <img
              style={{
                width: "110px",
                height: "70px",
                filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.10))",
                borderRadius: 0,
              }}
              src={logo}
              alt="Logo"
            />
          </Link>

          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "10px", md: "12px" },
              lineHeight: "1.1rem",
              letterSpacing: "0.2px",
              mt: 1,
              fontWeight: 400,
              color: "rgba(255,255,255,0.75)",
              zIndex: 2,
            }}
          >
            Calculating truth with AI.
          </Typography>

          <Grid
            sx={{
              width: "100%",
              mt: 1,
              display: "flex",
              justifyContent: "flex-start",
              gap: 0.5,
              zIndex: 2,
            }}
          >
            <StyledIcon>
              <LinkedIn fontSize="inherit" />
            </StyledIcon>
            <StyledIcon>
              <X fontSize="inherit" />
            </StyledIcon>
            <StyledIcon>
              <YouTube fontSize="inherit" />
            </StyledIcon>
            <StyledIcon>
              <SvgIcon fontSize="inherit">
                <path d="M20.32 4.37a19.8 19.8 0 0 0-4.89-1.52.07.07 0 0 0-.08.04c-.2.38-.44.87-.6 1.25a18.27 18.27 0 0 0-5.5 0c-.16-.4-.4-.87-.6-1.25a.08.08 0 0 0-.09-.04 19.74 19.74 0 0 0-4.88 1.52.07.07 0 0 0-.04.03A20.26 20.26 0 0 0 .1 18.06a.08.08 0 0 0 .03.05 19.9 19.9 0 0 0 6 3.03.08.08 0 0 0 .08-.02c.46-.63.87-1.3 1.22-2a.08.08 0 0 0-.04-.1 13.1 13.1 0 0 1-1.87-.9.08.08 0 0 1 0-.12l.36-.3a.07.07 0 0 1 .08 0 14.2 14.2 0 0 0 12.06 0 .07.07 0 0 1 .08 0l.37.3a.08.08 0 0 1 0 .12 12.3 12.3 0 0 1-1.88.9.08.08 0 0 0-.04.1c.36.7.78 1.36 1.23 2a.08.08 0 0 0 .08.02c1.96-.6 3.95-1.52 6-3.03a.08.08 0 0 0 .04-.05c.5-5.18-.84-9.68-3.55-13.66a.06.06 0 0 0-.03-.03zM8.02 15.33c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.96 2.42-2.16 2.42zm7.97 0c-1.18 0-2.15-1.08-2.15-2.42 0-1.33.95-2.42 2.15-2.42 1.22 0 2.18 1.1 2.16 2.42 0 1.34-.94 2.42-2.16 2.42Z" />
              </SvgIcon>
            </StyledIcon>
          </Grid>
        </Grid>

        {/* Footer Menu Links */}
        {menuItems.map((item, index) => (
          <Grid
            key={index}
            sx={{
              width: { xs: "50%", sm: "20%" },
              p: 0.5,
              mt: { xs: 1, sm: 0 },
              overflow: "auto",
              borderLeft: { xs: "0", sm: "1px solid #3A3B3C" },
              pl: { xs: 0, sm: 1.5 },
              textAlign: { xs: "center", sm: "left" },
              zIndex: 2,
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontFamily: "Dosis,sans-serif",
                lineHeight: "1.5rem",
                display: "inline-block",
                transform: "scaleY(1.05)",
                letterSpacing: "0.5px",
                fontSize: { xs: "18px", sm: "15px", md: "15px" },
                color: "rgba(255,255,255,0.92)",
                mb: 0.2,
              }}
            >
              {item.title}
            </Typography>

            <Divider
              sx={{
                background: "linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%)",
                width: { xs: "30%", sm: "30px" },
                height: "2px",
                borderRadius: 10,
                mb: 0.7,
                mx: { xs: "35%", sm: 0 },
                boxShadow: "0 1px 4px 0 rgba(31, 38, 135, 0.08)",
              }}
            />

            {item.links.map((link, idx) => (
              <Box
                component="div"
                key={idx}
                sx={{
                  fontSize: { xs: "12px", sm: "10px", md: "12px" },
                  lineHeight: "1.2rem",
                  letterSpacing: "0.5px",
                  py: 0.2,
                }}
              >
                <StyledLink
                  to={link.path}
                  target={link.path?.includes("http") ? "_blank" : undefined}
                  rel={
                    link.path?.includes("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {link.name}
                </StyledLink>
              </Box>
            ))}
          </Grid>
        ))}
      </StyledGrid>

      {/* Bottom Copyright */}
      <Grid
        container
        px={2}
        py={0.7}
        sx={{
          background: "rgba(0,0,0,0.98)",
          color: "white",
          gap: 1,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
      >
        <Grid
          sx={{
            width: { xs: "100%", md: "48%" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <small style={{ opacity: 0.7 }}>
            Copyright 2025 Spiritual Data. All Rights Reserved.
          </small>
        </Grid>

        <Grid
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            alignItems: "center",
            gap: 1,
          }}
        >
          {location.pathname !== "/privacy" && (
            <Link style={{ textDecoration: "none", color: "white" }} to="/privacy">
              <Typography
                sx={{
                  fontSize: "12px",
                  cursor: "pointer",
                  opacity: 0.8,
                  transition: "color 0.2s",
                  '&:hover': { color: (theme: any) => theme.palette.primary.hover },
                }}
              >
                Privacy Policy
              </Typography>
            </Link>
          )}

          {location.pathname !== "/privacy" && location.pathname !== "/cookies" && (
            <Typography sx={{ fontSize: "12px", opacity: 0.6 }}>|</Typography>
          )}

          {location.pathname !== "/cookies" && (
            <Link style={{ textDecoration: "none", color: "white" }} to="/cookies">
              <Typography
                sx={{
                  fontSize: "12px",
                  cursor: "pointer",
                  opacity: 0.8,
                  transition: "color 0.2s",
                  '&:hover': { color: (theme: any) => theme.palette.primary.hover },
                }}
              >
                Cookie Policy
              </Typography>
            </Link>
          )}

          {location.pathname !== "/terms" && (
            <>
              <Typography sx={{ fontSize: "12px", opacity: 0.6 }}>|</Typography>
              <Link style={{ textDecoration: "none", color: "white" }} to="/terms">
                <Typography
                  sx={{
                    fontSize: "12px",
                    cursor: "pointer",
                    opacity: 0.8,
                    transition: "color 0.2s",
                    '&:hover': { color: (theme: any) => theme.palette.primary.hover },
                  }}
                >
                  Terms and Conditions
                </Typography>
              </Link>
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
