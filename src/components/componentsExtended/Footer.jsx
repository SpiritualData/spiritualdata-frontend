import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Box, styled } from "@mui/material";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

const FooterContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.secondary,
  //   position: "absolute",
  bottom: 0,
  width: "100%",
  padding: "20px 10px",
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: "none",
  '&:hover': {
    color: 'lightgray',
  },
}));

const StyledIcon = styled("div")(({ theme }) => ({
  color: theme.palette.text.secondary,
  margin: "0 10px",
  cursor: "pointer",
  '&:hover': {
    color: 'lightgray',
  },
}));

const menuItems = [
  { title: "Home", links: ["Search", "Quick Search", "What's New", "Chatbot"] },
  { title: "About", links: ["Experiences", "Convention", "Meetings"] },
  { title: "Blog", links: ["Upcoming Events", "Memos", "Articles"] },
  {
    title: "Library",
    links: [
      "Article Series",
      "Spiritual Books and Links",
      "Spiritual Experience",
      "Spiritual Hypothesis",
      "Spiritual Research",
      "FAQ's",
    ],
  },
  { title: "Contact", links: ["Chat Bots", "Add Experience"] },
];

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <FooterContainer container>
        <Grid item xs={12} sm={2}>
          <Typography variant="h6">Logo Here</Typography>
        </Grid>
        {menuItems.map((item, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={2}
            p={1}
            sx={{ overflow: "auto", textAlign: { xs: "center", sm: "left" } }}
          >
            <Typography
            mb={1}
              sx={{
                fontWeight: "500",
                fontSize: { xs: "26px", sm: "20px", md: "28px" },
              }}
            >
              {item.title}
            </Typography>
            {item.links.map((link, idx) => (
              <Box
                component="div"
                sx={{ fontSize: { xs: "14px", sm: "10px", md: "14px" } }}
                key={idx}
                py={0.4}
              >
                <StyledLink to={`/${link.replace(/\s/g, "-").toLowerCase()}`}>
                  {link}
                </StyledLink>
              </Box>
            ))}
          </Grid>
        ))}

        <Grid
          item
          xs={12}
          mt={{ xs: 2, sm: 0 }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StyledIcon as={Facebook} />
          <StyledIcon as={Instagram} />
          <StyledIcon as={Twitter} />
          <StyledIcon as={LinkedIn} />
        </Grid>
      </FooterContainer>
    </Box>
  );
};

export default Footer;
