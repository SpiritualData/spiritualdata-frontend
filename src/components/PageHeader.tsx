import { Grid, Stack, Typography, styled } from "@mui/material";
import React from "react";
import { fadeInBottom } from "../style/animations/FadeInBottom";
import { Link } from "react-router-dom";
import { SxProps, Theme } from "@mui/material/styles";

interface PageHeaderProps {
  image: string;
  page: string;
  sx?: object;
}

const StyledHeader = styled(Grid)(({ theme }) => ({
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  position: "relative",
  minHeight: "64vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  animation: `${fadeInBottom} 3s ease`,
  "&::after": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: "0.6",
  },
  [theme.breakpoints.down("sm")]: {
    backgroundPosition: "center",
    minHeight: "50vh",
  },
}));

const StyledHeaderItem = styled(Grid)(() => ({
  zIndex: 1,
  color: "#fff",
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
    color: (theme) => theme.palette.primary.focus,
    textDecoration: "none",
  };

  const pageIndicatorStyles: SxProps = {
    fontSize: { xs: "12px", sm: "16px" },
    marginY: "6px",
    ml: 0.6,
  };

  return (
    <StyledHeader
          size={{xs:12}}
          mt={{ xs: 8, md: 0 }}
          sx={{ backgroundImage: `url(${image})` }}
        >
          <StyledHeaderItem px={{ xs: 4, sm: 8 }}>
            <Typography
              sx={{
                fontSize: { xs: "30px", sm: "36px" },
                fontWeight: "bold",
                lineHeight: "3rem",
                mt: 5,
              }}
            >
              {" "}
              {page}
            </Typography>
    
            <Stack direction="row">
              <Typography
                component={Link}
                to="/"
                sx={{
                  fontSize: { xs: "12px", sm: "16px" },
                  marginY: "6px",
                  ml: 0.5,
                  color: (theme) => theme.palette.primary.focus,
                  textDecoration: "none",
                }}
              >
                Home
              </Typography>
    
              <Typography
                sx={{
                  fontSize: { xs: "12px", sm: "16px" },
                  marginY: "6px",
                  ml: 0.6,
                }}
              >
                {` > ${page}`}
              </Typography>
            </Stack>
          </StyledHeaderItem>
        </StyledHeader>
  );
};

export default PageHeader;
