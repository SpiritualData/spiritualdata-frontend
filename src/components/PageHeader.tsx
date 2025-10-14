import { Grid, Stack, Typography, styled } from "@mui/material";
import React from "react";
import { fadeInBottom } from "../styles/animations/FadeInBottom";
import { Link } from "react-router-dom";
import { SxProps, Theme } from "@mui/material/styles";
import theme from "../styles/theme";

interface PageHeaderProps {
  image?: string;
  page?: string;
  sx?: object;
}

const StyledHeader = styled(Grid)(({ theme }) => ({
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundColor: theme.palette.primary.main,
  position: "relative",
  minHeight: "64vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  animation: `${fadeInBottom} 3s ease`,
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "200px",
    background: "linear-gradient(180deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)",
    zIndex: 1,
    pointerEvents: "none",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: "0",
  },
  [theme.breakpoints.down("sm")]: {
    backgroundPosition: "center",
    minHeight: "50vh",
  },
}));

const StyledHeaderItem = styled(Grid)(() => ({
  zIndex: 2,
  color: theme.palette.primary.focus,
}));

const PageHeader: React.FC<PageHeaderProps> = ({ image, page }) => {
  const titleStyles: SxProps<Theme> = {
    fontSize: { xs: "30px", sm: "36px" },
    fontWeight: "bold",
    lineHeight: "3rem",
    mt: 5,
  };

  const homeLinkStyles: SxProps<Theme> = {
    fontSize: { xs: "12px", sm: "16px" },
    marginY: "6px",
    ml: 0.5,
    color: (theme) => theme.palette.primary.hero,
    textDecoration: "none",
  };

  const pageIndicatorStyles: SxProps = {
    fontSize: { xs: "12px", sm: "16px" },
    marginY: "6px",
    ml: 0.6,
  };

  return (
    <StyledHeader
      size={{ xs: 12 }}
      // mt={{ xs: 8, md: 0 }}
      sx={{ backgroundImage: `url(${image})` }}
    >
      <StyledHeaderItem px={{ xs: 4, sm: 8 }} textAlign={"center"}>
        <Typography
          sx={{
            fontSize: { xs: "30px", sm: "36px", md: "60px" },
            fontWeight: "bold",
            lineHeight: "3rem",
            letterSpacing: "10px",
            textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
            mt: 5,
            mb: 2,
          }}
        >
          {" "}
          {page}
        </Typography>

        <Stack direction="row" justifyContent="center">
          <Typography
            component={Link}
            to="/"
            sx={{
              fontSize: { xs: "12px", sm: "16px" },
              marginY: "6px",
              ml: 0.5,
              fontWeight: "bold",
              color: (theme) => theme.palette.text.primary,
              textDecoration: "none",
              letterSpacing: "3px",
              textShadow: "2px 2px 2px rgba(255, 255, 255, 0.5)",
            }}
          >
            {page === "Estimating Truth" ? "Initiatives" : "Home"}
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "16px" },
              marginY: "6px",
              ml: 0.6,
              fontWeight: "bold",
              letterSpacing: "3px",
              textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
            }}
          >
            {` → ${page}`}
          </Typography>
        </Stack>
      </StyledHeaderItem>
    </StyledHeader>
  );
};

import { GlobalStyles } from "@mui/material";

const GradientKeyframes = () => (
  <GlobalStyles
    styles={{
      "@keyframes gradient": {
        "0%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" },
        "100%": { backgroundPosition: "0% 50%" },
      },
    }}
  />
);

const PageHeaderWithKeyframes: React.FC<PageHeaderProps> = (props) => (
  <>
    <GradientKeyframes />
    <PageHeader {...props} />
  </>
);

export default PageHeaderWithKeyframes;
