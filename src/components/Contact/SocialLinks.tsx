import React from "react";
import {
  Grid,
  SvgIcon,
  Typography,
  styled,
} from "@mui/material";
import { LinkedIn, X, YouTube } from "@mui/icons-material";
import { links } from "../../data/footerData";

const StyledIcon = styled("div")(({ theme }) => ({
  color: "gray",
  margin: "0 6px 0 6px",
  border: "1px solid lightgray",
  borderRadius: 20,
  padding: 6,
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.text.secondary,
    background: theme.palette.primary.hover,
  },
}));

const SocialLinks = () => {
  return (
    <Grid
      size={{xs:12}}
      my={{ xs: 4, sm: 8 }}
      px={{ xs: 4, md: "26%" }}
      sx={{ textAlign: "center" }}
    >
      <Typography
        sx={{
          fontSize: { xs: "20px", md: "26px" },
          fontWeight: "bold",
        }}
      >
        Email Address:
      </Typography>
      <a
        href="mailto:support@spiritualdata.org"
        style={{ textDecoration: "none" }}
      >
        <Typography
          sx={{
            fontSize: { xs: "20px", md: "26px" },
            fontWeight: "bold",
            color: (theme) => theme.palette.primary.focus,
            "&:hover": {
              color: (theme) => theme.palette.primary.hover,
            },
          }}
        >
          support@spiritualdata.org
        </Typography>
      </a>

      <Grid
        size={12}
        mt={2}
        sx={{ display: "flex", justifyContent: "center", gap: 2 }}
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
  );
};

export default SocialLinks;