import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Box, styled, Divider } from "@mui/material";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

import { menuItems } from "../helpers/footerData";
import footerImage from "../../assests/footer.png";
import logo from "../../assests/header.png";

const StyledGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.secondary,
  bottom: 0,
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
  margin: "0 6px 0 6px",
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.primary.hover,
  },
}));

const Footer = () => {
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
        <Grid
          item
          xs={12}
          sm={2.5}
          p={{ xs: 0, sm: 2.6 }}
          mb={{ xs: 2, sm: 0 }}
          display="flex"
          flexDirection="column"
          alignItems={{ xs: "center", sm: "flex-start" }}
        >
          <img style={{ width: "50%", height: "60%" }} src={logo} alt="" />

          <Grid mt={1} item sx={{ textAlign: { xs: "center", sm: "left" } }}>
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "10px", md: "14px" },
                lineHeight: "1.2rem",
                letterSpacing: "0.2px",
              }}
            >
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan.
            </Typography>
          </Grid>

          <Grid item xs={12} mt={2} display="flex" alignItems="center">
            <StyledIcon as={Facebook} />
            <StyledIcon as={Instagram} />
            <StyledIcon as={Twitter} />
            <StyledIcon as={LinkedIn} />
          </Grid>
        </Grid>

        {menuItems.map((item, index) => (
          <Grid
            key={index}
            item
            xs={item.title === "Contact" ? 12 : 6}
            sm={1.9}
            p={1}
            mt={{ xs: 2, sm: 0 }}
            sx={{
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
                background: theme => theme.palette.primary.focus,
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
                sx={{
                  fontSize: { xs: "14px", sm: "10px", md: "14px" },
                  lineHeight: "1.4rem",
                  letterSpacing: "1px",
                }}
                key={idx}
                py={0.4}
              >
                <StyledLink to={link.path}>{link.name}</StyledLink>
              </Box>
            ))}
          </Grid>
        ))}
      </StyledGrid>

      <Grid
        container
        p={2}
        sx={{ background: "black", color: "white", gap: 2 }}
      >
        <Grid
          item
          xs={12}
          sm={5.8}
          sx={{ textAlign: { xs: "center", sm: "left" } }}
        >
          <small>Copyright 2022 Spiritual Data. All Rights Reserved</small>
        </Grid>

        <Grid
          item
          xs={12}
          sm={5.8}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "flex-end" },
          }}
        >
          <Typography
            sx={{
              fontSize: "13px",
              cursor: "pointer",
              "&:hover": {
                color: theme => theme.palette.primary.hover,
              },
            }}
          >
            Privacy Policy
          </Typography>
          &nbsp;
          <Typography
            sx={{
              fontSize: "13px",
            }}
          >
            -
          </Typography>
          &nbsp;
          <Typography
            sx={{
              fontSize: "13px",
              cursor: "pointer",
              "&:hover": {
                color: theme => theme.palette.primary.hover,
              },
            }}
          >
            Terms & Conditions
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
