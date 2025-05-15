import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Typography, Box, styled, Divider, SvgIcon } from "@mui/material";
import Grid from "@mui/material/Grid";
import { LinkedIn, X, YouTube } from "@mui/icons-material";

import { links, menuItems } from "../helpers/footerData";
import footerImage from "../assets/footer.png";
import logo from "../assets/logo_footer.png";

interface FooterLink {
  name: string;
  path: string;
}

interface MenuItem {
  title: string;
  links: FooterLink[];
}

const StyledGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.secondary,
  width: "100%",
  padding: "60px 10px",
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: "none",
  "&:hover": {
    color: theme.palette.primary.hover,
  },
}));

const StyledIcon = styled("div")(({ theme }) => ({
  color: theme.palette.text.secondary,
  margin: "0 6px",
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.primary.hover,
  },
}));

const Footer: React.FC = () => {
  const location = useLocation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledGrid
        container
        sx={{
          backgroundImage: `url(${footerImage})`,
          backgroundPosition: { xs: "top", sm: "right" },
          backgroundSize: { xs: "auto 50%", sm: "50% auto" },
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Logo and Social Icons */}
        <Grid
          sx={{
            width: { xs: "100%", sm: "25%" },
            p: { xs: 0, sm: 2.6 },
            mb: { xs: 2, sm: 0 },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", sm: "flex-start" },
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            <img
              style={{ width: "150px", height: "100px" }}
              src={logo}
              alt="Logo"
            />
          </Link>

          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "10px", md: "14px" },
              lineHeight: "1.2rem",
              letterSpacing: "0.2px",
              mt: 2,
            }}
          >
            Calculating truth with AI.
          </Typography>

          <Grid
            sx={{
              width: "100%",
              mt: 2,
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-start" },
              gap: 1,
            }}
          >
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
              <StyledIcon as={LinkedIn} />
            </a>
            <a href={links.twitter} target="_blank" rel="noopener noreferrer">
              <StyledIcon as={X} />
            </a>
            <a href={links.youtube} target="_blank" rel="noopener noreferrer">
              <StyledIcon as={YouTube} />
            </a>
            <a href={links.discord} target="_blank" rel="noopener noreferrer">
              <StyledIcon>
                <SvgIcon>
                  <path d="M20.32 4.37a19.8 19.8 0 0 0-4.89-1.52.07.07 0 0 0-.08.04c-.2.38-.44.87-.6 1.25a18.27 18.27 0 0 0-5.5 0c-.16-.4-.4-.87-.6-1.25a.08.08 0 0 0-.09-.04 19.74 19.74 0 0 0-4.88 1.52.07.07 0 0 0-.04.03A20.26 20.26 0 0 0 .1 18.06a.08.08 0 0 0 .03.05 19.9 19.9 0 0 0 6 3.03.08.08 0 0 0 .08-.02c.46-.63.87-1.3 1.22-2a.08.08 0 0 0-.04-.1 13.1 13.1 0 0 1-1.87-.9.08.08 0 0 1 0-.12l.36-.3a.07.07 0 0 1 .08 0 14.2 14.2 0 0 0 12.06 0 .07.07 0 0 1 .08 0l.37.3a.08.08 0 0 1 0 .12 12.3 12.3 0 0 1-1.88.9.08.08 0 0 0-.04.1c.36.7.78 1.36 1.23 2a.08.08 0 0 0 .08.02c1.96-.6 3.95-1.52 6-3.03a.08.08 0 0 0 .04-.05c.5-5.18-.84-9.68-3.55-13.66a.06.06 0 0 0-.03-.03zM8.02 15.33c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.96 2.42-2.16 2.42zm7.97 0c-1.18 0-2.15-1.08-2.15-2.42 0-1.33.95-2.42 2.15-2.42 1.22 0 2.18 1.1 2.16 2.42 0 1.34-.94 2.42-2.16 2.42Z" />
                </SvgIcon>
              </StyledIcon>
            </a>
          </Grid>
        </Grid>

        {/* Footer Menu Links */}
        {menuItems.map((item, index) => (
          <Grid
            key={index}
            sx={{
              width: { xs: "50%", sm: "23%" },
              p: 1,
              mt: { xs: 2, sm: 0 },
              overflow: "auto",
              borderLeft: { xs: "0", sm: "1px solid #3A3B3C" },
              pl: { xs: 0, sm: 3 },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Typography
              sx={{
                fontWeight: "700",
                fontFamily: "Dosis,sans-serif",
                lineHeight: "2.2rem",
                display: "inline-block",
                transform: "scaleY(1.1)",
                letterSpacing: "1px",
                fontSize: { xs: "26px", sm: "20px", md: "20px" },
              }}
            >
              {item.title}
            </Typography>

            <Divider
              sx={{
                background: (theme) => theme.palette.primary.focus,
                width: { xs: "40%", sm: "40px" },
                height: "2px",
                borderRadius: 20,
                mb: 1.4,
                mx: { xs: "30%", sm: 0 },
              }}
            />

            {item.links.map((link, idx) => (
              <Box
                component="div"
                key={idx}
                sx={{
                  fontSize: { xs: "14px", sm: "10px", md: "14px" },
                  lineHeight: "1.4rem",
                  letterSpacing: "1px",
                }}
                py={0.4}
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

      {/* Bottom Copyright & Links */}
      <Grid
        container
        px={2}
        py={1}
        sx={{ background: "black", color: "white", gap: 2 }}
      >
        <Grid
          sx={{
            width: { xs: "100%", md: "48%" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <small>Copyright 2025 Spiritual Data. All Rights Reserved.</small>
        </Grid>

        <Grid
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
          }}
        >
          {location.pathname !== "/privacy" && (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/privacy"
            >
              <Typography
                sx={{
                  fontSize: "13px",
                  cursor: "pointer",
                  "&:hover": { color: (theme) => theme.palette.primary.hover },
                }}
              >
                Privacy Policy
              </Typography>
            </Link>
          )}

          {location.pathname !== "/privacy" &&
            location.pathname !== "/cookies" && (
              <Typography sx={{ fontSize: "13px" }}>&nbsp;-&nbsp;</Typography>
            )}

          {location.pathname !== "/cookies" && (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/cookies"
            >
              <Typography
                sx={{
                  fontSize: "13px",
                  cursor: "pointer",
                  "&:hover": { color: (theme) => theme.palette.primary.hover },
                }}
              >
                Cookie Policy
              </Typography>
            </Link>
          )}

          {location.pathname !== "/terms" && (
            <>
              <Typography sx={{ fontSize: "13px" }}>-</Typography>&nbsp;
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/terms"
              >
                <Typography
                  sx={{
                    fontSize: "13px",
                    cursor: "pointer",
                    "&:hover": {
                      color: (theme) => theme.palette.primary.hover,
                    },
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
